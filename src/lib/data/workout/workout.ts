import type { DocumentData, DocumentSnapshot } from 'firebase/firestore';
import { type Exercise, exerciseConverter } from '../exercise/exercise';

export class Workout {
	name: string;
	exercises: Exercise[];

	constructor(name: string, exercises: Exercise[]) {
		this.name = name;
		this.exercises = exercises;
	}
}

export const workoutConverter = {
	toFirestore: (workout: Workout): any => {
		return {
			name: workout.name,
			exercises: workout.exercises.map((exercise) => exerciseConverter.toFirestore(exercise))
		};
	},
	fromFirestore: (snapshot: DocumentSnapshot): Workout | undefined => {
		const data = snapshot.data();
		if (data) {
			return new Workout(
				data.name,
				data.exercises.map((exercise: DocumentSnapshot<DocumentData, DocumentData>) =>
					exerciseConverter.fromFirestore(exercise)
				)
			);
		}
		return undefined;
	}
};
