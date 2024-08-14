<!-- © 2022 REVATI -->
<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import Fees from './Fees.svelte';

	import { _ } from 'svelte-i18n';
	import { isFeesModalOpened, isCoachesModalOpened } from '$lib/scripts/stores';
</script>

<img src="/images/coaching-poster.webp" alt={$_('coaching.poster')} />

<p class="desc">説明ほへとちりぬるをわかよたれそつねならむ</p>

<div>
	<button on:click={() => isFeesModalOpened.update(() => true)}>料金表</button
	>{#if $isFeesModalOpened}<Modal title="料金表" minWidth={485}><Fees
	/></Modal>{/if}<button on:click={() => isCoachesModalOpened.update(() => true)}>コーチ一覧</button
	>{#if $isCoachesModalOpened}<Modal title="コーチ一覧">
			<table>
				<tr>
					<td>ここにコーチ一覧を置く予定</td>
				</tr>
			</table>
		</Modal>{/if}
</div>
<div>
	<a href="/" target="_blank" rel="noopener noreferrer">応募フォームはこちら</a>
</div>

<style lang="scss">
	@use '$lib/stylesheets/variables/mixin' as *;

	img {
		width: 100%;
		margin-top: 16px;
		border-radius: 2px;
	}

	.desc {
		margin-top: 20px !important;
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
