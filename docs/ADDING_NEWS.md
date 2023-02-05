# 令和最新版ニュース記事の作成手順

まず、全ての変更において [`CONTRIBUTING.md`](./CONTRIBUTING.md) に準じてください。

1. [`/src/lib/data/news.js`](../src/lib/data/news.js) に行く

そこに色々書いてあるので従ってください。
ここに追加するとニューススライダーに表示されるようになります。

2. `/src/routes/news/article/{date}.md` を作成する

`{date}` 部分は `news.js` で指定した `date` に合わせてください。
必ず冒頭にフロントメタを書いてください:

```yaml
---
published: true
title: "ニュース記事のテスト"
date: "20230206_test"
---
```

`published` が `false` になっているとニュース記事にアクセスできなくなります。  
`title` と `date` は `news.js` で指定したものに合わせてください。

このフロントメタの下に本文を書いてください。  
基本的な書式は Markdown です。詳しくは [`/src/routes/news/article/20230206_test.md`](../src/routes/news/articles/20230206_test.md) を参照されたい。
