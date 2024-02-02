<!-- © 2022 REVATI -->
<script>
	import Socials from './socials.svelte';
	import LangSwitcher from './lang_switcher.svelte';

	import { copyright } from '$lib/variables';
</script>

<footer>
	<p class="copyright">{copyright}</p>
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
