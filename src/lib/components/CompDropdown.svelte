<!--suppress CheckEmptyScriptTag -->
<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import HexBoard from '$lib/components/HexBoard.svelte';
	import TraitHexSvg from '$lib/components/TraitHexSvg.svelte';

	export let units;

	$: units = units.sort((a, b) => {
		return a.cost - b.cost;
	});

	let traits;
	$: traits = calculateTraits(units);

	function calculateTraits(units) {
		let allTraits = [];
		for (let i = 0; i < units.length; i++) {
			for (let z = 0; z < units[i].traits.length; z++) {
				allTraits.push(units[i].traits[z]);
			}
		}

		let traits = [];
		outer: for (let i = 0; i < allTraits.length; i++) {
			for (let x = 0; x < traits.length; x++) {
				if (traits[x].name === allTraits[i]) {
					continue outer;
				}
			}
			let count = allTraits.filter((t) => t === allTraits[i]).length;
			traits.push({ name: allTraits[i], amount: count });
		}
		traits.sort((a, b) => {
			return b.amount - a.amount;
		});
		return traits;
	}

	function upVote() {
		console.log('Upvoted');
		console.log(units[0].borderColor);
	}

	function downVote() {
		console.log('Downvoted');
	}
</script>

<Accordion>
	<AccordionItem open>
		<svelte:fragment slot="lead">
			<div
				class="flex flex-col items-center justify-center gap-0.5 px-1 py-1"
				on:click|stopPropagation|preventDefault
			>
				<i class="fa-solid fa-caret-up" on:click={upVote} />
				<p>0</p>
				<i class="fa-solid fa-caret-down" on:click={downVote} />
			</div>
		</svelte:fragment>
		<svelte:fragment slot="summary">
			<div class="flex flex-row items-center justify-between">
				<p>Void Bruisers</p>
				<div class="flex flex-row gap-1">
					{#each units as unit}
						<img
							src="/images/champions/{unit.name}.webp"
							alt={unit.name}
							class="h-12 w-12 border"
							style="border-color: {unit.borderColor}"
						/>
					{/each}
				</div>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<div class="flex flex-row justify-between">
				<div
					class="flex grow basis-1/3 flex-row flex-wrap place-content-start justify-items-center gap-2 pt-5"
				>
					{#each traits as trait}
						<TraitHexSvg {trait} />
					{/each}
				</div>

				<HexBoard {units} />
			</div>
		</svelte:fragment>
	</AccordionItem>
</Accordion>
