<!-- © 2022 - 2024 REVATI -->
<script lang="ts">
	import { date as date_i18n } from 'svelte-i18n';

	export let date: string;

	function d() {
		const y = date.slice(0, 4);
		const m = date.slice(4, 6).replace(/^0+/, '');
		const d = date.slice(6, 8).replace(/^0+/, '');
		return Date.UTC(+y, +m - 1, +d);
	}
</script>

<div>{$date_i18n(d(), { format: 'long' })}</div>

<style lang="scss">
	div {
		display: inline-block;
	}
</style>
