<!-- © 2022 REVATI -->
<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let body: typeof SvelteComponent;
</script>

<article class="article-body"><svelte:component this={body} /></article>

<style lang="scss" global>
	@use '$lib/stylesheets/news/article_body';
</style>
