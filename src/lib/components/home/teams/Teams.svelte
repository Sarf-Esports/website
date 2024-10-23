<!-- © 2022 REVATI -->
<script lang="ts">
	import MemberCard from './MemberCard.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import GearsAndSettings from '$lib/components/home/teams/GearsAndSettings.svelte';

	import { MEMBER_LISTS } from '$lib/scripts/data/MEMBERS';
	import { type GearsAndSettings as GearsAndSettingsType } from '$lib/scripts/types';
	import { isGearsAndSettingsModalOpen } from '$lib/scripts/stores';
	import { replaceState } from '$app/navigation';
	import { _ } from 'svelte-i18n';

	export let division: string | null;

	let currentDivisionIndex = 0;

	if (division !== null)
		currentDivisionIndex = MEMBER_LISTS.findIndex(({ divisionName }) => divisionName === division);

	$: currentDivisionMembers = MEMBER_LISTS[currentDivisionIndex].members;

	let gearsAndSettingsModalContent: {
		playerName: string;
		gearsAndSettings: GearsAndSettingsType;
	} | null = null;
	isGearsAndSettingsModalOpen.subscribe((isOpen) => {
		if (!isOpen) gearsAndSettingsModalContent = null;
	});
</script>

<ul class="divisions">
	{#each MEMBER_LISTS as { divisionName }, i}
		<li class="division">
			<button
				class="div-btn"
				class:active={i === currentDivisionIndex}
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
	{#each currentDivisionMembers as member}
		<MemberCard
			{member}
			on:openGearsAndSettingsModal={({ detail }) => (gearsAndSettingsModalContent = detail)}
		/>
	{/each}
</ul>

<Modal open={isGearsAndSettingsModalOpen} minWidth={432}>
	{#if gearsAndSettingsModalContent !== null}
		<GearsAndSettings {...gearsAndSettingsModalContent} />
	{/if}
</Modal>

<noscript>
	{#each MEMBER_LISTS as { divisionName, members }}
		<h2>{divisionName}</h2>
		<ul class="members noscript">
			{#each members as member}
				<MemberCard
					{member}
					on:openGearsAndSettingsModal={({ detail }) => (gearsAndSettingsModalContent = detail)}
				/>
			{/each}
		</ul>
	{/each}
</noscript>

<style lang="scss">
	@use '$lib/stylesheets/home/teams';
</style>
