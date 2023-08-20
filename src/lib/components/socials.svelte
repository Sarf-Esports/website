<!-- © 2022 - 2023 REVATI -->
<script lang="ts">
	import { socials } from '$lib/variables';

	/** Inline styles. */
	export let style = '';

	/** Whether to show the link to email. */
	export let show_email = false;
</script>

<ul {style}>
	{#if show_email}
		<li>
			<a href="mailto:{socials.email}" title={socials.email}>
				<!-- 
					Bootstrap Icons - Envelope fill
					https://icons.getbootstrap.jp/icons/envelope-fill
					
					Copyright (c) 2019 The Bootstrap Authors
					under the MIT License: https://github.com/twbs/icons/blob/main/LICENSE.md 
				-->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-envelope-fill"
					viewBox="0 0 16 16"
				>
					<path
						d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
					/>
				</svg>
			</a>
		</li>
	{/if}
	<li>
		<a
			href="https://x.com/{socials.twitter}"
			target="_blank"
			rel="noopener noreferrer"
			title="X: @{socials.twitter}"
		>
			<img src="/images/logos/x_logo-white.png" alt="x" id="x-logo" />
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

			img,
			svg {
				width: 34px;
				height: auto;
				color: white;
			}
		}
	}

	#x-logo {
		width: 28px;
	}
</style>
