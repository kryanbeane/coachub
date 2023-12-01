<script lang="ts">
    import { TabGroup, TabAnchor } from "@skeletonlabs/skeleton";
    import { page } from '$app/stores';
</script>

<h2 class="h2 p-8">Designer</h2>

<TabGroup class="px-8">
    <TabAnchor href="/designer/workouts" selected={$page.url.pathname === '/designer/workouts'}>Workouts</TabAnchor>
    <TabAnchor href="/designer/nutrition" selected={$page.url.pathname === '/designer/nutrition'}>Nutrition</TabAnchor>
    <TabAnchor href="/designer/habits" selected={$page.url.pathname === '/designer/habits'}>Habits</TabAnchor>
</TabGroup>

<slot />