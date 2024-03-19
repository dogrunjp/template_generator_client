# Template Generator Client

Svelte Schema Form (https://github.com/restspace/svelte-schema-form)を利用して
登録用フォームをJSON Schemaの定義から自動生成するクライアントアプリケーションです。


## How to use

リポジトリをクローンします

```
git clone https://github.com/ddbj/template_generator_client.git
```

ディレクトリを移動しnpmインストール
```
cd template_generator_client
npm install @restspace/svelte-schema-form
```

開発環境でアプリケーションを実行しブラウザで確認する

```
npm run dev -- --open
```


## sveltekitのデータハンドリングについて

sveltekitではデータを使ったページのレンダリングは、ページレンダリング前にfetchで実行されていた方が都合が良く、+page.svelteに連動してデータを受け渡すように、+page.jsファイルを別に作りload関数の中にデータ取得処理を記述します。

したがって本アプリケーションでは、JSON Schemaの取得とパースは+page.jsで行います。