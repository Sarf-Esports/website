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
	<img
		src="{BOOTSTRAP_ICONS_PATH}box-arrow-up-right.svg"
		alt="Box arrow up-right"
		loading="lazy"
		{style}
	/>
{:else if kind == 'link-45deg'}
	<img src="{BOOTSTRAP_ICONS_PATH}link-45deg.svg" alt="Link 45deg" loading="lazy" {style} />
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
