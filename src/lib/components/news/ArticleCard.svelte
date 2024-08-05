<!-- © 2022 REVATI -->
<script lang="ts">
	import type { ArticleMetadata, ArticleThumbnailImgFmts } from '$lib/scripts/types';
	import { idToDate } from '$lib/scripts/util';
	import { _, date as dateI18n } from 'svelte-i18n';

	export let meta: ArticleMetadata;
	export let thumbnailImgFmts: ArticleThumbnailImgFmts;
	export let forceDesktopVerOnSemiNarrow = false;

	const slug = meta.slug ?? 'unreachable';
	const thumbnailImgFmt = thumbnailImgFmts[slug];
	const date = idToDate(slug);
	let datePlus9h = new Date(date);
	datePlus9h.setHours(datePlus9h.getHours() + 9);
</script>

<a href="/news/articles/{slug}"
	><article class:force-pc-v-on-semi-narrow={forceDesktopVerOnSemiNarrow}>
		<div class="thumbnail-img">
			<img
				src="/images/news/thumbnails/{slug}.{thumbnailImgFmt}"
				alt={$_('w.articleThumbnailImg')}
				loading="lazy"
			/>
		</div>
		<div class="meta">
			<h2>{meta.title}</h2>
			<time datetime={datePlus9h.toISOString()}>{$dateI18n(date, { format: 'long' })}</time>
		</div>
	</article></a
>

<style lang="scss">
	@use '$lib/stylesheets/news/article_card';
</style>
