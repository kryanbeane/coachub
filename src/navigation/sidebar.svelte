<script lang="ts">
    import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
    export let currentTile: number = 0;
</script>

<!-- Insert the list: -->
<nav class="list-nav">
    <ul>
        <li><a href="/home">Dashboard</a></li>
        <li><a href="/home/clients">Clients</a></li>
        <li><a href="/home/messages">Messages</a></li>
        <li><a href="/home/designer">Designer</a></li>
        <li><a href="/home/automation">Automation</a></li>
        <li><a href="/home/payment">Payment</a></li>
    </ul>
</nav>