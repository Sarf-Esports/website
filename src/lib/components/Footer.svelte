<!-- © 2022 REVATI -->
<script lang="ts">
	import Socials from './Socials.svelte';
	import LangSwitcher from './LangSwitcher.svelte';

	import { isContactModalOpened, isDrawerMenuOpened } from '$lib/scripts/stores';
	import { COPYRIGHT } from '$lib/scripts/variables';
</script>

<footer inert={$isDrawerMenuOpened || $isContactModalOpened}>
	<p class="copyright">{COPYRIGHT}</p>
	<div class="socials"><Socials /></div>
	<div class="lang-btn"><LangSwitcher /></div>
</footer>

<style lang="scss">
	footer {
		min-height: 24vh;
		background-color: #0a0a0a;

		.copyright {
			font-size: 16px;
			margin-top: 2em;
		}

		.socials {
			margin-bottom: 16px;
		}

		.lang-btn {
			margin: 0 32px 24px 0;
			float: right;
		}
	}
</style>
