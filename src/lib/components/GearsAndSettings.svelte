<!-- © 2022 REVATI -->
<script lang="ts">
	import type { GearsAndSettings } from '$lib/scripts/types';
	import { _ } from 'svelte-i18n';

	export let playerName: string;
	export let gearsAndSettings: GearsAndSettings;

	const sens = gearsAndSettings.sens;
	const crosshair = gearsAndSettings.crosshair;
	const crosshairColName = crosshair.color;
	const outline = crosshair.outline;
	const outlineColName = outline.color;
	const dot = crosshair.dot;

	const T9N_KEY_PREFIX = 'teams.gearsAndSettingsItem.';
	const T9N_KEY_PREFIX_OUTLINE = T9N_KEY_PREFIX + 'outline.';
	const T9N_KEY_PREFIX_DOT = T9N_KEY_PREFIX + 'dot.';

	function convertColNameToHexCol(colName: string): string {
		switch (colName) {
			case 'black':
				return '#000000';
			case 'red':
				return '#ff0000';
			case 'cyan':
				return '#00ffff';
			case 'orange':
				return '#fd7000';
			default:
				return '#00000000';
		}
	}

	function convertBoolToOnOff(b: boolean): string {
		return b ? 'ON' : 'OFF';
	}
</script>

<!-- <img src="/images/gears-and-settings--poster/{gearsAndSettings.imageId}.png" alt="ぽすたー" /> -->

<h2>{playerName}{$_('teams.sGearsAndGameSettings')}</h2>

<table>
	<tr>
		<th colSpan="2">{$_('w.gears')}</th>
	</tr>
	<tr>
		<td>DPI</td>
		<td>{gearsAndSettings.dpi}</td>
	</tr>
	<tr>
		<td>{$_('w.mouse')}</td>
		<td>{gearsAndSettings.mouse}</td>
	</tr>
	<tr>
		<td>{$_('w.mousepad')}</td>
		<td>{gearsAndSettings.mousepad}</td>
	</tr>
	<tr>
		<td>{$_('w.keyboard')}</td>
		<td>{gearsAndSettings.keyboard}</td>
	</tr>
</table>

<table>
	<tr>
		<th colSpan="2">{$_('w.gameSettings')}</th>
	</tr>
	{#if typeof sens === 'number'}
		<tr>
			<td>{$_('w.sens')}</td>
			<td>{sens.toFixed(2)}</td>
		</tr>
	{:else if sens !== null}
		{#if sens.tank !== undefined}
			<tr>
				<td>{$_('w.sens')} (TANK)</td>
				<td>{sens.tank.toFixed(2)}</td>
			</tr>
		{/if}
		{#if sens.damage !== undefined}
			<tr>
				<td>{$_('w.sens')} (DAMAGE)</td>
				<td>{sens.damage.toFixed(2)}</td>
			</tr>
		{/if}
		{#if sens.support !== undefined}
			<tr>
				<td>{$_('w.sens')} (SUPPORT)</td>
				<td>{sens.support.toFixed(2)}</td>
			</tr>
		{/if}
	{/if}
</table>

<table>
	<tr>
		<th colSpan="2">{$_('w.crosshairSettings')}</th>
	</tr>
	<tr>
		<td>{$_(T9N_KEY_PREFIX + 'type')}</td>
		<td>{$_(`${T9N_KEY_PREFIX}type.${crosshair.type}`)}</td>
	</tr>
	{#if crosshair.showsAccuracy !== null}
		<tr>
			<td>{$_(T9N_KEY_PREFIX + 'showsAccuracy')}</td>
			<td>{convertBoolToOnOff(crosshair.showsAccuracy)}</td>
		</tr>
	{/if}
	<tr>
		<td>{$_(T9N_KEY_PREFIX + 'color')}</td>
		<td
			style="
				text-decoration: underline;
				text-decoration-color: {convertColNameToHexCol(crosshairColName)};
				text-decoration-thickness: 2px;
				text-decoration-skip-ink: none;
			"
		>
			{$_(`${T9N_KEY_PREFIX}color.${crosshairColName}`)}
		</td>
	</tr>
	{#if crosshair.thickness !== null}
		<tr>
			<td>{$_(T9N_KEY_PREFIX + 'thickness')}</td>
			<td>{crosshair.thickness.toFixed(1)}</td>
		</tr>
	{/if}
	{#if crosshair.rotation !== null}
		<tr>
			<td>{$_(T9N_KEY_PREFIX + 'rotation')}</td>
			<td>{crosshair.rotation}</td>
		</tr>
	{/if}
	{#if crosshair.crosshairLength !== null}
		<tr>
			<td>{$_(T9N_KEY_PREFIX + 'crosshairLength')}</td>
			<td>{crosshair.crosshairLength.toFixed(1)}</td>
		</tr>
	{/if}
	{#if crosshair.centerGap !== null}
		<tr>
			<td>{$_(T9N_KEY_PREFIX + 'centerGap')}</td>
			<td>{crosshair.centerGap.toFixed(1)}</td>
		</tr>
	{/if}
	{#if crosshair.opacity !== null}
		<tr>
			<td>{$_(T9N_KEY_PREFIX + 'opacity')}</td>
			<td>{crosshair.opacity + '%'}</td>
		</tr>
	{/if}
	<tr>
		<td>{$_(T9N_KEY_PREFIX_OUTLINE + 'color')}</td>
		<td
			style="
				text-decoration: underline;
				text-decoration-color: {convertColNameToHexCol(outlineColName)};
				text-decoration-thickness: 2px;
				text-decoration-skip-ink: none;
			"
		>
			{$_(`${T9N_KEY_PREFIX}color.${outlineColName}`)}
		</td>
	</tr>
	<tr>
		<td>{$_(T9N_KEY_PREFIX_OUTLINE + 'opacity')}</td>
		<td>{outline.opacity + '%'}</td>
	</tr>
	<tr>
		<td>{$_(T9N_KEY_PREFIX_OUTLINE + 'thickness')}</td>
		<td>{outline.thickness.toFixed(1)}</td>
	</tr>
	<tr>
		<td>{$_(T9N_KEY_PREFIX_OUTLINE + 'shift')}</td>
		<td>{outline.shift.toFixed(1)}</td>
	</tr>
	<tr>
		<td>{$_(T9N_KEY_PREFIX_DOT + 'type')}</td>
		<td>{$_(`${T9N_KEY_PREFIX_DOT}type.${dot.type}`)}</td>
	</tr>
	<tr>
		<td>{$_(T9N_KEY_PREFIX_DOT + 'size')}</td>
		<td>{dot.size.toFixed(1)}</td>
	</tr>
	<tr>
		<td>{$_(T9N_KEY_PREFIX_DOT + 'opacity')}</td>
		<td>{dot.opacity + '%'}</td>
	</tr>
	<tr>
		<td>{$_(T9N_KEY_PREFIX + 'scaleWithResolution')}</td>
		<td>{convertBoolToOnOff(crosshair.scaleWithResolution)}</td>
	</tr>
</table>

<style lang="scss">
	// img {
	// 	width: 640px;
	// 	margin-top: 46px;
	// 	border: 1px solid #888888;
	// 	border-radius: 8px;
	// }

	h2 {
		font-size: 24px;
		margin-top: 38px;
	}

	table {
		margin: 0 auto;
	}
</style>
