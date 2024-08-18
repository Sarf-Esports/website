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

	const X_HANDLE = 'NGRev_coaching';
</script>

<img src="/images/coaching-poster.webp" alt={$_('w.poster')} />

<p class="desc">
	{$_('coaching.desc.0')}
</p>

<p class="desc">
	{$_('coaching.desc.1')}
</p>

<div class="buttons">
	<div>
		<button on:click={() => isFeesModalOpened.update(() => true)}>{modalTitles.fees}</button>
		{#if $isFeesModalOpened}
			<Modal title={modalTitles.fees} minWidth={485} doesNotHaveBloom><Fees /></Modal>
		{/if}
	</div>
	<div>
		<a
			href="https://x.com/{X_HANDLE}"
			target="_blank"
			rel="noopener noreferrer"
			class="no-after-icn"
		>
			<img
				src="/images/logos/x_logo-white.png"
				alt="X"
				title="@{X_HANDLE}"
				loading="lazy"
				class="social-logo"
			/>
		</a>
	</div>
	<div>
		<button on:click={() => isCoachesModalOpened.update(() => true)}>{modalTitles.coaches}</button>
		{#if $isCoachesModalOpened}
			<Modal title={modalTitles.coaches} doesNotHaveBloom><Coaches /></Modal>
		{/if}
	</div>
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

	.buttons {
		display: flex;
		justify-content: center;

		div {
			min-width: 172px;
		}
	}

	button {
		margin: 28px 0;

		@include btn(24px);
	}

	.social-logo {
		width: 38px;
		margin-top: 37px;
	}

	a {
		font-size: 22px;
	}

	@include sp {
		div {
			gap: 16px;
		}

		.buttons {
			gap: 40px;

			div {
				min-width: initial;
			}
		}

		button {
			@include btn(18px);
		}

		.social-logo {
			width: 24px;
		}

		a {
			font-size: 19px;
		}
	}
</style>
