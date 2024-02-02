<!-- © 2022 REVATI -->
<script>
	import { member_lists } from '$lib/data/members';
	import { word_to_camel_case } from '$lib/util';
</script>

<ul id="team-list">
	{#each member_lists as { name, members }}
		<li>
			<h2 class="kind">{name}</h2>
			<ul>
				{#each members as { name, icon, twitter, youtube, twitch, homepage }}
					<li class="reveal-anim-con">
						<div class="reveal-anim-item">
							<img
								src="/images/members/{icon == null ? 'noimage.webp' : icon}"
								alt="member icon"
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
										alt="x logo"
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
							{#if homepage}
								<a
									href={homepage}
									class="member-homepage"
									class:new-lined={twitter && youtube && twitch}
									target="_blank"
									rel="noopener noreferrer"
									title={homepage}
								>
									<!--
										Bootstrap Icons - Link 45deg
										https://icons.getbootstrap.jp/icons/link-45deg
										
										Copyright (c) 2019 The Bootstrap Authors
										under the MIT License: https://github.com/twbs/icons/blob/main/LICENSE.md
									-->
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										fill="currentColor"
										class="bi bi-link-45deg"
										viewBox="0 0 16 16"
									>
										<path
											d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
										/>
										<path
											d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
										/>
									</svg>
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
