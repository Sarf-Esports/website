# 変更を加えたいときの手順

<!-- ~~1. [devブランチ](https://github.com/Sarf-Esports/website/tree/dev) である程度まとめてコミットする~~  
~~2. masterブランチにマージする~~  
~~3. やったね ! まーぢできたら完了ですね !! ページのビルドを待ちましょう~~  

~~もしできれば余力があれば dev-rinrin みたいに おともだちごとにブランチ分けてくれると嬉しい。~~
~~その時はさらに各ブランチを devブランチにマージ(しなさい)~~

> ~~**Warning**~~

~~masterブランチにに直接コミットしてリポジトリを破壊したりは**絶対に**しないでください ^^;~~  
~~しばきますわよ~~

- **やっぱりこのリポジトリをフォークしてからそこで作業してください。**  
- **一通り実装できたらプルリクエストしてください。**  
- **フォーク先でも devブランチにコミットしてから masterブランチにマージしてください。** -->

wow! 貢献したいんだね!!
素晴らしき労働人民万歳🙌

> **Warning**

何があっても基本的に絶対に **masterブランチに直接コミットしないでください**。
これが 何を言ってるかわからない人はまず Git の勉強してから貢献の検討を加速してね。
(もし万が一仮にmasterブランチに直接コミットをしてしまうと、すぐさま revati.jp(プロダクション)にデプロイされて 最悪の場合お友達がサイト閲覧できなくなっちゃうから絶対にやめてね)

## 環境構築とか
[README.md](../README.md#SvelteKit万歳) に書いてあるので参照

## 貢献方法

1. このリポジトリをフォーク
1. フォークしたリポジトリをローカル環境にクローン
1. `npm i` とかで依存関係をインストール
1. `npm run check` が自分の環境で通るか確認  
なにか問題があったら [Issue](https://github.com/Sarf-Esports/website/issues) 立てて
1. `git switch dev` で devブランチに移動
1. `git switch -c ブランチ名` で作業用ブランチを切る  
命名は基本的に `feat/*` とか `fix/*` の形にしてね
1. 作業する
1. 作業が完了したら次のコマンドがすべて通るか確認:  
    - `npm run check`
    - `npm run fmt`
    - `npm run lnt`
1. 通ったら フォークしたリポジトリにプッシュしたうえでプルリクエストを出す
1. マージされるのを待つ

### その他注意事項

- プレビューがデプロイされるブランチは `dev`, `feat/*`, `fix/*`, `hotfix/*` のみです
- hotfix系ブランチは基本的にメインリポジトリで masterブランチから生やします
- 破壊的または大規模な変更になりそうだったら事前に [Issue](https://github.com/Sarf-Esports/website/issues) 立てた方が賢明
- 何かわからないことがあれば [Discussions](https://github.com/Sarf-Esports/website/discussions) なりで聞いてね
