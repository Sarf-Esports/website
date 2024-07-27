<!-- © 2022 REVATI -->
<script lang="ts">
	import MaterialIcon from '$lib/components/MaterialIcon.svelte';

	export let members: {
		name: string;
		socials?: {
			twitter?: string;
			youtube?: string;
			twitch?: string;
			other?: string;
		};
		additional?: string;
	}[];
</script>

<ul>
	{#each members as { name, socials, additional }}
		<li>
			<strong>{name}</strong>
			{#if additional !== undefined}
				{additional}
			{/if}
			{#if socials}
				{@const { twitter, youtube, twitch, other } = socials}
				-
				{#if twitter}
					<a href="https://x.com/{twitter}" target="_blank" rel="noopener noreferrer">
						<img
							src="/images/logos/x_logo-white.png"
							alt="X"
							class="vertical-icn"
							title="@{twitter}"
							loading="lazy"
						/></a
					>{/if}{#if youtube}{@const path = youtube[0] == '@' ? youtube : `channel/${youtube}`}
					<a href="https://youtube.com/{path}" target="_blank" rel="noopener noreferrer"
						><img
							src="/images/logos/yt_icon_rgb.png"
							alt="YouTube"
							title="/{path}"
							loading="lazy"
						/></a
					>{/if}{#if twitch}
					<a
						href="https://twitch.tv/{twitch}"
						class="twitch-icn-a"
						target="_blank"
						rel="noopener noreferrer"
						><img
							src="/images/logos/twitch.svg"
							alt="Twitch"
							class="vertical-icn"
							title="@{twitch}"
							loading="lazy"
						/></a
					>{/if}{#if other}
					<a href={other} target="_blank" rel="noopener noreferrer">
						<MaterialIcon
							kind="link-45deg"
							width="30px"
							style="color: #98c0e7; vertical-align: middle;"
						/>
					</a>
				{/if}
			{/if}
		</li>
	{/each}
</ul>

<style lang="scss">
	@use '$lib/stylesheets/variables/color' as *;

	li {
		margin-bottom: 0.4rem;
	}

	a {
		margin-right: 0.75rem;
	}

	.twitch-icn-a {
		margin-right: 0.45rem;
	}

	img {
		width: 27px;
		height: auto;
		color: $primary-color-pale;
		vertical-align: middle;
	}

	.vertical-icn {
		width: 22px;
	}
</style>
