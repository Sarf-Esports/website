<!-- © 2022 REVATI -->
<script lang="ts">
	import HeadMetadata from '$lib/components/HeadMetadata.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';

	import licenses from '$lib/licenses.json';
	import { SITE_URL } from '$lib/scripts/variables';
	import { _ } from 'svelte-i18n';

	type LicenseInfo = {
		licenses: string;
		licenseText: string;
		copyright: string;
		[key: string]: unknown;
	};

	const libraries = Object.entries(licenses as Record<string, LicenseInfo>).map(
		([id, license]) => ({
			id,
			license
		})
	);
</script>

<HeadMetadata
	title="Licenses"
	desc="本ウェブサイトの開発に使用しているオープンソースソフトウェア並びにその著作権表示及びライセンス条文の一覧です。"
	canonicalUrl="{SITE_URL}/licenses"
/>

<div class="container">
	<section id="licenses">
		<SectionTitle name="licenses" />
		<p>{$_('licenses.desc')}</p>
		<div class="content">
			<ul>
				{#each libraries as library}
					{@const licenseInfo = library.license}
					{@const licenseNames = licenseInfo.licenses}
					{@const copyright = licenseInfo.copyright}
					{@const licenseText = licenseInfo.licenseText}
					<li>
						<details>
							<summary>{library.id}<span>&nbsp;- {licenseNames}</span></summary>
							<pre>{#if copyright !== ''}<div
										class="copyright">{copyright}</div>{/if}{licenseText !== ''
									? licenseText
									: licenseNames}
							</pre>
						</details>
					</li>
				{/each}
			</ul>
		</div>
	</section>
</div>

<style lang="scss">
	@use '$lib/stylesheets/variables/color' as *;
	@use '$lib/stylesheets/variables/mixin' as *;

	ul {
		padding: 0;
	}

	li {
		padding: 6px;
		text-align: left;
		list-style: none;
	}

	summary {
		max-width: 532px;
		margin: 0 auto;
		font-size: 20px;
		cursor: pointer;

		&:hover {
			opacity: 0.8;
		}
	}

	span {
		font-size: 14px;
		white-space: nowrap;
		opacity: 0.8;
	}

	pre {
		font-family: monospace;
		font-size: 14px;
		padding: 8px;
		background-color: #00000060;
		scrollbar-color: $primary-color-pale-lighter transparent;
		overflow: auto;
	}

	.copyright {
		margin-top: 4px;
		margin-bottom: 14px;
		padding: 11px;
		font-size: 13px;
		background-color: #000000a0;
		white-space: pre-wrap;
	}

	@include sp {
		li {
			padding: 8px;
		}

		summary {
			max-width: 386px;
			font-size: 16px;
		}

		span {
			font-size: 13px;
		}

		pre {
			font-size: 12px;
			padding: 7px;
		}

		.copyright {
			margin-top: 2px;
			margin-bottom: 10px;
			padding: 8px;
			font-size: 12px;
		}
	}
</style>
