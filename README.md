# Investment Agent

AI駆動の投資分析・ポートフォリオ管理アプリ

## 技術スタック

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Prisma** + Neon PostgreSQL（本番・開発共通）

## セットアップ

```bash
# 依存パッケージのインストール
npm install

# Prisma クライアント生成 & DB 作成
npm run db:generate
npm run db:push

# 開発サーバー起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## 便利なコマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run db:generate` | Prisma クライアント生成 |
| `npm run db:push` | スキーマを DB に反映 |
| `npm run db:migrate` | マイグレーション作成・適用 |
| `npm run db:studio` | DB を GUI で確認 |

## プロジェクト構成

```
src/
  app/          # ページ・レイアウト（App Router）
  lib/          # 共通ライブラリ（Prisma クライアントなど）
prisma/
  schema.prisma # データベーススキーマ定義（Phase 1: Portfolio + MonthlyPlan）
requirements.md # 要件定義書
```

## Vercel デプロイ手順

### 1. Git をインストール
https://git-scm.com/download/win からインストール

### 2. Neon でデータベース作成
1. https://neon.tech にサインアップ（無料）
2. 新しいプロジェクトを作成
3. **Connection string** をコピー

### 3. 環境変数を設定
`.env` に Neon の接続 URL を設定：
```
DATABASE_URL="postgresql://..."
```

ローカルで反映：
```bash
npm run db:push
```

### 4. GitHub にプッシュ
```bash
git init
git add .
git commit -m "feat: Phase 1 MVP 完成"
git branch -M main
git remote add origin https://github.com/あなたのユーザー名/investment-agent.git
git push -u origin main
```

### 5. Vercel でデプロイ
1. https://vercel.com にサインアップ
2. **Add New Project** → GitHub リポジトリを選択
3. **Environment Variables** に `DATABASE_URL` を追加（Neon の URL）
4. **Deploy** をクリック

デプロイ完了後、`https://xxxx.vercel.app` でアクセスできます（HTTPS 自動）。

## Phase 1 データモデル

| モデル | 役割 |
|--------|------|
| `Portfolio` | 1銘柄の保有情報（ticker, shares, avgCost, category） |
| `MonthlyPlan` | 月次の収支計画と投資余力 |
