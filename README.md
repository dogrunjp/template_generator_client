# Template Generator Client

Svelte Schema Form (https://github.com/restspace/svelte-schema-form)を利用して
登録用フォームをJSON Schemaの定義から自動生成するクライアントアプリケーションです。


## 使い方

リポジトリをクローンします

```
git clone https://github.com/dogrunjp/template_generator_client.git
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

## JSON Schemaのテスト

開発環境でアプリケーションを起動した後、ルートにあたる"http://localhost:5173/"では動的にJSON Schemaを読み込むコード、"http://localhost:5173/pre-embedded"ではコード中にJSON Schemaを埋め込んだコードの表示テストしています。

## sveltekitのデータハンドリングについて

sveltekitではデータを外部から読み込むタイプのページのレンダリングは、データがページレンダリング前にfetchで実行されていた方が都合が良く、そのためアプリケーション本体の+page.svelteに連動してデータを受け渡すように、+page.jsファイルを別に作りload関数の中にあらかじめデータ取得し処理するように記述します。

したがって本アプリケーションでは、JSON Schemaの取得とパースは+page.jsで行います。