<!-- © 2022 REVATI -->
<script lang="ts">
	import { SOCIALS } from '$lib/scripts/variables';

	/** Inline styles. */
	export let style = '';

	/** Whether to show the link to email. */
	export let showEmail = false;
</script>

<ul {style}>
	{#if showEmail}
		<li>
			<a href="mailto:{SOCIALS.email}" title={SOCIALS.email}>
				<!--
					Bootstrap Icons - Envelope fill
					https://icons.getbootstrap.jp/icons/envelope-fill
					Copyright (c) 2019 The Bootstrap Authors
					under the MIT License: https://github.com/twbs/icons/blob/main/LICENSE
				-->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-envelope-fill"
					viewBox="0 0 16 16"
					style="width: 34px; height: auto; color: white;"
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
			href="https://x.com/{SOCIALS.twitter}"
			target="_blank"
			rel="noopener noreferrer"
			title="X: @{SOCIALS.twitter}"
			class="no-after-icn"
		>
			<img src="/images/logos/x_logo-white.webp" alt="X" id="x-logo" />
		</a>
	</li>
	<li>
		<a
			href="https://www.youtube.com/{SOCIALS.youtube}"
			target="_blank"
			rel="noopener noreferrer"
			title="YouTube: /{SOCIALS.youtube}"
			class="no-after-icn"
		>
			<img src="/images/logos/yt_icon_mono_dark.png" alt="YouTube" />
		</a>
	</li>
	<li>
		<a
			href="https://github.com/{SOCIALS.github}"
			target="_blank"
			rel="noopener noreferrer"
			title="GitHub: @{SOCIALS.github}"
			class="no-after-icn"
		>
			<img src="/images/logos/github-mark-white.svg" alt="GitHub" />
		</a>
	</li>
</ul>

<style lang="scss">
	ul {
		margin-top: 64px;
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
				color: white;
			}
		}
	}

	#x-logo {
		width: 28px;
	}
</style>
