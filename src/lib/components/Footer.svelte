<!-- © 2022 REVATI -->
<script lang="ts">
	import Socials from './Socials.svelte';
	import LangSwitcher from './LangSwitcher.svelte';

	import { isDrawerMenuOpened } from '$lib/scripts/stores';
	import { COPYRIGHT } from '$lib/scripts/variables';
	import { SOCIALS } from '$lib/scripts/variables';
</script>

<footer inert={$isDrawerMenuOpened}>
	<p class="copyright">{COPYRIGHT}</p>
	<div>
		<a href="/privacy">Privacy</a><a href="mailto:{SOCIALS.email}">Contact</a><a href="/licenses"
			>Licenses</a
		><a href="/feed" target="_blank" class="no-after-icn">Feed</a><a
			href="https://github.com/Sarf-Esports/website">Source</a
		>
	</div>
	<div class="socials"><Socials /></div>
	<div class="lang-btn"><LangSwitcher /></div>
</footer>

<style lang="scss">
	@use '$lib/stylesheets/variables/mixin' as *;

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

	a {
		margin: 0 15px;

		&:not(:hover, :focus) {
			color: #eeeeee;
			text-decoration: none;
		}
	}

	@include sp {
		a {
			margin-inline: 12px;
			font-size: 15px;
		}
	}
</style>
