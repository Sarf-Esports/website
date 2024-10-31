// © 2022 REVATI

import fs from 'fs';
import path from 'path';

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const date = `${year}${String(month).padStart(2, '0')}${String(day).padStart(2, '0')}`;

const articlesDir = path.join(process.cwd(), `articles/${year}/${month}`);

let i = 1;
while (
	fs.existsSync(
		path.join(articlesDir, date + (1 < i ? String(i).padStart(2, '0') : '') + '.md')
	) === true
)
	i++;
const fileName = date + (1 < i ? String(i).padStart(2, '0') : '') + '.md';

const filePath = path.join(articlesDir, fileName);

const INIT_CONTENT = `---
published: true
indexed: true
title: ここにタイトル
---

ここに本文を書く

サムネイル画像は[サムネイル画像の設定方法](/docs/ADDING_NEWS.md#サムネイル画像の設定方法)を見ながら設定してください。(任意)

日付を変えたい場合は[記事IDのルール(ファイル)](/docs/ADDING_NEWS.md#記事IDのルール)に従った上でファイル名を変更する

画像を新しくアップロードする場合は [/static/images/blog/](/static/images/news/) に配置する

その他の詳細についてはドキュメントやテスト記事参照:

## ドキュメント

- [ADDING_NEWS.md](/docs/ADDING_NEWS.md)

## テスト記事

- Markdownファイル: [/articles/2023/2/20230206_test.md](/articles/2023/2/20230206_test.md)
- ページ: [/news/articles/20230206_test](/news/articles/20230206_test)

## 専用コンポーネント一覧

- Markdownファイル: [/articles/2024/3/20240301_test.md](/articles/2024/3/20240301_test.md)
- ページ: [/news/articles/20240301_test](/news/articles/20240301_test)
`;

if (!fs.existsSync(articlesDir)) fs.mkdirSync(articlesDir, { recursive: true });
fs.writeFileSync(filePath, INIT_CONTENT);

console.log('Created: ' + filePath);
