<!-- © 2022 REVATI -->
<script lang="ts">
	import type { Writable } from "svelte/store";

	export let open: Writable<boolean>;
	export let title: string | null = null;
	/**
	 * The minimum width of the modal. (`px`)
	 *
	 * But it will be `100vw - 29px` if it is bigger than `100vw - 29px`.
	 */
	export let minWidth: number = 358;

	let dialog: HTMLDialogElement;
	open.subscribe((isOpen) => {
		if (dialog != undefined && dialog !== null) {
			if (isOpen) dialog.showModal();
			else dialog.close();
		};
	});

	function close() {
		open.set(false);
	}
</script>

<!-- Is the `<dialog>` element really not a non-interactive element? -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	on:click={(e) => { if (e.target === dialog) close() }}
	on:close={close}
	bind:this={dialog}
	class="modal"
	style="min-width: min({minWidth}px, 100vw - 29px);"
>
	<div class="modal-content">
		{#if title !== null}
			<h1>{title}</h1>
		{/if}
		<slot />
		<button on:click={close}>
			<!--
				Google Material Symbols and Icons - Close
				https://fonts.google.com/icons?selected=Material+Symbols+Outlined:close:FILL@0;wght@400;GRAD@200;opsz@24&icon.query=close&icon.size=24&icon.color=%23e8eaed
				This icon is licensed under the Apache License Version 2.0: https://github.com/google/material-design-icons/blob/master/README.md
			-->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 -960 960 960"
				width="24px"
				fill="#e8eaed"
				><path
					d="m252-176-74-76 227-228-227-230 74-76 229 230 227-230 74 76-227 230 227 228-74 76-227-230-229 230Z"
				/></svg
			>
		</button>
	</div>
</dialog>

<style lang="scss">
	@use '$lib/stylesheets/modal';
</style>
