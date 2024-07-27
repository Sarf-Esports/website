<!-- © 2022 REVATI -->
<script lang="ts">
	import type { ArticleMetadata, ArticleThumbnailImgFmts } from '$lib/types';
	import { idToDate } from '$lib/util';
	import { _, date as dateI18n } from 'svelte-i18n';

	export let meta: ArticleMetadata;
	export let thumbnailImgFmts: ArticleThumbnailImgFmts;
	export let forceDesktopVerOnSemiNarrow = false;

	const slug = meta.slug ?? 'unreachable';
	const thumbnailImgFmt = thumbnailImgFmts[slug];
	const date = idToDate(slug);
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
			<time datetime={date.toISOString()}>{$dateI18n(date, { format: 'long' })}</time>
		</div>
	</article></a
>

<style lang="scss">
	@use '$lib/stylesheets/news/article_card';
</style>
