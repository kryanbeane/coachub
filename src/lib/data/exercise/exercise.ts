import type { DocumentSnapshot } from 'firebase/firestore';

export class Exercise {
	name: string;
	description: string;

	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
	}
}

export const exerciseConverter = {
	toFirestore: (exercise: Exercise): any => {
		return {
			name: exercise.name,
			description: exercise.description
		};
	},
	fromFirestore: (snapshot: DocumentSnapshot): Exercise | undefined => {
		const data = snapshot.data();
		if (data) {
			return new Exercise(data.name, data.description);
		}
		return undefined;
	}
};
