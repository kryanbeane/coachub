<script>
	import { onDestroy } from 'svelte';
    import { authStore } from '../../lib/stores/authStore'; // Adjust the import path as necessary

    let userEmail = 'authStore';

    let unsubscribe = authStore.subscribe($authStore => {
        userEmail = $authStore.currentUser?.email || 'authStore';
    });
    onDestroy(() => {
        if (unsubscribe) unsubscribe();
    });
</script>

<div class="container mx-auto p-8 space-y-8">
    <h1 class="h1">Hello {userEmail}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <section>
        <a class="btn variant-filled-primary" href="https://kit.svelte.dev/">SvelteKit</a>
    </section>
</div>
