import type { DocumentSnapshot, SnapshotOptions, DocumentData } from 'firebase/firestore';
import { RotationInstance, rotationInstanceConverter } from '../rotation/rotationInstance';
import { Rotation, rotationConverter } from '../rotation/rotation';
import type { Program } from './program';

export class ProgramInstance {
	program: Program;
	completedRotations: RotationInstance[];
	futureRotations: Rotation[];

	constructor(
		program: Program,
		completedRotations: RotationInstance[],
		futureRotations: Rotation[]
	) {
		this.program = program;
		this.completedRotations = completedRotations;
		this.futureRotations = futureRotations;
	}
}

export const programInstanceConverter = {
	toFirestore: (programInstance: ProgramInstance): any => {
		return {
			program: programInstance.program, // Assuming Program has a simple structure
			completedRotations: programInstance.completedRotations.map((rotationInstance) =>
				rotationInstanceConverter.toFirestore(rotationInstance)
			),
			futureRotations: programInstance.futureRotations.map((rotation) =>
				rotationConverter.toFirestore(rotation)
			)
		};
	},
	fromFirestore: (
		snapshot: DocumentSnapshot,
		options?: SnapshotOptions
	): ProgramInstance | undefined => {
		const data = snapshot.data(options);
		if (data) {
			return new ProgramInstance(
				data.program, // Assuming Program is simple data structure
				data.completedRotations.map((rotationData: DocumentSnapshot<DocumentData, DocumentData>) =>
					rotationInstanceConverter.fromFirestore(rotationData)
				),
				data.futureRotations.map((rotationData: DocumentSnapshot<DocumentData, DocumentData>) =>
					rotationConverter.fromFirestore(rotationData)
				)
			);
		}
		return undefined;
	}
};
