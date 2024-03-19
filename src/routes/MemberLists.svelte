<!-- © 2022 REVATI -->
<script>
	import MaterialIcon from '$lib/components/MaterialIcon.svelte';

	import { MEMBER_LISTS } from '$lib/data/members';
</script>

<ul class="div-list">
	{#each MEMBER_LISTS as division}
		<li>
			<a href="#{division.name}">{division.name}</a>
		</li>
	{/each}
</ul>

<ul id="team-list">
	{#each MEMBER_LISTS as { name, members }}
		<li>
			<h2 id={name}>{name}</h2>
			{#if members.length == 0}
				<p>Coming soon...</p>
			{/if}
			<ul>
				{#each members as { name, icon, twitter, youtube, twitch, homepage }}
					<li class="reveal-anim-con">
						<div class="reveal-anim-item">
							<img
								src="/images/members/{icon == null ? 'noimage.webp' : icon}"
								alt=""
								loading="lazy"
							/>
							<h3>{name}</h3>
							{#if twitter}
								<a
									href="https://x.com/{twitter}"
									class="member-twitter"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/images/logos/x_logo-black.png"
										alt="X"
										title="@{twitter}"
										loading="lazy"
									/>
								</a>
							{/if}
							{#if youtube}
								{@const yt_path = youtube[0] == '@' ? youtube : `channel/${youtube}`}
								<a
									href="https://youtube.com/{yt_path}"
									class="member-youtube"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/images/logos/yt_icon_rgb.png"
										alt="YouTube"
										title="/{yt_path}"
										loading="lazy"
									/>
								</a>
							{/if}
							{#if twitch}
								<a
									href="https://twitch.tv/{twitch}"
									class="member-twitch"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/images/logos/twitch.svg"
										alt="Twitch"
										title="@{twitch}"
										loading="lazy"
									/>
								</a>
							{/if}
							{#if homepage}
								<a
									href={homepage}
									class="member-homepage"
									target="_blank"
									rel="noopener noreferrer"
									title={homepage}
								>
									<MaterialIcon
										kind="link-45deg"
										width="30px"
										style="color: #021222; transform: translateY(6px);{twitter && youtube && twitch
											? ' transform: translateY(0);'
											: ''}"
									/>
								</a>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		</li>
	{/each}
</ul>

<style lang="scss">
	@use '/assets/stylesheets/member_lists';
</style>
