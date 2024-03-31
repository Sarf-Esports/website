<!-- © 2022 REVATI -->
<script lang="ts">
	import type { ArticleMetadata, ArticleThumbnailImgFmts } from '$lib/types';
	import { idToDate } from '$lib/util';
	import { _, date as dateI18n } from 'svelte-i18n';

	export let meta: ArticleMetadata;
	export let thumbnailImgFmts: ArticleThumbnailImgFmts;

	const slug = meta.slug ?? 'unreachable';
	const thumbnailImgFmt = thumbnailImgFmts[slug];
	const date = idToDate(slug);
</script>

<a href="/news/articles/{slug}"
	><article>
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
	a {
		color: inherit;
		text-decoration: none;
	}

	article {
		width: 334px;
		height: 283px;
		margin: 16px 8px;
		transition: 0.2s;

		&:hover {
			opacity: 0.7;
		}
	}

	.thumbnail-img {
		height: 187px;
	}

	img {
		max-width: 100%;
		max-height: 100%;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}

	.meta {
		text-align: left;
	}

	h2 {
		font-size: 20px;
		max-height: 72px;
		margin: 10px 0;
		line-height: 1.3;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	time {
		font-size: 14px;
		opacity: 0.8;
	}
</style>
