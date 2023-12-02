<script lang="ts">
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';
    import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar>
    <svelte:fragment slot="lead">
        <strong class="text-xl uppercase">Coachub</strong>
    </svelte:fragment>
    <svelte:fragment slot="trail">
        <a
            class="btn btn-sm variant-ghost-surface"
            href="/login"
            rel="noreferrer">
            Sign In
        </a>
        <LightSwitch />
        
    </svelte:fragment>
</AppBar>