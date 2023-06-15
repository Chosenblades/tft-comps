<script lang="ts">
	import { Champion } from '$lib/model/Champion';
	import HexSvg from '$lib/components/HexSvg.svelte';

	const UNIT_COLORS = ['#687989', '#20b157', '#18c1ee', '#c61b95', '#f6850b'];
	export let units: Champion[];

	//hexes[row][column] - 4 rows, 7 columns
	let hexes = []; //new Array(4).fill(new Array(7).fill(null));

	function fillHexes() {
		for (let i = 0; i < 4; i++) {
			hexes[i] = new Array(7).fill(null);
		}
	}
	function assignUnits() {
		fillHexes();
		for (let i = 0; i < units.length; i++) {
			hexes[units[i].position.row][units[i].position.column] = units[i];
		}
	}

	assignUnits();
</script>

<div class="flex flex-col p-5 pl-10">
	{#each hexes as row, i (i)}
		<div class="-mb-3 flex flex-row {i % 2 === 0 ? '-ml-[23px]' : ''}">
			{#each row as column, x (x)}
				<HexSvg
					borderColor={column === null ? null : UNIT_COLORS[column.cost - 1]}
					imageName={column === null ? null : column.name.toLowerCase()}
				/>
			{/each}
		</div>
	{/each}
</div>

<style lang="postcss">
</style>
