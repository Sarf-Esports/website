<!-- © 2022 - 2023 REVATI -->
<script>
	import { member_lists } from '$lib/data/members.js';
	import { word_to_camel_case } from '$lib/util.js';
</script>

<ul id="team-list">
	{#each member_lists as { kind, list }}
		<li>
			<h2>{word_to_camel_case(kind)}</h2>
			<ul id="{kind}-member-list">
				{#each list as { name, icon, twitter, youtube, twitch }}
					<li class="reveal-anim-con">
						<div class="reveal-anim-item">
							<img
								src="/images/members/{icon == null ? 'noimage.png' : icon}"
								alt="member icon"
								loading="lazy"
							/>
							<h3>{name}</h3>
							{#if twitter}
								<a
									href="https://twitter.com/{twitter}"
									class="member-twitter"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/images/logos/twitter-logo-01282021/Twitter logo/SVG/Logo blue.svg"
										alt="twitter logo"
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
										src="/images/logos/youtube.png"
										alt="youtube logo"
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
										alt="twitch logo"
										title="@{twitch}"
										loading="lazy"
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
	@import '/assets/stylesheets/member_lists.scss';
</style>
