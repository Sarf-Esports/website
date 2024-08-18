<!-- © 2022 REVATI -->
<script lang="ts">
	import MaterialIcon from './MaterialIcon.svelte';

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
				<MaterialIcon kind="envelope-fill" width="34px" style="color: white;" />
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
			<img src="/images/logos/x_logo-white.png" alt="X" id="x-logo" />
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
