<!-- © 2022 REVATI -->
<script lang="ts">
	import MaterialIcon from '$lib/components/MaterialIcon.svelte';

	import { MEMBER_LISTS } from '$lib/data/members';
	import { calcAge, zeroPad } from '$lib/util';
	import { date } from 'svelte-i18n';

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
	{#each currentDivisionMembers as { name, icon, role, birthday, age, twitter, youtube, twitch, homepage }}
		<li class="member">
			<img
				src="/images/members/{icon == null ? 'noimage.webp' : icon}"
				alt=""
				loading="lazy"
				class="icon"
			/>
			<div class="info">
				<span class="role" class:no-role={role === null}>
					{role ?? '　'}
				</span>
				<h2>{name}</h2>
				<div class="details">
					Age:
					{#if age == null && birthday !== null && birthday.year !== null}
						{@const calculatedAge = calcAge(
							new Date(birthday.year, birthday.month - 1, birthday.day)
						)}
						{isNaN(calculatedAge) ? '' : calculatedAge}
					{:else}
						{age ?? ''}
					{/if}
					<br />
					Birthday:
					{#if birthday !== null}
						{#if birthday.year !== null}
							{$date(new Date(birthday.year, birthday.month - 1, birthday.day), {
								year: 'numeric',
								month: '2-digit',
								day: '2-digit'
							})}
						{:else}
							{zeroPad(birthday.month, 2)}/{zeroPad(birthday.day, 2)}
						{/if}
					{/if}
				</div>
			</div>
			<ul class="socials">
				{#if twitter !== null}
					<li>
						<a
							href="https://x.com/{twitter}"
							class="member-twitter"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src="/images/logos/x_logo-white.png" alt="X" title="@{twitter}" loading="lazy" />
						</a>
					</li>
				{/if}
				{#if youtube !== null}
					{@const path = youtube[0] == '@' ? youtube : `channel/${youtube}`}
					<li>
						<a
							href="https://youtube.com/{path}"
							class="member-youtube"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/images/logos/yt_icon_rgb.png"
								alt="YouTube"
								title="/{path}"
								loading="lazy"
								class="wide-icn"
							/>
						</a>
					</li>
				{/if}
				{#if twitch !== null}
					<li>
						<a
							href="https://twitch.tv/{twitch}"
							class="member-twitch"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src="/images/logos/twitch.svg" alt="Twitch" title="@{twitch}" loading="lazy" />
						</a>
					</li>
				{/if}
				{#if homepage !== null}
					<li>
						<a
							href={homepage}
							class="member-homepage"
							target="_blank"
							rel="noopener noreferrer"
							title={homepage}
						>
							<MaterialIcon
								kind="link-45deg"
								width="34px"
								style="color: #eeeeee; margin-top: 11px;"
							/>
						</a>
					</li>
				{/if}
			</ul>
		</li>
	{/each}
</ul>

<style lang="scss">
	@use '/assets/stylesheets/member_lists';
</style>
