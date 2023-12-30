import type { DocumentSnapshot, SnapshotOptions, DocumentData } from 'firebase/firestore';
import { Exercise, exerciseConverter } from './exercise';

export class ExerciseInstance {
	exercise: Exercise;
	sets: Set[];

	constructor(exercise: Exercise, sets: Set[]) {
		this.exercise = exercise;
		this.sets = sets;
	}
}

export const exerciseInstanceConverter = {
	toFirestore: (exerciseInstance: ExerciseInstance): any => {
		return {
			exercise: exerciseConverter.toFirestore(exerciseInstance.exercise),
			sets: exerciseInstance.sets.map((set) => ({
				reps: set.reps,
				weight: set.weight
			}))
		};
	},
	fromFirestore: (
		snapshot: DocumentSnapshot,
		options?: SnapshotOptions
	): ExerciseInstance | undefined => {
		const data = snapshot.data(options);
		if (data && data.exercise) {
			const exercise = exerciseConverter.fromFirestore(data.exercise);
			if (exercise) {
				return new ExerciseInstance(
					exercise,
					data.sets.map((setData: DocumentData) => new Set(setData.reps, setData.weight))
				);
			}
		}
		return undefined;
	}
};

class Set {
	reps: number;
	weight: number;

	constructor(reps: number, weight: number) {
		this.reps = reps;
		this.weight = weight;
	}
}
