<!-- © 2022 REVATI -->
<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<img src="/images/Revati-Studio_header_orange.webp" alt={$_('w.poster')} />

<p>
	{$_('creative.desc.0')}<span>REVATI Studio</span>{$_('creative.desc.1')}<br />{$_(
		'creative.desc.2'
	)}
</p>

<a
	href="https://studio.revati.jp"
	target="_blank"
	rel="noopener noreferrer"
	title="REVATI Studio | WORKS">{$_('creative.websiteLink')}</a
>

<style lang="scss">
	@use '$lib/stylesheets/variables/mixin' as *;

	img {
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
		border: 2px solid #e16428;
		border-radius: 2px;
		box-sizing: border-box;
	}

	p {
		margin: 14px auto !important;
		font-size: 17px !important;
		letter-spacing: -0.5px !important;
	}

	span {
		font-weight: 900;
		letter-spacing: 0.5px;
	}

	a {
		font-size: 22px;
	}
</style>
