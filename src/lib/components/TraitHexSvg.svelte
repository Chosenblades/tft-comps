<script lang="ts">
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	export let trait;

	const traitPopup: PopupSettings = {
		event: 'hover',
		target: `${trait.name}Popup`,
		placement: 'top'
	};
</script>

<div class="[&>*]:pointer-events-none" use:popup={traitPopup}>
	<div class="flex max-h-[35px] flex-row items-center pl-3 [&>*]:pointer-events-none">
		<svg
			fill="#7c8f92"
			viewBox="-5.6 -5.6 67.20 67.20"
			xmlns="http://www.w3.org/2000/svg"
			stroke="#000000"
			height="35px"
			width="35px"
			class="z-10 -ml-4 [&>*]:pointer-events-none"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)" /><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke="#0f0f11"
				stroke-width="4.48"
				><path
					d="M 7.5860 42.9414 L 23.8516 52.1758 C 26.6407 53.7695 29.3126 53.7930 32.1485 52.1758 L 48.4141 42.9414 C 50.5938 41.6992 51.7890 40.4336 51.7890 37.0352 L 51.7890 18.8008 C 51.7890 15.4961 50.5703 14.3008 48.5783 13.1523 L 32.2657 3.8711 C 29.3595 2.2070 26.5704 2.2305 23.7344 3.8711 L 7.4219 13.1523 C 5.4297 14.3008 4.2110 15.4961 4.2110 18.8008 L 4.2110 37.0352 C 4.2110 40.4336 5.4063 41.6992 7.5860 42.9414 Z"
				/></g
			><g id="SVGRepo_iconCarrier"
				><path
					d="M 7.5860 42.9414 L 23.8516 52.1758 C 26.6407 53.7695 29.3126 53.7930 32.1485 52.1758 L 48.4141 42.9414 C 50.5938 41.6992 51.7890 40.4336 51.7890 37.0352 L 51.7890 18.8008 C 51.7890 15.4961 50.5703 14.3008 48.5783 13.1523 L 32.2657 3.8711 C 29.3595 2.2070 26.5704 2.2305 23.7344 3.8711 L 7.4219 13.1523 C 5.4297 14.3008 4.2110 15.4961 4.2110 18.8008 L 4.2110 37.0352 C 4.2110 40.4336 5.4063 41.6992 7.5860 42.9414 Z"
				/></g
			></svg
		>
		<img
			src="/images/traits/{trait.name.toLowerCase()}.webp"
			class="z-20 -ml-[26px] h-4 w-4"
			alt=""
		/>
		<div class="-ml-2 h-7 w-9 rounded bg-[#2b2d30]" />
		<p class="z-10 -ml-4">{trait.amount}</p>
	</div>

	<div class="card z-40 max-w-xs p-4" data-popup="{trait.name}Popup">
		<div class="flex flex-col gap-2">
			<div class="flex flex-row items-center gap-2">
				<img src="/images/traits/{trait.name.toLowerCase()}.webp" class="h-4 w-4" alt="" />

				<p>{trait.name}</p>
			</div>

			<article class="prose prose-sm prose-invert">
				After 5 seconds, an ice storm strikes the battlefield. Enemies take a percentage of their
				maximum Health as true damage and gain debuffs for 15 seconds.
				<br />
				<br />
				Sunder: Reduce Armor
				<br />
				Shred: Reduce Magic Resist
				<br />
				Mana Reave: Increase max Mana until the next cast
			</article>

			<div class="flex flex-col">
				<p class="">(2) do someting</p>
				<p class="">(3) do something</p>
				<p class="inactive-trait">(4) do something</p>
			</div>

			<div class="flex flex-row gap-1">
				<img src="/images/champions/ashe.webp" class="h-7 w-7" alt="" />
				<img src="/images/champions/lissandra.webp" class="h-7 w-7" alt="" />
				<img src="/images/champions/sejuani.webp" class="h-7 w-7" alt="" />
				<img src="/images/champions/yasuo.webp" class="h-7 w-7" alt="" />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.inactive-trait {
		@apply text-[#d1d5db] opacity-40;
	}
</style>
