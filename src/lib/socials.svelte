<!-- © 2022 - 2023 REVATI -->
<script>
	import { socials } from '$lib/variables.js';

	/**
	 * Inline styles.
	 *
	 * @type {string}
	 */
	export let style = '';
</script>

<ul {style}>
	<li>
		<a
			href="https://twitter.com/{socials.twitter}"
			target="_blank"
			rel="noopener noreferrer"
			title="Twitter: @{socials.twitter}"
		>
			<img
				src="/images/logos/twitter-logo-01282021/Twitter logo/SVG/Logo white.svg"
				alt="twitter"
			/>
		</a>
	</li>
	<li>
		<a
			href="https://www.youtube.com/{socials.youtube}"
			target="_blank"
			rel="noopener noreferrer"
			title="YouTube: /{socials.youtube}"
		>
			<img src="/images/logos/youtube_icon/yt_icon_mono_dark.png" alt="youtube" />
		</a>
	</li>
	<li>
		<a
			href="https://github.com/{socials.github}"
			target="_blank"
			rel="noopener noreferrer"
			title="GitHub: @{socials.github}"
		>
			<img src="/images/logos/github-mark/github-mark-white.svg" alt="github" />
		</a>
	</li>
</ul>

<style lang="scss">
	ul {
		margin: 64px auto;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;

		li {
			margin: 0 12px;

			img {
				width: 34px;
				height: auto;
			}
		}
	}
</style>
