<!-- © 2022 REVATI -->
<script lang="ts">
	import { SPONSORS } from '$lib/data/SPONSORS';
	import Sponsor from './Sponsor.svelte';
</script>

{#if 0 < SPONSORS.length}
	<div class="banner-container">
		<div class="banner-content">
			<ul>
				{#each SPONSORS as sponsor}
					<Sponsor {...sponsor} />
				{/each}
			</ul>
			<ul>
				{#each SPONSORS as sponsor}
					<Sponsor {...sponsor} />
				{/each}
			</ul>
		</div>
	</div>
{/if}

<style lang="scss">
	@use '/assets/stylesheets/variables/dimension' as *;
	@use '/assets/stylesheets/variables/mixin' as *;

	.banner-container {
		background-color: #111111;
		box-shadow: 0 6px 18px #00000050;
		overflow-x: hidden;
	}

	.banner-content {
		display: flex;
		width: 200%;
		height: 98px;

		&:hover ul {
			animation-play-state: paused;
		}

		@include sp {
			height: 70px;
		}
	}

	ul {
		display: flex;
		height: 100%;
		width: 200%;
		margin: 0;
		padding: 0;
		justify-content: space-around;
		list-style: none;
		translate: 0;
		animation: slide 5s linear infinite;

		@keyframes slide {
			to {
				translate: -100%;
			}
		}
	}
</style>
