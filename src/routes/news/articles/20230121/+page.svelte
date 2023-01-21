<!-- © 2022 - 2023 REVATI -->
<script>
	import Article from '../article.svelte';

	const article = {
		// 日付は `/src/lib/data/news.js` と一致させる
		date: '20230121',
		text: `
Sarf Esports は2023年1月21日よりチーム名を <span style="filter:drop-shadow(0 0.5px 0 #eee) drop-shadow(0 -0.5px 0 #eee) drop-shadow(-0.5px 0 0 #eee);">REVATI</span>(レーヴァティ) へと改めます。
<br /><br />
新しいイメージや戦略に合わせて さらなるチームの発展と活動範囲の拡大を目指し、
成功を収めるために努力して参ります。
応援よろしくお願いします。
	`
	};
</script>

<Article {...article} />
