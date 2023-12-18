import { v4 as uuidv4 } from 'uuid';
import type { Exercise } from '../exercise/exercise';
import { exerciseConverter } from '../exercise/exercise';
import type { DocumentData, DocumentSnapshot } from 'firebase/firestore';

export class Workout {
    uid: string;
    name: string;
    exercises: Exercise[];

    constructor(name: string, exercises: Exercise[], uid?: string) {
        this.uid = uid || uuidv4();
        this.name = name;
        this.exercises = exercises;
    }
}

export const workoutConverter = {
    toFirestore: (workout: Workout): DocumentData => {
        return {
			uid: workout.uid, 
            name: workout.name,
            exercises: workout.exercises.map(exercise => exerciseConverter.toFirestore(exercise))
        };
    },
    fromFirestore: (snapshot: DocumentSnapshot<DocumentData>): Workout => {
        const data = snapshot.data();
        if (!data) throw new Error('Workout data not found');

        return new Workout(
            data.name,
            data.exercises ? data.exercises.map((exerciseData: DocumentSnapshot<DocumentData, DocumentData>) => exerciseConverter.fromFirestore(exerciseData)) : [],
            snapshot.id 
        );
    }
};
