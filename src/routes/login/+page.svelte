<script lang="ts">
      import { signInWithGoogle } from '../../stores/authStore';
</script>

<div class="flex items-center justify-center min-h-screen">
	<div class="card p-10 max-w-lg w-full mx-auto rounded-lg text-center">
		<h1 class="text-4xl font-bold text-black dark:text-white">
			coac<span
				class="bg-gradient-to-br from-primary-500 to-primary-300 bg-clip-text text-transparent"
				>hub</span
			>
		</h1>
		<p class="text-sm py-2 text-gray-700 dark:text-gray-300">
			Only Google Sign in is available with the Alpha.
		</p>

		<div class="mt-4">
			<button
				on:click={signInWithGoogle}
				type="button"
				class="btn btn-outline variant-ringed flex justify-center items-center w-full"
			>
				<img
					class="inline mr-2"
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
