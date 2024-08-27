// © 2022 REVATI

import type { GearsAndSettings } from '$lib/scripts/types';

export const GEARS_AND_SETTINGS: { [key: string]: GearsAndSettings } = {
	epic: {
		imageId: 'epic',
		dpi: 800,
		sens: 4.5,
		mouse: 'Logicool G PRO X Superlight',
		mousepad: 'Padsmith Crucible - Temple of Dreams V2',
		keyboard: 'Logicool G PRO',
		crosshairSettings: [
			{
				type: 'default',
				showsAccuracy: true,
				color: 'cyan',
				thickness: 1.0,
				rotation: null,
				crosshairLength: null,
				centerGap: 0.0,
				opacity: 0,
				outline: {
					color: 'black',
					opacity: 0,
					thickness: 0.0,
					shift: 0.0
				},
				dot: {
					type: 'default',
					size: 5.0,
					opacity: 100
				},
				scaleWithResolution: true
			}
		]
	},
	fearful: {
		imageId: 'fearful',
		dpi: 800,
		sens: 7.0,
		mouse: 'Logicool G PRO X Superlight',
		mousepad: 'VAXEE B22',
		keyboard: 'VARMILO VA87M V2 SEA MELODY PBT',
		crosshairSettings: [
			{
				type: 'dot',
				showsAccuracy: null,
				color: 'cyan',
				thickness: null,
				rotation: null,
				crosshairLength: null,
				centerGap: null,
				opacity: null,
				outline: {
					color: 'black',
					opacity: 100,
					thickness: 1.0,
					shift: 0.0
				},
				dot: {
					type: 'default',
					size: 7.0,
					opacity: 100
				},
				scaleWithResolution: true
			}
		]
	},
	harutoon: {
		imageId: 'harutoon',
		dpi: 800,
		sens: 7.62,
		mouse: 'Logicool G PRO X SUPERLIGHT WHITE',
		mousepad: 'Padsmith Temple of Dreams - Remastered',
		keyboard: 'DrunkDeer A75',
		crosshairSettings: [
			{
				type: 'crosshairs',
				showsAccuracy: false,
				color: 'cyan',
				thickness: 1.0,
				rotation: 0,
				crosshairLength: 8.0,
				centerGap: 0.0,
				opacity: 100,
				outline: {
					color: 'black',
					opacity: 0,
					thickness: 0.0,
					shift: 0.0
				},
				dot: {
					type: 'default',
					size: 0.0,
					opacity: 0
				},
				scaleWithResolution: true
			},
			{
				type: 'circle',
				showsAccuracy: false,
				color: 'cyan',
				thickness: 1.0,
				rotation: null,
				crosshairLength: null,
				centerGap: 10.0,
				opacity: 100,
				outline: {
					color: 'black',
					opacity: 0,
					thickness: 0.0,
					shift: 0.0
				},
				dot: {
					type: 'default',
					size: 0.0,
					opacity: 0
				},
				scaleWithResolution: true
			},
			{
				type: null,
				showsAccuracy: false,
				color: 'black',
				thickness: 1.0,
				rotation: 0,
				crosshairLength: 5.0,
				centerGap: 5.0,
				opacity: 100,
				outline: {
					color: 'black',
					opacity: 0,
					thickness: 0.0,
					shift: 0.0
				},
				dot: {
					type: 'default',
					size: 0.0,
					opacity: 0
				},
				scaleWithResolution: true
			}
		]
	},
	hesty: {
		imageId: 'hesty',
		dpi: 800,
		sens: [
			{ role: 'tank', value: 10.0 },
			{ role: 'damage', value: 5.22 },
			{ role: 'support', value: 7.0 }
		],
		mouse: 'Finalmouse Ultralight 2 - CAPE TOWN',
		mousepad: 'Padsmith Crucible - Temple of Dreams V2',
		keyboard: 'Varmilo 92 Sakura 桜 JIS Keyboard V2',
		crosshairSettings: [
			{
				type: 'line',
				showsAccuracy: false,
				color: 'red',
				thickness: 1.0,
				rotation: 0,
				crosshairLength: 4.0,
				centerGap: 0.0,
				opacity: 100,
				outline: {
					color: 'black',
					opacity: 0,
					thickness: 1.0,
					shift: 1.0
				},
				dot: {
					type: 'default',
					size: 4.5,
					opacity: 0
				},
				scaleWithResolution: true
			},
			{
				type: 'crosshairs',
				showsAccuracy: false,
				color: 'red',
				thickness: 1.0,
				rotation: 45,
				crosshairLength: 5.0,
				centerGap: 0.8,
				opacity: 100,
				outline: {
					color: 'black',
					opacity: 100,
					thickness: 1.0,
					shift: 1.0
				},
				dot: {
					type: 'default',
					size: 0.0,
					opacity: 0
				},
				scaleWithResolution: true
			}
		]
	},
	hofac: {
		imageId: 'hofac',
		dpi: 800,
		sens: 3.25,
		mouse: 'Logicool G PRO Wireless',
		mousepad: 'PADSMITH Temple of Dreams - Remastered',
		keyboard: 'COX Endeavour Original Retro Tenkeyless',
		crosshairSettings: [
			{
				type: 'line',
				showsAccuracy: false,
				color: 'orange',
				thickness: 1.0,
				rotation: 0,
				crosshairLength: 4.0,
				centerGap: 0.0,
				opacity: 100,
				outline: {
					color: 'black',
					opacity: 0,
					thickness: 1.0,
					shift: 1.0
				},
				dot: {
					type: 'default',
					size: 4.5,
					opacity: 0
				},
				scaleWithResolution: true
			}
		]
	},
	solace: {
		imageId: 'solace',
		dpi: 1200,
		sens: [{ role: 'genji', value: 5.0 }],
		mouse: 'Ninjutso Sora V2',
		mousepad: 'Aritsan Hien Mid Soft',
		keyboard: 'Varmilo Minilo VXH67 (65%)',
		crosshairSettings: [
			{
				type: 'box',
				showsAccuracy: false,
				color: 'white',
				thickness: 4.0,
				rotation: 315,
				crosshairLength: 1.0,
				centerGap: 0.0,
				opacity: 100,
				outline: {
					color: 'white',
					opacity: 0,
					thickness: 3.0,
					shift: 0.0
				},
				dot: {
					type: 'default',
					size: 0.0,
					opacity: 100
				},
				scaleWithResolution: true
			}
		]
	},
	ninja_hamuzo: {
		imageId: 'ninja_hamuzo',
		dpi: 800,
		sens: 3.25,
		mouse: 'Gwolves HTS Plus 4K',
		mousepad: 'Artizan Hayate乙',
		keyboard: 'Steelseries Apex pro mini',
		crosshairSettings: [
			{
				type: 'circle',
				showsAccuracy: false,
				color: 'magenta',
				thickness: 1.0,
				rotation: null,
				crosshairLength: null,
				centerGap: 39.7,
				opacity: 100,
				outline: {
					color: 'black',
					opacity: 100,
					thickness: 1.0,
					shift: 1.0
				},
				dot: {
					type: 'default',
					size: 5.0,
					opacity: 100
				},
				scaleWithResolution: true
			},
			{
				type: 'crosshairs',
				showsAccuracy: false,
				color: 'magenta',
				thickness: 1.0,
				rotation: 0,
				crosshairLength: 5.0,
				centerGap: 3.5,
				opacity: 100,
				outline: {
					color: 'black',
					opacity: 100,
					thickness: 1.0,
					shift: 1.0
				},
				dot: {
					type: 'default',
					size: 0.0,
					opacity: 0
				},
				scaleWithResolution: true
			}
		]
	},
	hakaisinkotaro: {
		imageId: 'hakaisinkotaro',
		dpi: 800,
		sens: 7.3,
		mouse: 'Logicool G PRO X SUPERLIGHT',
		mousepad: 'Padsmith Crucible - Temple of Dreams V2',
		keyboard: 'Logicool G 913 TKL',
		crosshairSettings: [
			{
				type: 'dot',
				showsAccuracy: null,
				color: 'white',
				thickness: null,
				rotation: null,
				crosshairLength: null,
				centerGap: null,
				opacity: null,
				outline: {
					color: 'black',
					opacity: 100,
					thickness: 3.0,
					shift: 1.0
				},
				dot: {
					type: 'default',
					size: 2.9,
					opacity: 100
				},
				scaleWithResolution: true
			}
		]
	}
};
