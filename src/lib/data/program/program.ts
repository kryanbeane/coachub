import type { DocumentSnapshot, DocumentData } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import type { Rotation } from '../rotation/rotation';

export class Program {
    uid: string;
    name: string;
    description: string;
    rotations: Rotation[];

    constructor(name: string, description: string, rotations: Rotation[] = [], uid?: string) {
        this.uid = uid || uuidv4();
        this.name = name;
        this.description = description;
        this.rotations = rotations;
    }
}

export const programConverter = {
    toFirestore: (program: Program): DocumentData => {
        return {
            uid: program.uid,
            name: program.name,
            description: program.description
        };
    },
    fromFirestore: (snapshot: DocumentSnapshot<DocumentData>): Program => {
        const data = snapshot.data();
        if (!data) throw new Error('Program data not found');

        return new Program(
            data.name,
            data.description,
            [],
            snapshot.id
        );
    },
    fromFirestoreWithRotations: (snapshot: DocumentSnapshot<DocumentData>, rotations: Rotation[]): Program => {
        const data = snapshot.data();
        if (!data) throw new Error('Program data not found');

        return new Program(
            data.name,
            data.description,
            rotations,
            snapshot.id
        );
    }
};
