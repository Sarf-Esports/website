// © 2022 REVATI

// If update the `BREAKPOINT_HB` JS constant, also update the `$bp-hamburger-btn` Sass variable in `src/lib/stylesheets/variables/_mixin.scss`.
// ＊ `BREAKPOINT_HB = $bp-hamburger-btn - 1`
// ＊ numerical value of `BREAKPOINT_HB` = `$bp-hamburger-btn` - 1
/** Breakpoint for media queries for the hamburger button. */
export const BREAKPOINT_HB = '(max-width: 907px)';

/** Copyright notice. */
export const COPYRIGHT = '© 2022 - 2024 REVATI';

/** Social media links. */
export const SOCIALS = {
	email: 'contact.revati@gmail.com',
	twitter: 'revati_jp',
	youtube: '@revati_jp',
	github: 'Sarf-Esports'
};

/** URL of the site. */
export const SITE_URL = 'https://revati.jp';

/**
 * The part of the full title of the pages.
 *
 * Usage:
 *
 * ```ts
 * import { PAGE_FULL_TITLE_PART } from '$lib/scripts/variables';
 * const FULL_TITLE = PAGE_FULL_TITLE_PART + 'Home';
 * ```
 */
export const PAGE_FULL_TITLE_PART = 'REVATI | ';
