<!-- © 2022 - 2023 REVATI -->
<script>
	import Article from '../article.svelte';

	const article = {
		// 日付は `/src/lib/data/news.js` と一致させる
		date: '202301212',
		text: `
リブランディングに伴い、フォートナイト部門及びマインクラフト部門に計5名の新メンバーが加入します。
<br /><br />
= <strong>フォートナイト部門</strong>
<ul>
	<li>
		<strong>retchiri</strong> 
		[<a href="https://twitter.com/retchiri1">Twitter</a>]
	</li>
	<li>
		<strong>ぺな</strong> 
		[<a href="https://twitter.com/penaclip">Twitter</a>]
	</li>
</ul>
<br />
= <strong>マインクラフト部門</strong>
<ul>
	<li>
		<strong>GEN</strong> 
		[<a href="https://twitter.com/gen3987">Twitter</a> | <a href="https://youtube.com/@GEN3987">YouTube</a> | <a href="https://twitch.tv/gen3987">Twitch</a>]
	</li>
	<li>
		<strong>バード</strong> 
		[<a href="https://twitter.com/bird132297">Twitter</a> | <a href="https://youtube.com/@-bird-bird-bird-">YouTube</a>]
	</li>
	<li>
		<strong>ルイル</strong> 
		[<a href="https://twitter.com/Ruilu_Adora">Twitter</a> | <a href="https://youtube.com/@Ruilu_Adora">YouTube</a>]
	</li>
</ul>
<br />
新しいメンバーと共に、今後もより一層精進してまいりますので 応援よろしくお願いします !
	`
	};
</script>

<Article {...article} />
