<!-- © 2022 REVATI -->
<script lang="ts">
	import MaterialIcon from '$lib/components/MaterialIcon.svelte';

	import { MEMBER_LISTS } from '$lib/data/members';

	let currentDivisionIndex = 0;
	$: currentDivisionMembers = MEMBER_LISTS[currentDivisionIndex].members;
</script>

<ul class="divisions">
	{#each MEMBER_LISTS as division, i}
		<li class="division">
			<button
				class:active={i == currentDivisionIndex}
				on:click={() => {
					currentDivisionIndex = i;
				}}>{division.name}</button
			>
		</li>
	{/each}
</ul>

{#if currentDivisionMembers.length <= 0}
	<p>Coming soon...</p>
{/if}

<ul class="members">
	{#each MEMBER_LISTS[currentDivisionIndex].members as { name, icon, twitter, youtube, twitch, homepage }}
		<li class="member">
			<img
				src="/images/members/{icon == null ? 'noimage.webp' : icon}"
				alt=""
				loading="lazy"
				class="icon"
			/>
			<div class="info">
				<span class="role">役職</span>
				<h2>{name}</h2>
				<table><tbody>
					<tr>
						<td>Age:</td>
						<td>?</td>
					</tr>
					<tr>
						<td>Birthday:</td>
						<td>????/??/??</td>
					</tr>
				</tbody></table>
			</div>
			<ul class="socials"></ul>
		</li>
	{/each}
</ul>

<!-- <ul id="team-list">
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
								{@const ytPath = youtube[0] == '@' ? youtube : `channel/${youtube}`}
								<a
									href="https://youtube.com/{ytPath}"
									class="member-youtube"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/images/logos/yt_icon_rgb.png"
										alt="YouTube"
										title="/{ytPath}"
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
</ul> -->

<style lang="scss">
	@use '/assets/stylesheets/member_lists';
</style>
