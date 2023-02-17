<!-- © 2022 - 2023 REVATI -->
<script lang="ts">
	/** Name of the section. */
	export let name: string;
</script>

<img src="/images/{name}.svg" alt={name} />

<style>
	img {
		height: 64px;
		width: auto;
		text-align: center;
		margin-top: 86px;
		margin-bottom: 32px;
		user-select: none;
		pointer-events: none;
	}
</style>
