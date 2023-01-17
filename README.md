# REVATI Website

.-+~*
###### 俺だけ入れる【最強プロeスポーツチーム】で宇宙最強〜一日中ゲームをして引きこもるニートの俺、実は家族から見放された全一プロeスポーツ選手の生まれ変わりだった。俺にだけ使えるUSSRランク級最強キーボードと1000円マウスで宇宙で最強のeスポーツ選手となる～俺にだけある神スキルで無双したら垢BAN食らったので引退します～
*~+-.

## Links

- [メイン(revati.jp)](https://revati.jp)
- [開発(revati.pages.dev)](https://revati.pages.dev)

## Project notes

- [コミットするときのおやくそく☆](./CONTRIBUTING.md)
- [TODO](./TODO.md)
- [仕様書(雑)](./SPECIFICATION.md)

---

## SvelteKit万歳

このサイトには [SvelteKit](https://kit.svelte.jp/) とかいうフレームワークを使っています。
詳しくは [SvelteKitのドキュメント](https://kit.svelte.jp/docs/introduction) を参照

### 環境構築 !

npm で依存関係をインストール:

```bash
npm i
```

### 開発ビルド !

なんか変更がすぐに適応されるすごいやつをビルドできる。

```bash
$ npm run dev

> revati_website@x.y.z dev
> vite dev



  VITE vx.y.z  ready in n ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

ちなみにここで `O`キーを押下するとブラウザで開いてくれる。

## ビルド !

リモートリポジトリにプッシュするときは できればこれらを試して崩壊してないか確認してほしい

正レい製品版(?)ビルドをできる:

```bash
$ npm run build
```

ビルドしたものは `preview` で確認できる:

```bash
$ npm run preview
```
