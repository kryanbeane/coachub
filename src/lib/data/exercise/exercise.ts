import { v4 as uuidv4 } from 'uuid';
import type { DocumentData, DocumentSnapshot } from 'firebase/firestore';

export class Exercise {
    uid: string;
    name: string;
    description: string;

    constructor(name: string, description: string, uid?: string) {
        this.uid = uid || uuidv4(); 
        this.name = name;
        this.description = description;
    }
}

export const exerciseConverter = {
    toFirestore: (exercise: Exercise): DocumentData => {
        return {
            uid: exercise.uid,
            name: exercise.name,
            description: exercise.description
        };
    },
    fromFirestore: (snapshot: DocumentSnapshot<DocumentData>): Exercise => {
        const data = snapshot.data();
        if (!data) throw new Error('Exercise data not found');

        return new Exercise(
            data.name,
            data.description,
            snapshot.id
        );
    }
};
