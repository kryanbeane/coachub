<script lang="ts">
	let tabSet: number = 1; // default to signup

	let email = '';
	let password = '';
	let confirmPassword = '';
	let passwordsMatch = true;

	const handleSignUp = () => {
		if (password !== confirmPassword) {
			passwordsMatch = false;
			return;
		}
	};

	// const passwordToggle = document.querySelector('.js-password-toggle')

	// // passwordToggle.addEventListener('change', function() {
	// // const password = document.querySelector('.js-password'),
	// //     passwordLabel = document.querySelector('.js-password-label')

	// // if (password.type === 'password') {
	// //     password.type = 'text'
	// //     passwordLabel.innerHTML = 'hide'
	// // } else {
	// //     password.type = 'password'
	// //     passwordLabel.innerHTML = 'show'
	// // }

	// // password.focus()
	// // })
</script>

<div class="flex items-center justify-center min-h-screen">
	<div class="card p-10 max-w-lg w-full mx-auto rounded-lg text-center">
		<h1 class="text-4xl font-bold text-black dark:text-white">
			coac<span
				class="bg-gradient-to-br from-primary-500 to-primary-300 bg-clip-text text-transparent"
				>hub</span
			>
		</h1>
		<p class="text-sm py-2 text-gray-700 dark:text-gray-300">Only Google Sign in is available with the Alpha.</p>

		<div class="mt-4">
			<button type="button" class="btn btn-outline variant-ringed flex justify-center items-center w-full">
				<img class="inline mr-2"
					src="https://raw.githubusercontent.com/gist/twolfson/8f578c0720df7fc87f29e4d8395cf76b/raw/cee86d79725205756e742469b5f02dacf30a09a7/logo-from-builder.optimized.svg"
					width="20"
					height="20"
					alt="Google Logo"
				/>
				<span>Continue with Google</span>
			</button>
		</div>

		<slot />
	</div>
</div>

