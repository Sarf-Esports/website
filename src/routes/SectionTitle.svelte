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
		filter: hue-rotate(156deg) brightness(1.15) drop-shadow(0 0 36px #caffff59)
			drop-shadow(0 0 86px #7fffff8a);

		@include sp {
			height: 50px;
		}
	}
</style>
