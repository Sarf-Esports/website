<!-- © 2022 REVATI -->
<script>
	import MaterialIcon from '$lib/components/MaterialIcon.svelte';

	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>REVATI | 404 Not Found</title>
</svelte:head>

<div>
	<h1>404 Page Not Found</h1>
	<p>{$_('error.404')}</p>
	<p>
		<a href="/">
			{$_('w.backToTop')}
			<MaterialIcon kind="box-arrow-up-right" width="18px" />
		</a>
	</p>
</div>

<style lang="scss">
	@use '/assets/stylesheets/variables/color' as *;
	@use '/assets/stylesheets/variables/mixin' as *;

	div {
		min-height: 36vh;
		margin-top: 40vh;
	}

	h1 {
		font-size: 42px;
		transition: 0.4s cubic-bezier(0, 0.7, 0.3, 2);

		@include sp {
			font-size: 28px;
		}

		@include pc {
			letter-spacing: 4px;

			&:hover {
				letter-spacing: 16px;
			}
		}
	}

	p {
		margin-top: 32px;
		filter: drop-shadow(1px 1px 0 #030303) drop-shadow(1px -1px 0 #030303);
		font-size: 24px;

		@include sp {
			font-size: 16px;
		}
	}

	a {
		font-size: 18px;
	}
</style>
