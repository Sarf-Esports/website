# REVATI Website

.-+~*
###### 俺だけ入れる【最強プロeスポーツチーム】で宇宙最強〜一日中ゲームをして引きこもる低学歴ニートの俺、実は家族から見放された全一プロeスポーツ選手の生まれ変わりだった。俺にだけ使えるUSSRランク級最強キーボードと1000円マウスで宇宙で最強のeスポーツ選手となる～俺にだけある最強神スキルで無双したら垢BAN食らったので引退します～
*~+-.

## Links

- プロダクト: https://revati.jp
- 開発: https://{ブランチ名|デプロイコミット}.revati.pages.dev
  - dev: https://dev.revati.pages.dev

## Project notes

- [変更を加えたい時のおやくそく☆](./docs/CONTRIBUTING.md)
- [TODO](./docs/TODO.md)
- [仕様書(雑)](./docs/SPECIFICATION.md)

* [ニュース記事の追加方法](./docs/ADDING_NEWS.md)
* [メンバーのリスト判定への追加](./src/lib/data/MEMBERS.ts)

---

## SvelteKit万歳

このサイトには [SvelteKit](https://kit.svelte.jp) とかいうすごい Svelteフレームワークを使っています。
詳しくは [SvelteKitのドキュメント](https://kit.svelte.jp/docs/introduction) を参照

### 環境構築

npm とかで依存関係をインストール:

```bash
npm i
```

### 開発サーバー

開発サーバーを立ち上げる:

```bash
$ npm run dev

> revati_website@x.y.z dev
> vite dev



  VITE vx.y.z  ready in n ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### ビルド

リモートにプッシュするときはビルドして崩壊してないか確認してほしい:

```bash
npm run build
```

ビルドしたものは `preview` で確認できる:

```bash
npm run preview
```
