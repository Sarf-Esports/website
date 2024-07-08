// © 2022 REVATI

import fs from 'fs';
import path from 'path';

const articlesDir = path.join(process.cwd(), 'articles');

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const date = `${year}${month}${day}`;

let i = 1;
while (
	fs.existsSync(path.join(articlesDir, date + (1 < i ? String(i).padStart(2, '0') : '') + '.md'))
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

サムネイル画像は原則必須なので[サムネイル画像の設定方法](/docs/ADDING_NEWS.md#サムネイル画像の設定方法)を見ながら設定してください

日付を変えたい場合は[記事IDのルール(ファイル)](/docs/ADDING_NEWS.md#記事IDのルール)に従った上でファイル名を変更する

画像を新しくアップロードする場合は [/assets/images/blog/](/assets/images/news/) に配置する

その他の詳細についてはドキュメントやテスト記事参照:

## ドキュメント

- [ADDING_NEWS.md](/docs/ADDING_NEWS.md)

## テスト記事

- Markdownファイル: [/articles/20230206_test.md](/articles/20230206_test.md)
- ページ: [/news/articles/20230206_test](/news/articles/20230206_test)

## 専用コンポーネント一覧

- Markdownファイル: [/articles/20240301_test.md](/articles/20240301_test.md)
- ページ: [/news/articles/20240301_test](/news/articles/20240301_test)
`;

fs.writeFileSync(filePath, INIT_CONTENT);

console.log('Created: ' + filePath);
