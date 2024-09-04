<!-- © 2022 REVATI -->
<script lang="ts">
	/**
	 * Valid values:
	 * `box-arrow-up-right`,
	 * `link-45deg`,
	 * `lock-fill_inline`,
	 * `stadia-controller`
	 * */
	export let kind: string;

	/** The intrinsic width of the image in pixels. */
	export let width = 'auto';
	/** The intrinsic height of the image in pixels. */
	export let height = 'auto';

	/** Inline styles. */
	export let style = '';
	style = `width: ${width}; height: ${height}; ${style}`;

	const GOOGLE_MATERIAL_DESIGN_ICONS_PATH = '/images/google-material-design-icons/';
	const BOOTSTRAP_ICONS_PATH = '/images/bootstrap-icons/';
</script>

{#if kind == 'box-arrow-up-right'}
	<img src="{BOOTSTRAP_ICONS_PATH}box-arrow-up-right.svg" alt="Box arrow up-right" loading="lazy" {style} />
{:else if kind == 'link-45deg'}
	<img src="{BOOTSTRAP_ICONS_PATH}link-45deg.svg" alt="Link 45deg" loading="lazy" {style} />
{:else if kind == 'box-arrow-in-down-left'}
	<!--
		Bootstrap Icons - Box arrow in down left
		https://icons.getbootstrap.com/icons/box-arrow-in-down-left
		Copyright (c) 2019 The Bootstrap Authors
		under the MIT License: https://github.com/twbs/icons/blob/main/LICENSE
	-->
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="currentColor"
		class="bi bi-box-arrow-in-down-left"
		viewBox="0 0 16 16"
		{style}
	>
		<path
			fill-rule="evenodd"
			d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
		/>
		<path
			fill-rule="evenodd"
			d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z"
		/>
	</svg>
{:else if kind == 'lock-fill_inline'}
	<img
		src="{GOOGLE_MATERIAL_DESIGN_ICONS_PATH}lock_24dp_FILL1_wght400_GRAD0_opsz24.svg"
		alt="Private"
		loading="lazy"
		{style}
	/>
{:else if kind == 'stadia-controller'}
	<img
		src="{GOOGLE_MATERIAL_DESIGN_ICONS_PATH}stadia_controller_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg"
		alt="Stadia Controller"
		loading="lazy"
		{style}
	/>
{/if}
