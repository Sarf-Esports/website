<script lang="ts">
	export let members: {
		name: string;
		socials?: {
			twitter?: string;
			youtube?: string;
			twitch?: string;
			other?: string;
		};
	}[];
</script>

<ul>
	{#each members as { name, socials }}
		<li>
			<strong>{name}</strong>
			{#if socials}
				{@const { twitter, youtube, twitch, other } = socials}
				-
				{#if twitter}
					<a href={`https://x.com/${twitter}`} target="_blank" rel="noopener noreferrer">
						<img src="/images/logos/x_logo-white.png" alt="X" class="vertical-icn" title="@{twitter}" loading="lazy"
					/></a
				>{/if
				}{#if youtube}
					<a href={`https://youtube.com/${youtube}`} target="_blank" rel="noopener noreferrer"
						><img src="/images/logos/yt_icon_rgb.png" alt="YouTube" title="/${youtube}" loading="lazy"
					/></a
				>{/if
				}{#if twitch}
					<a href={`https://twitch.tv/${twitch}`} class="twitch-icn-a" target="_blank" rel="noopener noreferrer"
						><img src="/images/logos/twitch.svg" alt="Twitch" class="vertical-icn" title="@{twitch}" loading="lazy"
					/></a
				>{/if
				}{#if other}
					<a href={other} target="_blank" rel="noopener noreferrer">
						<!--
							Bootstrap Icons - Link 45deg
							https://icons.getbootstrap.jp/icons/link-45deg
							
							Copyright (c) 2019 The Bootstrap Authors
							under the MIT License: https://github.com/twbs/icons/blob/main/LICENSE
						-->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							fill="currentColor"
							class="bi bi-link-45deg"
							viewBox="0 0 16 16"
						>
							<path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
							<path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
						</svg>
					</a>
				{/if}
			{/if}
		</li>
	{/each}
</ul>

<style lang="scss">
	@use '/assets/stylesheets/variables/color' as *;

	li {
		margin-bottom: 0.4rem;
	}

	a {
		margin-right: 0.75rem;
	}

	.twitch-icn-a {
		margin-right: 0.45rem;
	}

	img, svg {
		width: 27px;
		height: auto;
		color: $primary-color-pale;
		vertical-align: middle;
	}

	.vertical-icn{
		width: 22px;
	}

	svg {
		width: 30px;
	}
</style>
