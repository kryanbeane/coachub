// import { redirect } from '@sveltejs/kit';

// /** @type {import('@sveltejs/kit').Handle} */
// export async function handle({ event, resolve }) {
// 	const protectRoutes = ['/home'];


// 	const user = event.locals?.user;
// 	const url = event.url;

//     if (url.pathname == "/") {
//         url.pathname = "/home"
//     }

// 	if (url.pathname !== '/') {xw
// 		if (!user && protectRoutes.find((u) => url.pathname.indexOf(u) > -1)) {
// 			throw redirect(302, `/login?redirect=${url.pathname}`);
// 		}
// 		if (user) {
// 			throw redirect(302, '/home');
// 		}
// 	}

// 	const response = await resolve(event);

// 	return response;
// }