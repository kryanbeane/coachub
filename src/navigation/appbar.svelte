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
            href="https://discord.gg/EXqV7W8MtY"
            target="_blank"
            rel="noreferrer"
        >
            Discord
        </a>
        <a
            class="btn btn-sm variant-ghost-surface"
            href="https://twitter.com/SkeletonUI"
            target="_blank"
            rel="noreferrer"
        >
            Twitter
        </a>
        <a
            class="btn btn-sm variant-ghost-surface"
            href="https://github.com/skeletonlabs/skeleton"
            target="_blank"
            rel="noreferrer"
        >
            GitHub
        </a>
        <a
            class="btn btn-sm variant-ghost-surface"
            href="/clients"
            target="_blank"
            rel="noreferrer">
            a
        </a>
        <LightSwitch />
        
    </svelte:fragment>
</AppBar>