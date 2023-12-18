import { v4 as uuidv4 } from 'uuid';
import type { Workout } from '../workout/workout';
import { workoutConverter } from '../workout/workout';

export class Rotation {
    uid: string;
    name: string;
    workouts: Workout[];

    constructor(name: string, workouts: Workout[], uid?: string) {
        this.uid = uid || uuidv4(); 
        this.name = name;
        this.workouts = workouts;
    }
}

import type { DocumentData, DocumentSnapshot } from 'firebase/firestore';

export const rotationConverter = {
    toFirestore: (rotation: Rotation): DocumentData => {
        return {
			uid: rotation.uid,
            name: rotation.name,
            workouts: rotation.workouts.map(workout => workoutConverter.toFirestore(workout))
        };
    },
    fromFirestore: (snapshot: DocumentSnapshot<DocumentData>): Rotation => {
        const data = snapshot.data();
        if (!data) throw new Error('Rotation data not found');

        return new Rotation(
            data.name,
            data.workouts ? data.workouts.map((workoutData: DocumentSnapshot<DocumentData, DocumentData>) => workoutConverter.fromFirestore(workoutData)) : [],
            snapshot.id
        );
    }
};
