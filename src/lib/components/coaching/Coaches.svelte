<!-- © 2022 REVATI -->
<script lang="ts">
	import { COACHES } from '$lib/scripts/data/COACHES';
</script>

<ul>
	{#each COACHES as { name, icon, affiliation, twitter }}
		<li>
			<img src="/images/members/{icon ?? 'noimage.webp'}" alt="" loading="lazy" class="icn" />
			<span>{affiliation} 所属</span>
			<h2>{name}</h2>
			{#if twitter !== null}
				<a
					href="https://x.com/{twitter}"
					target="_blank"
					rel="noopener noreferrer"
					class="no-after-icn"
				>
					<img
						src="/images/logos/x_logo-white.png"
						alt="X"
						title="@{twitter}"
						loading="lazy"
						class="social-logo"
					/>
				</a>
			{/if}
		</li>
	{/each}
</ul>

<style lang="scss">
	@use '$lib/stylesheets/variables/color' as *;
	@use '$lib/stylesheets/variables/mixin' as *;

	ul {
		display: flex;
		width: 672px;
		margin-top: 38px;
		padding: 0;
		gap: 36px 0;
		flex-wrap: wrap;
		justify-content: center;
	}

	li {
		width: 168px;
		list-style: none;
	}

	.icn {
		width: 88px;
		border: 3px solid $primary-color-pale-darker;
		border-radius: 50%;
		pointer-events: none;
		user-select: none;
	}

	span {
		display: block;
		font-size: 14px;
	}

	h2 {
		font-size: 22px;
		font-weight: 900;
		margin: 0 auto;
	}

	.social-logo {
		width: 20px;
		margin-top: 6px;
	}

	@include sp {
		ul {
			width: min(504px, 90vw);
		}
	}
</style>
