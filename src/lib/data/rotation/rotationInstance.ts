import type { DocumentSnapshot, SnapshotOptions, DocumentData } from 'firebase/firestore';
import { WorkoutInstance, workoutInstanceConverter } from '../workout/workoutInstance';
import type { Rotation } from './rotation';

export class RotationInstance {
	rotation: Rotation;
	workoutInstances: WorkoutInstance[];

	constructor(rotation: Rotation, workoutInstances: WorkoutInstance[]) {
		this.rotation = rotation;
		this.workoutInstances = workoutInstances;
	}
}

export const rotationInstanceConverter = {
	toFirestore: (rotationInstance: RotationInstance): any => {
		return {
			rotation: rotationInstance.rotation, // Assuming Rotation has a simple structure
			workoutInstances: rotationInstance.workoutInstances.map((wi) =>
				workoutInstanceConverter.toFirestore(wi)
			)
		};
	},
	fromFirestore: (
		snapshot: DocumentSnapshot<DocumentData, DocumentData>,
		options?: SnapshotOptions
	): RotationInstance | undefined => {
		const data = snapshot.data(options);
		if (data) {
			return new RotationInstance(
				data.rotation, // Assuming Rotation is simple data structure
				data.workoutInstances.map((wiData: DocumentSnapshot<DocumentData, DocumentData>) =>
					workoutInstanceConverter.fromFirestore(wiData)
				)
			);
		}
		return undefined;
	}
};
