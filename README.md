## セットアップ手順

1. **リポジトリの作成・クローン**
   ```bash
   git clone https://github.com/lingmoo-02/event_app.git
   cd event_app
   ```

2. **依存パッケージのインストール**
   node.jsのインストール
   ```bash
   npm install
   ```
   **TailwindCSSのインストール**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **ローカルサーバーの起動**
   ```bash
   npm start
   ```

---

## 使用技術・ライブラリ

- **フロントエンド**: React.js, TailwindCSS
- **バックエンド**: Node.js
- **認証機能**: firebase
- **その他主要ライブラリ**: react-router-dom

---

## 実装機能の説明

- **イベント一覧表示**  
  登録されているイベントの情報をリスト形式で表示します。

- **ユーザー認証・登録**  
  ユーザーはアカウント登録・ログイン・ログアウトができます。

- **検索・フィルタリング**  
  イベント名・開催場所などで検索やフィルタリングが可能です。

---

## 動作確認方法

1. **ローカルサーバーの起動**  
   前述のセットアップ手順の通りサーバーを起動します。

2. **ブラウザでアクセス**  
   `http://localhost:3000` など、起動したサーバーのURLにアクセスします。

3. **ユーザー登録・ログイン**  
   アプリ画面から新規登録やログインができることを確認してください。