<script lang="ts">
	import type { DataHandler, Field } from '@vincjo/datatables';
	export let handler: DataHandler;
	export let orderBy: Field<any>;

	const identifier = orderBy?.toString();
	const sorted = handler.getSort();
</script>

<th on:click={() => handler.sort(orderBy)} class:active={$sorted.identifier === identifier}>
	<div class="flex">
		<slot />
		<span class:asc={$sorted.direction === 'asc'} class:desc={$sorted.direction === 'desc'} />
	</div>
</th>

<style>
	th {
		cursor: pointer;
	}
	th div.flex {
		padding: 0;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 100%;
	}
	th span {
		padding-left: 8px;
	}
	th span:before,
	th span:after {
		border: 4px solid transparent;
		content: '';
		display: block;
		height: 0;
		width: 0;
	}
	th span:before {
		border-bottom-color: #e0e0e0;
		margin-top: 2px;
	}
	th span:after {
		border-top-color: #e0e0e0;
		margin-top: 2px;
	}
	th.active span.asc:before {
		border-bottom-color: #9e9e9e;
	}
	th.active span.desc:after {
		border-top-color: #9e9e9e;
	}
</style>
