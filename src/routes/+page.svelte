<script lang="ts">
	import { Champion } from '$lib/model/Champion';
	import CompDropdown from '$lib/components/CompDropdown.svelte';

	let units = [
		new Champion(0, 'ahri', 5, ['Sorcerer', 'Ionia'], { row: 0, column: 1 }),
		new Champion(1, 'yasuo', 4, ['Challenger', 'Ionia'], { row: 1, column: 4 }),
		new Champion(0, 'akshan', 3, ['Shurima', 'Deadeye'], { row: 0, column: 2 }),
		new Champion(0, 'malzahar', 1, ['Sorcerer', 'Void'], { row: 0, column: 3 }),
		new Champion(0, 'chogath', 1, ['Bruiser', 'Void'], { row: 0, column: 4 }),
		new Champion(0, 'belveth', 5, ['Void', 'Empress'], { row: 0, column: 5 }),
		new Champion(0, 'reksai', 3, ['Bruiser', 'Void'], { row: 0, column: 6 }),
		new Champion(0, 'kassadin', 2, ['Bastion', 'Void'], { row: 0, column: 7 })
	];
</script>

<svelte:head>
	<title>TFT Comps</title>
</svelte:head>

<div class="container mx-auto flex h-full max-w-3xl items-center justify-center">
	<CompDropdown {units} />
</div>
