<!-- © 2022 - 2023 REVATI -->
<script>
	const copyright = '© 2022 - 2023 REVATI';

	const socials = {
		twitter: 'revati_jp',
		youtube: '@revati_jp',
		github: 'Sarf-Esports'
	};
</script>

<footer>
	<p class="copyright">{copyright}</p>
	<ul>
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
</footer>

<style lang="scss">
	footer {
		min-height: 24vh;
		background-color: #0a0a0a;

		.copyright {
			font-size: 16px;
			margin-top: 2em;
			text-align: center;
		}

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
	}
</style>
