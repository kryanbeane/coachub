import { setDoc, collection, doc, getDoc, query, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from './firebase.client';
import type { User } from 'firebase/auth';
import { programConverter, type Program } from '$lib/data/program/program';
import { Rotation, rotationConverter } from '$lib/data/rotation/rotation';
import { workoutConverter, type Workout } from '$lib/data/workout/workout';
import { exerciseConverter, type Exercise } from '$lib/data/exercise/exercise';

export async function createUser(user: User) {
	try {
		const users = collection(db, 'users');
		await setDoc(doc(users, user.uid), {
			uid: user.uid,
			email: user.email
		});
	} catch (e) {
		console.log(e);
		throw e;
	}
}

export async function createProgram(program: Program, user: User) {
	try {
		const programRef = doc(db, 'users', user.uid, 'programs', program.uid);
		await setDoc(programRef, programConverter.toFirestore(program));

		return { message: 'Program created successfully', programId: program.uid };
	} catch (e) {
		console.log(e);
		throw e;
	}
}

export async function deleteProgram(programId: string, user: User) {
	try {
		const programRef = doc(db, 'users', user.uid, 'programs', programId);
		await deleteDoc(programRef);
		return { message: 'Program deleted successfully' };
	} catch (e) {
		console.log(e);
		throw e;
	}
}

export async function getProgram(programId: string, user: User, fetchRotations: boolean = false) {
	try {
		if (!programId || !user || !user.uid) {
			throw new Error('Invalid arguments to getProgram');
		}

		const programRef = doc(db, 'users', user.uid, 'programs', programId);
		const docSnapshot = await getDoc(programRef);

		if (!docSnapshot.exists()) {
			throw new Error(`Program not found: ${programId}`);
		}

		if (fetchRotations) {
			const rotationsCollection = collection(programRef, 'rotations');
			const rotationsSnapshot = await getDocs(rotationsCollection);
			const rotations = rotationsSnapshot.docs.map((doc) => rotationConverter.fromFirestore(doc));
			return programConverter.fromFirestoreWithRotations(docSnapshot, rotations);
		} else {
			return programConverter.fromFirestore(docSnapshot);
		}
	} catch (e) {
		console.log(e);
		throw e;
	}
}

export async function updateProgram(program: Program, user: User) {
	try {
		const programRef = doc(db, 'users', user.uid, 'programs', program.uid);
		await setDoc(programRef, programConverter.toFirestore(program));
		return { message: 'Program updated successfully', programId: program.uid };
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export async function listPrograms(user: User): Promise<Program[]> {
	try {
		const querySnapshot = await getDocs(query(collection(db, 'users', user.uid, 'programs')));
		const programs = querySnapshot.docs
			.map((docSnapshot) => programConverter.fromFirestore(docSnapshot))
			.filter((p): p is Program => p !== undefined);
		return programs;
	} catch (err) {
		console.error('Error fetching programs:', err);
		throw err;
	}
}

export async function createRotation(rotation: Rotation, programId: string, user: User) {
	try {
		const rotationRef = doc(collection(db, 'users', user.uid, 'programs', programId, 'rotations'));
		await setDoc(rotationRef, rotationConverter.toFirestore(rotation));
		return { message: 'Rotation created successfully', rotationId: rotation.uid };
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export async function updateRotation(rotation: Rotation, programId: string, user: User) {
	try {
		const rotationRef = doc(
			db,
			'users',
			user.uid,
			'programs',
			programId,
			'rotations',
			rotation.uid
		);
		await setDoc(rotationRef, rotationConverter.toFirestore(rotation));
		return { message: 'Rotation updated successfully', rotationId: rotation.uid };
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export async function deleteRotation(rotationId: string, programId: string, user: User) {
	try {
		const rotationRef = doc(db, 'users', user.uid, 'programs', programId, 'rotations', rotationId);
		await deleteDoc(rotationRef);
		return { message: 'Rotation deleted successfully' };
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export async function listAllRotations(programId: string, user: User): Promise<Rotation[]> {
	try {
		const rotationsCollection = collection(
			db,
			'users',
			user.uid,
			'programs',
			programId,
			'rotations'
		);
		const querySnapshot = await getDocs(rotationsCollection);
		return querySnapshot.docs.map((doc) => rotationConverter.fromFirestore(doc));
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export async function createWorkout(
	workout: Workout,
	rotationId: string,
	programId: string,
	user: User
) {
	try {
		const workoutRef = doc(
			collection(db, 'users', user.uid, 'programs', programId, 'rotations', rotationId, 'workouts')
		);
		await setDoc(workoutRef, workoutConverter.toFirestore(workout));
		return { message: 'Workout created successfully', workoutId: workout.uid };
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export async function updateWorkout(
	workout: Workout,
	rotationId: string,
	programId: string,
	user: User
) {
	try {
		const workoutRef = doc(
			db,
			'users',
			user.uid,
			'programs',
			programId,
			'rotations',
			rotationId,
			'workouts',
			workout.uid
		);
		await setDoc(workoutRef, workoutConverter.toFirestore(workout));
		return { message: 'Workout updated successfully', workoutId: workout.uid };
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export async function deleteWorkout(
	workoutId: string,
	rotationId: string,
	programId: string,
	user: User
) {
	try {
		const workoutRef = doc(
			db,
			'users',
			user.uid,
			'programs',
			programId,
			'rotations',
			rotationId,
			'workouts',
			workoutId
		);
		await deleteDoc(workoutRef);
		return { message: 'Workout deleted successfully' };
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export async function listAllWorkouts(
	rotationId: string,
	programId: string,
	user: User
): Promise<Workout[]> {
	try {
		const workoutsCollection = collection(
			db,
			'users',
			user.uid,
			'programs',
			programId,
			'rotations',
			rotationId,
			'workouts'
		);
		const querySnapshot = await getDocs(workoutsCollection);
		return querySnapshot.docs.map((doc) => workoutConverter.fromFirestore(doc));
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export async function createExercise(
	exercise: Exercise,
	workoutId: string,
	rotationId: string,
	programId: string,
	user: User
) {
	try {
		const exerciseRef = doc(
			collection(
				db,
				'users',
				user.uid,
				'programs',
				programId,
				'rotations',
				rotationId,
				'workouts',
				workoutId,
				'exercises'
			)
		);
		await setDoc(exerciseRef, exerciseConverter.toFirestore(exercise));
		return { message: 'Exercise created successfully', exerciseId: exercise.uid };
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export async function updateExercise(
	exercise: Exercise,
	workoutId: string,
	rotationId: string,
	programId: string,
	user: User
) {
	try {
		const exerciseRef = doc(
			db,
			'users',
			user.uid,
			'programs',
			programId,
			'rotations',
			rotationId,
			'workouts',
			workoutId,
			'exercises',
			exercise.uid
		);
		await setDoc(exerciseRef, exerciseConverter.toFirestore(exercise));
		return { message: 'Exercise updated successfully', exerciseId: exercise.uid };
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export async function deleteExercise(
	exerciseId: string,
	workoutId: string,
	rotationId: string,
	programId: string,
	user: User
) {
	try {
		const exerciseRef = doc(
			db,
			'users',
			user.uid,
			'programs',
			programId,
			'rotations',
			rotationId,
			'workouts',
			workoutId,
			'exercises',
			exerciseId
		);
		await deleteDoc(exerciseRef);
		return { message: 'Exercise deleted successfully' };
	} catch (e) {
		console.error(e);
		throw e;
	}
}

export async function listAllExercises(
	workoutId: string,
	rotationId: string,
	programId: string,
	user: User
): Promise<Exercise[]> {
	try {
		const exercisesCollection = collection(
			db,
			'users',
			user.uid,
			'programs',
			programId,
			'rotations',
			rotationId,
			'workouts',
			workoutId,
			'exercises'
		);
		const querySnapshot = await getDocs(exercisesCollection);
		return querySnapshot.docs.map((doc) => exerciseConverter.fromFirestore(doc));
	} catch (e) {
		console.error(e);
		throw e;
	}
}
