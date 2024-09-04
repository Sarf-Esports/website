<!-- © 2022 REVATI -->
<script lang="ts">
	/**
	 * Valid values:
	 * `box-arrow-up-right`,
	 * `link-45deg`,
	 * `envelope-fill`,
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
	<!--
		Bootstrap Icons - Link 45deg
		https://icons.getbootstrap.jp/icons/link-45deg
		Copyright (c) 2019 The Bootstrap Authors
		under the MIT License: https://github.com/twbs/icons/blob/main/LICENSE
	-->
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="32"
		height="32"
		fill="currentColor"
		class="bi bi-link-45deg"
		viewBox="0 0 16 16"
		{style}
	>
		<path
			d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
		/>
		<path
			d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
		/>
	</svg>
{:else if kind == 'envelope-fill'}
	<!--
		Bootstrap Icons - Envelope fill
		https://icons.getbootstrap.jp/icons/envelope-fill
		Copyright (c) 2019 The Bootstrap Authors
		under the MIT License: https://github.com/twbs/icons/blob/main/LICENSE
	-->
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="currentColor"
		class="bi bi-envelope-fill"
		viewBox="0 0 16 16"
		{style}
	>
		<path
			d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
		/>
	</svg>
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
