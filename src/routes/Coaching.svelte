<!-- © 2022 REVATI -->
<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';

	import { _ } from 'svelte-i18n';
	import { isFeesModalOpened, isCoachesModalOpened } from '$lib/scripts/stores';
</script>

<img src="/images/coaching-poster.webp" alt={$_('coaching.poster')} />

<p class="desc">説明ほへとちりぬるをわかよたれそつねならむ</p>

<div>
	<button on:click={
		() => isFeesModalOpened.update(() => true)
	}>料金表</button>{#if $isFeesModalOpened}<Modal title="料金表" minWidth={485}>
		<table>
			<tr>
				<th colspan="2">個人で受ける場合</th>
			</tr>
			<tr>
				<th>プラン</th>
				<th>料金</th>
			</tr>
			<tr>
				<td>通常プラン</td>
				<td>3,000円 / 1時間</td>
			</tr>
			<tr>
				<td>3回まとめてプラン</td>
				<td>7,500円 / 3時間<span>(1時間あたり500円お得)</span></td>
			</tr>
			<tr>
				<td>1ヶ月定額プラン</td>
				<td>16,000円 / 1ヶ月<span>(1時間あたり1,000円お得)</span></td>
			</tr>
		</table>
		<table>
			<tr>
				<th colspan="2">チーム単位で受ける場合</th>
			</tr>
			<tr>
				<th>プラン</th>
				<th>料金</th>
			</tr>
			<tr>
				<td>通常プラン</td>
				<td>6,000円 / 1時間</td>
			</tr>
			<tr>
				<td>3回まとめてプラン</td>
				<td>15,000円 / 3時間<span>(1時間あたり1,000円お得)</span></td>
			</tr>
			<tr>
				<td>1ヶ月定額プラン</td>
				<td>32,000円 / 1ヶ月<span>(1時間あたり2,000円お得)</span></td>
			</tr>
		</table>
	</Modal>{/if}<button on:click={
		() => isCoachesModalOpened.update(() => true)
	}>コーチ一覧</button>{#if $isCoachesModalOpened}<Modal title="コーチ一覧">
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

	table {
		margin: 26px auto;
		font-size: 21px;
		border-collapse: collapse;
		border: 2px solid #ccfbff98;
	}

	tr {
		background-color: #122026;

		&:first-child {
			background-color: #121326;
			font-weight: 900;
			font-size: 20px;

			th {
				padding: 10px 16px;
			}
		}

		&:hover td {
			background-color: #ffffff10;
		}
	}

	th, td {
		padding: 5px 16px;
	}

	th {
		font-weight: 900;
		background-color: #121826;
	}

	td {
		span {
			display: block;
			font-size: 16px;
		}
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
