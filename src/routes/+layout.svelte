<script lang="ts">
    import 'firebase/auth';
    import { onMount } from 'svelte';
    import messageStore from '$lib/stores/message.store';
    import { sendJWTToken } from '$lib/firebase/auth.client';
    import { AppShell } from '@skeletonlabs/skeleton';
    import '../app.postcss';

	let timerId: ReturnType<typeof setInterval>;

    async function sendServerToken() {
        try {
            await sendJWTToken();
        } catch (error) {
            clearInterval(timerId);
            messageStore.showError("error here 4" + error as string);
            console.error(error);
        }
    }

    function closeMessage() {
        messageStore.hide();
    }

    onMount(() => {
        try {
            sendServerToken();
            timerId = setInterval(async () => {
                await sendServerToken();
            }, 1000 * 10 * 60); // 10 minutes interval
        } catch (e) {
            console.error(e);
            messageStore.showError("error here 5" + e as string);
        }

        return () => {
            clearInterval(timerId);
        };
    });
</script>

<AppShell>
    {#if $messageStore.show}
        <div class="alert alert-dismissible" role="alert">
            <strong>{$messageStore.type === 'error' ? 'Error' : 'Success'}:</strong>
            {$messageStore.message}
            <button type="button" on:click={closeMessage} class="btn-close" aria-label="Close" />
        </div>
    {/if}
    <slot />
</AppShell>