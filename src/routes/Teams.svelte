<!-- © 2022 REVATI -->
<script lang="ts">
	import MaterialIcon from '$lib/components/MaterialIcon.svelte';
	import Modal from '$lib/components/Modal.svelte';

	import { MEMBER_LISTS } from '$lib/scripts/data/MEMBERS';
	import { replaceState } from '$app/navigation';
	import { calcAge, zeroPad } from '$lib/scripts/util';
	import { date, _ } from 'svelte-i18n';
	import { gearAndSensModalState } from '$lib/scripts/stores';

	export let division: string | null;

	let currentDivisionIndex = 0;

	if (division !== null)
		currentDivisionIndex = MEMBER_LISTS.findIndex(({ divisionName }) => divisionName == division);

	$: currentDivisionMembers = MEMBER_LISTS[currentDivisionIndex].members;

	const LOCK_ICON = {
		kind: 'lock-fill_inline',
		height: '15px',
		style: 'position: relative; top: 2px; pointer-events: none;'
	};
</script>

<ul class="divisions">
	{#each MEMBER_LISTS as { divisionName }, i}
		<li class="division">
			<button
				class="div-btn"
				class:active={i == currentDivisionIndex}
				on:click={() => {
					currentDivisionIndex = i;
					replaceState(`?div=${divisionName.replace(' ', '+')}#teams`, {});
				}}>{divisionName}</button
			>
		</li>
	{/each}
</ul>

{#if currentDivisionMembers.length <= 0}
	<p>Coming soon...</p>
{/if}

<ul class="members">
	{#each currentDivisionMembers as { memberName, icon, role, country, birthday, age, twitter, youtube, twitch, homepage, gearAndSens }}
		<li class="member">
			<img src="/images/members/{icon ?? 'noimage.webp'}" alt="" loading="lazy" class="icon" />
			<div class="info">
				<div class="role-and-country">
					<span class="role" class:inactive={role == null}>{role ?? '　'}</span>
					{#if country !== null}
						<img src="/images/flags/{country}.svg" alt={$_('w.nationalFlag')} class="flag" />
					{/if}
				</div>
				<h2>{memberName}</h2>
				<div class="details">
					Age:
					{#if age == null && birthday !== null && birthday.year !== null}
						{calcAge(new Date(birthday.year, birthday.month - 1, birthday.day))}
					{:else if age !== null}
						{age + (birthday !== null && birthday.year === null ? ` (${$_('w.selfStyled')})` : '')}
					{:else}
						<MaterialIcon {...LOCK_ICON} />
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
					{:else}
						<MaterialIcon {...LOCK_ICON} />
					{/if}
				</div>
			</div>
			<ul class="socials">
				{#if twitter !== null}
					<li>
						<a
							href="https://x.com/{twitter}"
							class="no-after-icn member-twitter"
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
							class="no-after-icn member-youtube"
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
							class="no-after-icn member-twitch"
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
							class="no-after-icn member-homepage"
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
				{#if gearAndSens !== undefined}
					<li class="gear-and-sens">
						<button
							on:click={() => {
								gearAndSensModalState.update(() => {
									return {
										isOpened: true,
										content: {
											id: gearAndSens.id
										}
									};
								});
							}}
							class="gear-and-sens-btn"
							title={$_('teams.gearsAndGameSettingsOfThisPlayer')}
						>
							<MaterialIcon kind="stadia-controller" width="28px" />
						</button>
					</li>
				{/if}
			</ul>
		</li>
	{/each}
</ul>

{#if $gearAndSensModalState.isOpened && $gearAndSensModalState.content !== null}
	<Modal>
		{$gearAndSensModalState.content.id}
	</Modal>
{/if}

<style lang="scss">
	@use '$lib/stylesheets/teams';
</style>
