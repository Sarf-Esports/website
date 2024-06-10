<!-- © 2022 REVATI -->
<script lang="ts">
	import { SPONSORS } from '$lib/data/sponsors';
	import LinkButton from '$lib/components/LinkButton.svelte';
</script>

{#if 0 < SPONSORS.length}
	<ul>
		{#each SPONSORS as { name, website, logo }}
			<li>
				<a href={website.url} target="_blank" rel="noopener noreferrer">
					<img src="/images/logos/{logo}" alt={name} />
					<LinkButton text={website.name} />
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
		margin: 64px 0;
	}

	a {
		display: block;
		font-size: 22px;
		text-decoration: none;
	}

	img {
		display: block;
		max-width: 86%;
		margin: 0 auto;
		margin-bottom: 40px;
	}
</style>
