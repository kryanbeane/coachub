import type { DocumentSnapshot, SnapshotOptions, DocumentData } from 'firebase/firestore';
import { exerciseInstanceConverter, ExerciseInstance } from '../exercise/exerciseInstance';
import { Workout, workoutConverter } from './workout';

export class WorkoutInstance {
	workout: Workout;
	date: Date;
	exerciseInstances: ExerciseInstance[];

	constructor(workout: Workout, date: Date, exerciseInstances: ExerciseInstance[]) {
		this.workout = workout;
		this.date = date;
		this.exerciseInstances = exerciseInstances;
	}
}

export const workoutInstanceConverter = {
	toFirestore: (workoutInstance: WorkoutInstance): any => {
		return {
			workout: workoutConverter.toFirestore(workoutInstance.workout),
			date: workoutInstance.date.toISOString(),
			exerciseInstances: workoutInstance.exerciseInstances.map((exInstance) =>
				exerciseInstanceConverter.toFirestore(exInstance)
			)
		};
	},
	fromFirestore: (
		snapshot: DocumentSnapshot<DocumentData, DocumentData>,
		options?: SnapshotOptions
	): WorkoutInstance | undefined => {
		const data = snapshot.data(options);
		if (data && data.workout && Array.isArray(data.exerciseInstances)) {
			const workout = workoutConverter.fromFirestore(data.workout);
			if (workout) {
				return new WorkoutInstance(
					workout,
					new Date(data.date),
					data.exerciseInstances
						.map((exData: DocumentSnapshot<DocumentData, DocumentData>) =>
							exerciseInstanceConverter.fromFirestore(exData)
						)
						.filter(
							(exInstance: ExerciseInstance | undefined): exInstance is ExerciseInstance =>
								!!exInstance
						)
				);
			}
		}
		return undefined;
	}
};
