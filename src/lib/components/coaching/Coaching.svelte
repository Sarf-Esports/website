<!-- © 2022 REVATI -->
<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import Fees from './Fees.svelte';
	import Coaches from './Coaches.svelte';

	import { _ } from 'svelte-i18n';
	import { isFeesModalOpened, isCoachesModalOpened } from '$lib/scripts/stores';

	$: modalTitles = {
		fees: $_('coaching.fees'),
		coaches: $_('coaching.coaches')
	};
</script>

<img src="/images/coaching-poster.webp" alt={$_('w.poster')} />

<p class="desc">
	{$_('coaching.desc.0')}
</p>

<p class="desc">
	{$_('coaching.desc.1')}
</p>

<div>
	<button on:click={() => isFeesModalOpened.update(() => true)}>{modalTitles.fees}</button
	>{#if $isFeesModalOpened}<Modal title={modalTitles.fees} minWidth={485} doesNotHaveBloom><Fees /></Modal
		>{/if}<button on:click={() => isCoachesModalOpened.update(() => true)}>{modalTitles.coaches}</button
	>{#if $isCoachesModalOpened}<Modal title={modalTitles.coaches} doesNotHaveBloom><Coaches /></Modal>{/if}
</div>
<div>
	<a
		href="https://docs.google.com/forms/d/1JYIZisa4b3QKSjmn9k6r94_D5xjhszNxu2xUPkywH38/prefill"
		target="_blank"
		rel="noopener noreferrer">{$_('coaching.form')}</a
	>
</div>

<style lang="scss">
	@use '$lib/stylesheets/variables/mixin' as *;

	img {
		width: 100%;
		margin-top: 4px;
		border-radius: 2px;
	}

	.desc {
		margin-top: 10px !important;
		font-size: 17px !important;
		letter-spacing: -0.5px !important;
	}

	div {
		display: flex;
		justify-content: center;
		gap: 120px;
	}

	button {
		margin: 28px 0;

		@include btn(24px);
	}

	a {
		font-size: 22px;
	}

	@include sp {
		div {
			gap: 16px;
		}

		button {
			@include btn(22px);
		}

		a {
			font-size: 19px;
		}
	}
</style>
