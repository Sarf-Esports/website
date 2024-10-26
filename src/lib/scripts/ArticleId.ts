// © 2022 REVATI

export class ArticleId {
	/** The year of the article. */
	year: number;
	/**
	 * The month of the article.
	 * It is 1-origin.
	 */
	month: number;
	/** The day of the article. */
	day: number;
	/**
	 * The number of the article in the day.
	 * It is 1-origin.
	 */
	no: number;
	/** The text of the article ID. */
	text: string | null;

	/**
	 * @param value - The slug of an article.
	 * `YYYYMMDD` or `YYYYMMDDNN` or `YYYYMMDD_text` or `YYYYMMDDNN_text` is expected.
	 */
	constructor(value: string) {
		let text: string;
		[ value, text ] = value.split('_');
		const no = parseInt(value.slice(8, 10));
		this.year = parseInt(value.slice(0, 4));
		this.month = parseInt(value.slice(4, 6));
		this.day = parseInt(value.slice(6, 8));
		this.no = isNaN(no) ? 1 : no;
		this.text = text === undefined ? null : text;
	}
}
