<!-- © 2022 - 2023 REVATI -->
<script>
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition';

	import { member_lists } from '$lib/data/members.js';
	import { word_to_camel_case, add_class_at_scroll } from '$lib/util.js';

	if (browser) {
		window.addEventListener('scroll', function () {
			add_class_at_scroll(document.getElementsByClassName('kind'), 'fade-in-right');
		});
	}

	let is_showing_owner = false;
	const owner_anim_duration = 8000;
</script>

<ul id="team-list">
	{#each member_lists as { kind, list }}
		{@const kind_camel = word_to_camel_case(kind)}
		<li>
			<h2 class="kind">{kind_camel == 'Apex' ? 'Apex Legends' : kind_camel}</h2>
			<ul id="{kind}-member-list">
				{#each list as { name, icon, twitter, youtube, twitch }}
					{@const is_owner = kind == 'owner'}
					{@const is_showing = !is_owner || is_showing_owner}
					{#if is_owner}
						<button class="owner-button" on:click={() => (is_showing_owner = !is_showing_owner)}>
							<span>{name}のプロフィールを{is_showing_owner ? '非表示に' : '表示'}する</span>
						</button>
					{/if}
					{#if is_showing}
						<li
							class={is_owner ? '' : 'reveal-anim-con'}
							transition:fly={{ x: 256, y: -512, duration: owner_anim_duration }}
						>
							<div class={is_owner ? '' : 'reveal-anim-item'}>
								<img
									src="/images/members/{icon == null ? 'noimage.png' : icon}"
									alt="member icon"
									loading="lazy"
								/>
								<h3>{name}</h3>
								{#if is_showing}
									<div
										in:fly={{ x: 0, y: 0, duration: 0, delay: owner_anim_duration }}
										out:fly={{ x: 0, y: 0, duration: 0 }}
									>
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
								{/if}
							</div>
						</li>
					{/if}
				{/each}
			</ul>
		</li>
	{/each}
</ul>

<style lang="scss">
	@import '/assets/stylesheets/member_lists.scss';
</style>
