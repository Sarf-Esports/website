<!-- © 2022 REVATI -->
<script lang="ts">
	import HeadMetadata from '$lib/components/HeadMetadata.svelte';
	import MainVisual from './MainVisual.svelte';
	import SponsorBanner from '$lib/components/sponsor_banner/SponsorBanner.svelte';
	import SectionTitle from './SectionTitle.svelte';
	import RevealFadeIn from '$lib/components/RevealFadeIn.svelte';
	import NewsList from '$lib/components/news/NewsList.svelte';
	import Teams from './Teams.svelte';
	import Sponsors from './Sponsors.svelte';

	import type { PageData } from './$types';
	import { SITE_URL } from '$lib/scripts/variables';
	import { _ } from 'svelte-i18n';

	export let data: PageData;
</script>

<HeadMetadata
	desc="勝負の世界である以上、成績が低迷してしまうこともあると思います。そんなときでも私たちは物事の目的達成のために継続的に粘り強く努力することを厭わず 最後までやり遂げる無限のパワー・可能性を秘めています。"
	canonicalUrl={SITE_URL}
/>

<div class="container"><MainVisual /><SponsorBanner /></div>

<div class="container">
	<section id="about">
		<SectionTitle name="about" />
		<div class="content">
			<RevealFadeIn>
				<div class="slogan">
					<h1>UNDEFEATED SPIRIT</h1>
					<h2>{$_('top.about.undefeatedSpirit')}</h2>
				</div>
			</RevealFadeIn>
			<br />
			<RevealFadeIn>
				<p>
					{$_('top.about.0')}
					<br /><br />
					{$_('top.about.1')}
				</p>
			</RevealFadeIn>
		</div>
	</section>
</div>

<div class="container">
	<section id="news">
		<SectionTitle name="news" />
		<div class="content">
			<NewsList articles={data.articles} thumbnailImgFmts={data.thumbnailImgFmts} />
			<p><a href="/news">ALL</a></p>
		</div>
	</section>
</div>

<div class="container">
	<section id="teams">
		<SectionTitle name="teams" />
		<div class="content"><Teams division={data.division} /></div>
	</section>
</div>

<div class="container">
	<section id="sponsors">
		<SectionTitle name="sponsors" />
		<div class="content"><Sponsors /></div>
	</section>
</div>

<style lang="scss">
	@use '$lib/stylesheets/variables/mixin' as *;

	#about {
		.slogan {
			font-weight: 900;
			padding: 0 6px;
			margin: 0 auto;

			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: #d3d3d3;
				clip-path: polygon(
					0 16%,
					0 100%,
					100% 100%,
					100% 100%,
					92% 100%,
					100% 86%,
					100% 100%,
					0 100%,
					0 0,
					8% 0
				);
				border-radius: 4px;
			}

			h1 {
				letter-spacing: 0.075em;
				font-size: 48px;
			}

			h2 {
				font-size: 36px;
				margin-top: -32px;
				padding-bottom: 16px;
			}

			@include sp {
				max-width: 448px;

				h1,
				h2 {
					display: inline-block;
				}

				h1 {
					font-size: 30px;
					line-height: 1.2;
					padding: 0 5px;
				}

				h2 {
					font-size: 30px;
					margin-top: -18px;
					padding-bottom: 8px;
				}
			}
		}
	}
</style>
