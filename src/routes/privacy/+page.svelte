<!-- © 2022 REVATI -->
<script lang="ts">
	import HeadMetadata from '$lib/components/HeadMetadata.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import Policy from './policy.svelte';

	import { SITE_URL } from '$lib/scripts/variables';
	import { _ } from 'svelte-i18n';
	import { date as dateI18n } from 'svelte-i18n';

	const effectiveData = new Date('2024-12-11T09:00:00Z');
</script>

<HeadMetadata
	title="Privacy Policy"
	desc="弊チームのプライバシーポリシーです。"
	canonicalUrl="{SITE_URL}/privacy"
/>

<div class="container">
	<section class="no-max-width" id="news">
		<SectionTitle name="privacy policy" />
		<p>REVATI {$_('privacy.privacyPolicy')}</p>
		<hr />
		<div class="content"><Policy /></div>
		<hr />
		<p>
			{$_('privacy.effectiveDate')}:
			<time datetime={effectiveData.toISOString()}
				>{$dateI18n(effectiveData, { format: 'long' })}</time
			>
		</p>
	</section>
</div>

<style lang="scss">
	@use '$lib/stylesheets/variables/color' as *;

	hr {
		margin: 24px 0;
		border: 1px solid $primary-color-pale-lighter;
	}
</style>
