<!-- © 2022 REVATI -->
<script lang="ts">
	/** Name of the section. */
	export let name: string;
</script>

<img src="/images/{name}.svg" alt={name} />

<style lang="scss">
	@use '/assets/stylesheets/variables/mixin' as *;

	img {
		height: 64px;
		width: auto;
		margin-top: 64px;
		margin-bottom: 32px;
		user-select: none;
		pointer-events: none;
		filter: hue-rotate(156deg) saturate(2.4) brightness(0.77);

		@include sp {
			height: 50px;
		}
	}
</style>
