import type { DocumentData, DocumentSnapshot } from 'firebase/firestore';
import { workoutConverter, type Workout } from '../workout/workout';

export class Rotation {
	name: string;
	workouts: Workout[];

	constructor(name: string, workouts: Workout[]) {
		this.name = name;
		this.workouts = workouts;
	}
}

export const rotationConverter = {
	toFirestore: (rotation: Rotation): any => {
		return {
			name: rotation.name,
			workouts: rotation.workouts.map((workout) => workoutConverter.toFirestore(workout))
		};
	},
	fromFirestore: (snapshot: DocumentSnapshot): Rotation | undefined => {
		const data = snapshot.data();
		if (data) {
			return new Rotation(
				data.name,
				data.workouts.map((workout: DocumentSnapshot<DocumentData, DocumentData>) =>
					workoutConverter.fromFirestore(workout)
				)
			);
		}
		return undefined;
	}
};
