<!-- © 2022 REVATI -->
<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<img src="/images/coaching-poster.webp" alt={$_('coaching.poster')} />

<p>説明ほへとちりぬるをわかよたれそつねならむ</p>

<div>
	<button>料金表</button><button>コーチ一覧</button>
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

	p {
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
