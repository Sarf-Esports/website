<!-- © 2022 - 2023 REVATI -->
<script>
	import { copyright } from '$lib/variables';

	import Socials from './socials.svelte';
</script>

<footer>
	<p class="copyright">{copyright}</p>
	<Socials />
</footer>

<style lang="scss">
	footer {
		min-height: 24vh;
		background-color: #0a0a0a;

		.copyright {
			font-size: 16px;
			margin-top: 2em;
			text-align: center;
		}
	}
</style>
