<script lang="ts">
	import MaterialIcon from './MaterialIcon.svelte';

	export let text: string;
</script>

<span>
	{text}
	<MaterialIcon kind="box-arrow-up-right" width="20px" />
</span>

<style lang="scss">
	@use '/assets/stylesheets/variables/color' as *;
	@use '/assets/stylesheets/variables/mixin' as *;

	span {
		$btn-side-height: 12px;
		display: block;
		position: relative;
		max-width: 86%;
		margin: 16px auto;
		margin-bottom: $btn-side-height;
		padding: 16px;
		text-decoration: none;
		color: $primary-color-pale;
		font-size: 24px;
		font-weight: bold;
		border: 4px solid $primary-color-pale;
		border-radius: 6px;
		transition: 0.3s;

		&:hover,
		&:active {
			background-color: $primary-color-pale;
			color: $primary-color-darker-2;
			box-shadow: 0 $btn-side-height 0 $primary-color-pale-darker;
		}

		&:active {
			box-shadow: 0 3px 0 $primary-color-pale-darker;
			transform: translateY(9px);
		}

		@include sp {
			font-size: 18px;
		}
	}
</style>
