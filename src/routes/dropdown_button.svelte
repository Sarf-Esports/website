<!-- © 2022 - 2023 REVATI -->
<script>
	/**
	 * How far to drop down.
	 * @type {string}
	 */
	export let to;

	/**
	 * Style property.
	 * @type {string}
	 */
	export let style = '';
</script>

<a href="#{to}" {style}>▼</a>

<style lang="scss">
	a {
		text-decoration: none;
		color: white;
		padding: 1rem 1.25rem;
		display: inline-block;
		margin: 16px auto 32px auto;
		font-size: 24px;
		user-select: none;
		transition: 0.4s;


		&:hover {
			transform: translateY(4px);
		}

		&::after {
			display: block;
			color: gray;
			font-size: 16px;
			position: absolute;
			left: 0;
			right: 0;
		}

		&:hover::after {
			content: 'NEXT';
		}
	}
</style>
