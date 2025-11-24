<script context="module" lang="ts">
	const GOOGLE_MATERIAL_DESIGN_ICONS_PATH = '/images/google-material-design-icons/';
	const BOOTSTRAP_ICONS_PATH = '/images/bootstrap-icons/';
	const ICONS = {
		'box-arrow-up-right': {
			src: BOOTSTRAP_ICONS_PATH + 'box-arrow-up-right.svg',
			alt: 'Box arrow up-right'
		},
		'link-45deg': {
			src: BOOTSTRAP_ICONS_PATH + 'link-45deg.svg',
			alt: 'Link 45deg'
		},
		'lock-fill_inline': {
			src: GOOGLE_MATERIAL_DESIGN_ICONS_PATH + 'lock_24dp_FILL1_wght400_GRAD0_opsz24.svg',
			alt: 'Private'
		},
		'stadia-controller': {
			src:
				GOOGLE_MATERIAL_DESIGN_ICONS_PATH +
				'stadia_controller_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg',
			alt: 'Stadia Controller'
		}
	};
	export type IconKind = keyof typeof ICONS;
</script>

<script lang="ts">
	export let kind: IconKind;

	/** The intrinsic width of the image in pixels. */
	export let width = 'auto';
	/** The intrinsic height of the image in pixels. */
	export let height = 'auto';

	/** Inline styles. */
	export let style = '';

	const icon = ICONS[kind];
</script>

<img
	src={icon.src}
	alt={icon.alt}
	loading="lazy"
	style="width: {width}; height: {height}; {style}"
/>
