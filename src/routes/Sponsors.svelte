<!-- © 2022 REVATI -->
<script lang="ts">
	import MaterialIcon from '$lib/components/MaterialIcon.svelte';
	import { SPONSORS } from '$lib/data/SPONSORS';
</script>

{#if 0 < SPONSORS.length}
	<ul>
		{#each SPONSORS as { name, url, logo }}
			<li>
				<a href={url} target="_blank" rel="noopener noreferrer">
					<img src="/images/logos/{logo}" alt={name} />
					<span>{name}<MaterialIcon kind="box-arrow-up-right" width="16px" /></span>
				</a>
			</li>
		{/each}
	</ul>
{:else}
	<p>...( 'ω')</p>
{/if}

<style lang="scss">
	ul {
		padding: 0;
		list-style: none;
	}

	li {
		margin: 0;
		transition: 0.1s;

		&:hover {
			background-color: #ffffff12;
		}
	}

	a {
		display: inline-block;
		color: inherit;
		padding: 44px 0;
	}

	img {
		display: block;
		max-width: 86%;
		margin: 0 auto;
		margin-bottom: 22px;
	}

	span {
		font-size: 16px;
	}
</style>
