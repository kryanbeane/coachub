<script lang="ts">
	import type { DataHandler, Field } from '@vincjo/datatables';
	export let handler: DataHandler;
	export let filterBy: Field<any>;
	let value = '';
</script>

<th>
	<input
		class="input variant-form-material h-8 text-sm w-full"
		type="text"
		placeholder="Filter"
		bind:value
		on:input={() => {
			if (filterBy) {
				handler.filter(value, filterBy);
			}
		}}
	/>
</th>
