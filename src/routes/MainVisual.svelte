<!-- © 2022 REVATI -->
<div><img src="/images/logos/revati/title_oxipng.png" alt="REVATI - UNDEFINED SPIRIT" /></div>

<style lang="scss">
	@use '/assets/stylesheets/variables/mixin' as *;

	div {
		height: 100vh;
		position: relative;
		opacity: 0;
		filter: blur(12px);
		animation: fadeIn 2s ease-in-out forwards;

		@keyframes fadeIn {
			to {
				opacity: 1;
				filter: blur(0);
			}
		}
	}

	img {
		display: block;
		margin: 0 auto;
		height: 170px;
		width: auto;
		position: relative;
		top: 50%;
		translate: 0 -50%;
		user-select: none;
		pointer-events: none;
		filter: sepia(2) hue-rotate(154deg) saturate(4) drop-shadow(0 0 36px #caffff59)
			drop-shadow(0 0 128px #75ffff99);

		@include sp {
			width: 80vw;
			height: auto;
		}
	}
</style>
