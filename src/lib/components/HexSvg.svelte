<script lang="ts">
	export let borderColor = null;
	export let imageName = null;
</script>

<svg
	fill={imageName === null ? '#2b2d30' : `url(#${imageName})`}
	viewBox="-5.6 -5.6 67.20 67.20"
	xmlns="http://www.w3.org/2000/svg"
	stroke="#000000"
	height="50px"
	width="50px"
	class="-mx-0.5"
>
	{#if imageName !== null}
		<defs>
			<pattern id={imageName} patternUnits="userSpaceOnUse" width="55" height="55">
				<image xlink:href="/images/champions/{imageName}.webp" x="0" y="0" width="55" height="55" />
			</pattern>
		</defs>
	{/if}
	<g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)" /><g
		id="SVGRepo_tracerCarrier"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke={borderColor === null ? '#0f0f11' : borderColor}
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
