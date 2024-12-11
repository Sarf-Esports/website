<!-- © 2022 REVATI -->
<script lang="ts">
	import HeadMetadata from '$lib/components/HeadMetadata.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import Policy from './policy.svelte';

	import { SITE_URL } from '$lib/scripts/variables';
</script>

<HeadMetadata
	title="Privacy Policy"
	desc="弊チームのプライバシーポリシーです。"
	canonicalUrl="{SITE_URL}/privacy"
/>

<div class="container">
	<section class="no-max-width" id="news">
		<SectionTitle name="privacy policy" />
		<p>REVATI プライバシーポリシー</p>
		<hr />
		<div class="content"><Policy /></div>
		<hr />
		<p>発効日: 2024年12月11日</p>
	</section>
</div>

<style lang="scss">
	@use '$lib/stylesheets/variables/color' as *;

	hr {
		margin: 24px 0;
		border: 1px solid $primary-color-pale-lighter;
	}
</style>
