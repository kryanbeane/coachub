import type { DocumentData, DocumentSnapshot, SnapshotOptions } from 'firebase/firestore';
import { rotationConverter, type Rotation } from '../rotation/rotation';

export class Program {
	name: string;
	description: string;
	rotationCount: number;
	rotations: Rotation[];

	constructor(name: string, description: string, rotationCount: number, rotations: Rotation[]) {
		this.name = name;
		this.description = description;
		this.rotationCount = rotationCount;
		this.rotations = rotations;
	}
}

export const programConverter = {
	toFirestore: (program: Program): any => {
		return {
			name: program.name,
			description: program.description,
			rotationCount: program.rotationCount,
			rotations: program.rotations.map((rotation) => rotationConverter.toFirestore(rotation))
		};
	},
	fromFirestore: (snapshot: DocumentSnapshot, options?: SnapshotOptions): Program | undefined => {
		const data = snapshot.data(options);
		if (data) {
			return new Program(
				data.name,
				data.description,
				data.rotationCount,
				data.rotations.map((rotation: DocumentSnapshot<DocumentData, DocumentData>) =>
					rotationConverter.fromFirestore(rotation)
				)
			);
		}
		return undefined;
	}
};
