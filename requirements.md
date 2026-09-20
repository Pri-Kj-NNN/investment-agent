# Investment Agent - 要件定義書

## プロジェクト概要

### プロジェクト名

```
Investment Agent - 個人投資ポートフォリオ管理＆投資判断支援システム
```

### プロジェクトの目的

```
個人投資家が、ポートフォリオの可視化と投資余力の管理を行い、
事前に設定したルールに基づいて投資判断の支援を受けることを可能にする。

AI は「推薦」まで行い、最終的な投資判断は利用者自身が行う。
```

### 対象ユーザー

```
- 個人投資家（株式、ETF、投資信託を保有）
- ESPP（従業員持株制度）を利用している会社員
- 新 NISA、iDeCo、企業型 DC を活用している層
- 感情に左右されず、ルールベースで投資したい人
```

### 成功基準（MVP の完了定義）

```
✅ PC とスマホの両方でポートフォリオを閲覧・編集できる
✅ 月次の投資余力（給与 - 支出）を計算・表示できる
✅ 事前に設定したルール（例：-10% 下落）に基づき通知を受け取れる
✅ Vercel にデプロイされ、自宅以外のネットワークからもアクセス可能
```

---

## 学習目標と教育方針

### プロジェクトの位置付け

```
本プロジェクトは、単なるアプリ開発だけでなく、以下のスキル習得を目的とした学習プロジェクトである：

1. AI 駆動開発（Cursor を活用した効率的な開発）
2. Web アプリケーション開発（Next.js, TypeScript, Prisma）
3. バージョン管理（Git, GitHub）
4. クラウドデプロイ（Vercel）
5. 要件定義・設計の基礎
```

### 学習目標（Phase 1 完了時）

#### AI 駆動開発スキル

```
✅ Cursor の AI チャットを効果的に使える
   - 適切なプロンプトでコードを生成できる
   - エラーメッセージを AI に貼り付けて修正できる
   - 生成されたコードの意図を理解できる

✅ AI と人間の役割分担を理解している
   - AI: ボイラープレート、定型的なコード
   - 人間: 要件定義、設計判断、コードレビュー
```

#### Web アプリ開発スキル

```
✅ Next.js の基本構造を理解している
   - App Router の仕組み
   - Server Component と Client Component の違い
   - API Routes の書き方

✅ TypeScript の基礎を理解している
   - 型定義の書き方
   - 型推論の活用
   - ジェネリクスの基礎

✅ データベース操作の基礎
   - Prisma スキーマの定義
   - CRUD 操作（Create, Read, Update, Delete）
   - マイグレーションの仕組み
```

#### Git/GitHub スキル

```
✅ 基本的な Git コマンドを使える
   - `git add`, `git commit`, `git push`
   - `git status`, `git log`
   - ブランチの作成・マージ

✅ GitHub の基本的な使い方
   - リポジトリの作成
   - プッシュ・プル
   - コミットメッセージの規約
```

#### クラウドデプロイ

```
✅ Vercel の基本的な使い方
   - GitHub 連携でのデプロイ
   - 環境変数の設定
   - デプロイログの確認
```

---

### 教育方針：Cursor の使い方

#### ❌ やらないこと（NG プラクトイス）

```
1. AI に全てを任せて、コードを全く読まない
2. エラーが出たら、そのまま AI に修正させる（自分で読まない）
3. 生成されたコードの意図を理解せずにマージする
4. コミットメッセージも AI に書かせる
```

#### ✅ やること（ベストプラクトイス）

```
1. 生成されたコードを必ず自分で読む
   - 「この行は何をしているか？」を説明できる状態にする

2. エラーが出たら、まず自分でエラーメッセージを読む
   - どのファイルの何行目で、どんなエラーか理解する
   - その後、AI に「このエラーの原因と修正方法を教えてください」と聞く

3. 重要な判断（データモデル設計、API 設計）は自分で行う
   - AI は「実装」のみを担当
   - 設計判断は人間が責任を持つ

4. 毎日、学んだことを言語化する
   - 開発ログに「今日学んだこと」を 3 つ書く
   - 例：「Prisma のスキーマ定義では、@default(now()) で自動 timestamps を設定できる」
```

---

### Cursor への指示テンプレート（学習重視）

#### ① 新規機能の実装を依頼する

```
【依頼】
[機能名] の実装をお願いします。

【学習の意図】
この機能を通じて、[技術要素] の理解を深めたいです。

【指示】
1. まず、実装方針を説明してください
2. 次に、コードを生成してください
3. 各コードブロックについて、「なぜこの書き方をするのか」を解説してください
4. 最後に、確認すべきポイント（型定義、エラーハンドリングなど）を教えてください
```

**具体例**:
```
【依頼】
ポートフォリオの新規追加 API の実装をお願いします。

【学習の意図】
Prisma を使った CRUD 操作と、Next.js の API Routes の理解を深めたいです。

【指示】
1. まず、実装方針を説明してください
2. 次に、コードを生成してください
3. 各コードブロックについて、「なぜこの書き方をするのか」を解説してください
4. 最後に、確認すべきポイント（型定義、エラーハンドリングなど）を教えてください
```

#### ② エラー修正を依頼する

```
【エラー内容】
[エラーメッセージを貼り付け]

【自分で試したこと】
1. [試したこと 1]
2. [試したこと 2]

【質問】
1. このエラーの原因は何ですか？
2. どのように修正すればよいですか？
3. 今後同じエラーを防ぐためには、どうすればよいですか？
```

#### ③ コードレビューを依頼する

```
【依頼】
以下のコードのレビューをお願いします。

【コード】
[コードを貼り付け]

【質問】
1. このコードの問題点はありますか？
2. より良い書き方はありますか？
3. Next.js/TypeScript のベストプラクトイスに則していますか？
4. セキュリティ上の懸念はありますか？
```

#### ④ 概念の理解を深める

```
【質問】
[概念名] について、初心者にもわかるように説明してください。

【具体例】
- 実際のコード例を 1-2 個見せてください
- 「なぜこれが必要か」を教えてください
- 「これを使わないとどうなるか」を教えてください
```

**具体例**:
```
【質問】
Server Component と Client Component の違いについて、初心者にもわかるように説明してください。

【具体例】
- 実際のコード例を 1-2 個見せてください
- 「なぜこれが必要か」を教えてください
- 「これを使わないとどうなるか」を教えてください
```

---

### 学習チェックリスト（Phase 1 完了時）

#### 毎日チェック

```
- [ ] 生成されたコードを全て読んだ
- [ ] 理解できない行は AI に質問した
- [ ] エラーメッセージを自分で読んだ
- [ ] 開発ログに「今日学んだこと」を 3 つ書いた
```

#### Phase 1 完了時に自己評価

```
AI 駆動開発
- [ ] Cursor の AI チャットで、適切なプロンプトを出せる
- [ ] 生成されたコードの意図を説明できる
- [ ] エラー発生時、まず自分でエラーメッセージを読む習慣がついた

Next.js
- [ ] App Router のディレクトリ構造を説明できる
- [ ] Server Component と Client Component の違いを説明できる
- [ ] API Routes の書き方を理解している

TypeScript
- [ ] 型定義の書き方がわかる
- [ ] `interface` と `type` の違いを説明できる
- [ ] ジェネリクスの基礎を理解している

Prisma
- [ ] スキーマ定義の書き方がわかる
- [ ] マイグレーションの仕組みを理解している
- [ ] CRUD 操作を実装できる

Git/GitHub
- [ ] 基本的な Git コマンドを使える
- [ ] 意味のあるコミットメッセージを書ける
- [ ] GitHub にプッシュできる

Vercel
- [ ] GitHub 連携でデプロイできる
- [ ] 環境変数の設定ができる
- [ ] デプロイログを確認できる
```

---

### 開発ログのテンプレート（学習重視）

```markdown
# 開発ログ

## 2026-09-19

### やったこと
- プロジェクトセットアップ
- Prisma スキーマ作成
- shadcn/ui 導入

### 今日学んだこと（3 つ）
1. **Prisma のスキーマ定義**
   - `@id @default(uuid())` で UUID を自動生成できる
   - `@default(now())` で自動 timestamps を設定できる
   - SQLite と PostgreSQL では provider の書き方が違う

2. **shadcn/ui の導入方法**
   - `npx shadcn-ui@latest init` で初期化
   - 必要なコンポーネントだけ `add` で追加可能
   - Tailwind CSS と完全に統合されている

3. **Cursor の効果的な使い方**
   - 「まず方針を説明して、次にコードを生成」と指示すると、理解しやすい
   - エラーメッセージをそのまま貼り付けると、的確な回答が返ってくる

### ハマったこと
- Prisma のマイグレーションでエラー
  → `npx prisma migrate reset` で解決
  → 原因：スキーマを編集した後、マイグレーション履歴と不一致になった

### 明日のタスク
- [ ] API ルート実装
- [ ] ダッシュボード画面
- [ ] 学んだことを 3 つ記録

### 疑問点（後で調べる）
- Server Component と Client Component の使い分け基準は？
- Prisma の `select` と `include` の違いは？
```

---

### Cursor に「先生役」をさせるプロンプト

```
あなたは、Next.js と TypeScript の専門家であり、親切なメンターです。

私の目標は：
1. 本プロジェクトを完成させること
2. AI 駆動開発、Next.js、TypeScript、Git のスキルを習得すること

以下のルールで対応してください：

1. コードを生成する際は、必ず「なぜこの書き方をするのか」を解説してください
2. 私が理解していない概念は、初心者にもわかるように例えを使って説明してください
3. エラーが発生した際は、原因と修正方法を説明し、今後同じミスを防ぐためのアドバイスもください
4. 重要な判断（設計、アーキテクチャ）は、私に選択肢を示して考えさせてください
5. 毎日、その日の学習内容をまとめて、復習しやすい形式で提示してください

では、プロジェクトを始めましょう。
```

---

## 機能要件（Phase 別）

### Phase 1（シルバーウィーク：2-3 日）

| 機能 ID | 機能名 | 説明 | 優先度 |
|---|---|---|---|
| F1.1 | ポートフォリオ登録 | 銘柄、株数、取得単価、カテゴリを手動入力 | 🔴 Must |
| F1.2 | ポートフォリオ一覧表示 | 登録済み資産のリスト表示（銘柄、株数、取得単価、評価額、損益率） | 🔴 Must |
| F1.3 | ポートフォリオ編集・削除 | 登録済み資産の修正・削除 | 🔴 Must |
| F1.4 | 月次計画入力 | 給与収入、生活費、その他支出を入力 | 🔴 Must |
| F1.5 | 投資余力の自動計算 | 給与 - 生活費 - その他支出 = 投資余力を自動計算 | 🔴 Must |
| F1.6 | ダッシュボード表示 | 総資産、今月の投資余力、資産配分（円グラフ）を表示 | 🔴 Must |
| F1.7 | レスポンシブ UI | PC とスマホの両方で正常に表示・操作可能 | 🔴 Must |
| F1.8 | データ永続化 | Prisma＋SQLite（開発）、Neon（本番）で保存 | 🔴 Must |

### Phase 2（1-2 ヶ月後）

| 機能 ID | 機能名 | 説明 | 優先度 |
|---|---|---|---|
| F2.1 | 株価 API 連携 | yfinance または Alpha Vantage で現在価格を自動取得 | 🟡 Want |
| F2.2 | 評価損益の自動計算 | 現在価格に基づき評価額・損益率を自動更新 | 🟡 Want |
| F2.3 | アラートルール設定 | 損切り、買い増し、リバランスのルールを設定可能 | 🟡 Want |
| F2.4 | ルール評価エンジン | 設定されたルールに基づき通知を自動生成 | 🟡 Want |
| F2.5 | 通知機能（LINE/Slack） | LINE Notify または Slack Webhook で通知 | 🟡 Want |
| F2.6 | テクニカル指標表示 | 移動平均線、RSI を表示（参考情報） | 🟢 Nice to have |
| F2.7 | ニュース収集（Perplexity API） | 経済ニュース、企業決算、金融政策を自動収集 | 🟡 Want |

### Phase 3（3 ヶ月後〜）

| 機能 ID | 機能名 | 説明 | 優先度 |
|---|---|---|---|
| F3.1 | リスクプロファイル設定 | 利用者のリスク許容度（保守的・中立的・積極的）を設定 | 🟡 Want |
| F3.2 | AI 推薦エンジン | Claude API で投資推薦を生成（ニュース分析＋ルールベース） | 🟡 Want |
| F3.3 | 推薦履歴の保存 | 過去の推薦と利用者の判断（実行/却下）を記録 | 🟢 Nice to have |
| F3.4 | PWA 化 | ホーム画面に追加、オフライン対応 | 🟢 Nice to have |
| F3.5 | 認証機能 | Clerk または NextAuth でユーザー管理 | 🟢 Nice to have |
| F3.6 | バックテスト機能 | 過去データで戦略別パフォーマンスをシミュレーション | 🟢 Nice to have |
| F3.7 | 戦略別パフォーマンス比較 | AI 自動 vs 人間判断 vs ルールベースの成績を可視化 | 🟢 Nice to have |

---

## 非機能要件

### パフォーマンス

```
- 初回ページ表示：3 秒以内
- API レスポンス：500ms 以内
- モバイルでの操作性：タップターゲット 48px 以上
```

### セキュリティ

```
- 環境変数は .env.local で管理し、Git にコミットしない
- 本番環境（Vercel）では Environment Variables で設定
- 機密情報（API キー、DB 接続文字列）はハードコードしない
- HTTPS のみで通信（Vercel が自動対応）
```

### 可用性

```
- 開発環境：ローカルで動作すれば OK
- 本番環境：Vercel の無料枠（月 100GB バンド幅）で十分
- DB：Neon の無料枠（月 500MB、0.5 CU）
```

### 拡張性

```
- 認証機能は後から追加可能（userId フィールドを预留）
- DB は SQLite → Neon（PostgreSQL）へ移行可能
- モノリス構成（1 つの Next.js アプリ）で開始
```

---

## 技術スタック

### フロントエンド

```
- Next.js 14（App Router）
- TypeScript
- Tailwind CSS
- shadcn/ui（コンポーネントライブラリ）
```

### バックエンド

```
- Next.js API Routes（Server Actions）
- Prisma（ORM）
- SQLite（開発）、Neon（本番）
```

### デプロイ

```
- Vercel（ホスティング）
- GitHub（バージョン管理）
```

### 外部 API（Phase 2-3）

```
- yfinance（株価取得、無料）
- LINE Notify（通知、無料）
- Anthropic API（AI 推薦、従量課金）
- Perplexity API（ニュース収集、月 1,000 リクエスト無料）
- NewsAPI（ニュース取得、月 100 リクエスト無料）
```

### 開発ツール

```
- Cursor（AI コードエディタ）
- v0.dev（UI 生成）
- GitHub（コード管理）
- Vercel CLI（デプロイ）
```

---

## データモデル

### Prisma スキーマ（Phase 1）

```prisma
// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model Portfolio {
  id        String   @id @default(uuid())
  ticker    String   // "IBM", "1306.T", "VOO"
  shares    Float    // 保有株数
  avgCost   Float    // 平均取得単価
  category  String   // "ESPP", "GENERAL", "NISA", "IDECO"
  note      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model MonthlyPlan {
  id              String   @id @default(uuid())
  yearMonth       String   // "2026-09"
  salary          Float    // 給与収入
  livingExpenses  Float    // 生活費
  otherExpenses   Float    // その他支出
  investmentCap   Float    // 投資余力（計算値）
  note            String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}

// Phase 2 以降で追加
model AlertRule {
  id              String   @id @default(uuid())
  ruleType        String   // "STOP_LOSS", "BUY_TRIGGER", "REBALANCE"
  ticker          String
  threshold       Float
  thresholdType   String   // "PERCENT", "ABSOLUTE"
  action          String   // "NOTIFY", "RECOMMEND"
  messageTemplate String?
  isActive        Boolean  @default(true)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}

model RiskProfile {
  id                String   @id @default(uuid())
  riskTolerance     String   // "CONSERVATIVE", "MODERATE", "AGGRESSIVE"
  maxLossTolerance  Float    // -0.05, -0.10, -0.20
  investmentHorizon String   // "SHORT", "MEDIUM", "LONG"
  investmentGoal    String   // "RETIREMENT", "HOUSE", "EDUCATION", "GROWTH", "INCOME"
  targetStocks      Float    // 0.6
  targetBonds       Float    // 0.3
  targetCash        Float    // 0.1
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
}

// Phase 3: ニュース収集
model NewsDigest {
  id        String   @id @default(uuid())
  date      DateTime @default(now())
  items     Json     // 収集したニュース一覧
  summary   String?  // AI による要約（後で生成）
  sentiment String?  // 全体センチメント（BULLISH/BEARISH/NEUTRAL）
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Phase 3: AI 推薦履歴
model AIRecommendation {
  id            String   @id @default(uuid())
  timestamp     DateTime @default(now())
  ticker        String
  action        String   // "BUY", "SELL", "HOLD"
  amount        Float?
  reason        String   // AI 生成の理由
  confidence    Float    // 0-1
  marketContext String   // 当時の市場状況（ニュース要約など）
}

// Phase 3: 人間の判断履歴
model HumanDecision {
  id                String   @id @default(uuid())
  recommendationId  String   // AIRecommendation への参照
  decision          String   // "EXECUTE", "REJECT"
  executedAt        DateTime?
  executedAmount    Float?
  executedPrice     Float?
  note              String?  // 人間の判断理由
  createdAt         DateTime @default(now())
}

// Phase 3: 取引履歴
model Trade {
  id            String   @id @default(uuid())
  ticker        String
  action        String   // "BUY", "SELL"
  shares        Float
  price         Float
  amount        Float    // 合計金額
  timestamp     DateTime @default(now())
  isAuto        Boolean  // 自動実行か手動か
  recommendationId String? // AIRecommendation への参照（あれば）
}

// Phase 3: ポートフォリオ評価履歴
model PortfolioSnapshot {
  id            String   @id @default(uuid())
  date          DateTime @default(now())
  totalValue    Float    // 総資産評価額
  cash          Float    // 現金残高
  positions     Json     // 各銘柄の保有状況
  dailyReturn   Float    // 前日比リターン
}

// Phase 3: 戦略別パフォーマンス集計
model StrategyPerformance {
  id            String   @id @default(uuid())
  strategyName  String   // "AI_AUTO", "HUMAN_HYBRID", "RULE_BASED"
  startDate     DateTime
  endDate       DateTime
  initialCapital Float
  finalCapital  Float
  totalReturn   Float    // 総リターン（%）
  sharpeRatio   Float?   // シャープレシオ
  maxDrawdown   Float?   // 最大ドローダウン
  winRate       Float?   // 勝率（%）
  profitLossRatio Float? // 損益比率
  tradeCount    Int      // 取引回数
}
```

---

## UI/UX 設計方針

### 画面構成

```
app/
├── page.tsx                  # ダッシュボード
├── portfolio/
│   ├── page.tsx              # ポートフォリオ一覧
│   ├── new/page.tsx          # 新規追加
│   └── [id]/edit/page.tsx    # 編集
├── monthly-plan/
│   ├── page.tsx              # 月次計画一覧
│   └── new/page.tsx          # 新規作成
├── settings/
│   ├── page.tsx              # 設定トップ
│   ├── rules/page.tsx        # アラートルール設定
│   └── risk-profile/page.tsx # リスクプロファイル設定
├── performance/
│   └── page.tsx              # 戦略別パフォーマンス比較
├── news/
│   └── page.tsx              # ニュースダッシュボード
└── api/
    ├── portfolio/
    ├── monthly-plan/
    ├── news/
    └── recommendations/
```

### デザイン原則

```
1. レスポンシブファースト
   - PC: 3 カラムグリッド
   - スマホ：1 カラム、タップターゲット 48px 以上

2. shadcn/ui を活用
   - Card, Button, Input, Table, Dialog を使用
   - Tailwind でカスタマイズ

3. v0.dev で UI 生成
   - プロンプトで「Investment portfolio dashboard with shadcn/ui」と指示
   - 生成コードをコピーして Cursor でロジック接続

4. 日本語 UI
   - 全てのラベル・メッセージを日本語化
   - 通貨表示は `toLocaleString('ja-JP')`
```

### 主要画面のワイヤーフレーム（v0.dev プロンプト用）

#### ダッシュボード

```
Create a responsive investment portfolio dashboard with:
- Header with navigation (Dashboard, Portfolio, Monthly Plan, Settings, News, Performance)
- Total portfolio value card (large number with percentage change)
- Monthly investment capacity card (salary - expenses)
- Asset allocation pie chart (Stocks, Bonds, Cash)
- Recent portfolio changes list
- Quick action buttons (Add Asset, Update Monthly Plan)

Use Next.js 14 App Router, Tailwind CSS, and shadcn/ui components.
Make it fully responsive for mobile and desktop.
```

#### ポートフォリオ一覧

```
Portfolio management page with:
- Data table showing ticker, shares, avg cost, current price, gain/loss %
- Search and filter by category (ESPP, NISA, General)
- Add new asset button (opens dialog)
- Edit and delete actions for each row
- Pagination for large portfolios

Responsive table, shadcn/ui, Next.js 14, Japanese labels.
```

#### 月次計画

```
Monthly investment planning form with:
- Input fields: salary, living expenses, other expenses
- Auto-calculated investment capacity (salary - expenses)
- Month selector (2026-09, 2026-10, etc.)
- Save button with success toast
- Historical monthly plans table below the form

Clean form design, shadcn/ui, responsive, Japanese labels.
```

#### ニュースダッシュボード

```
News dashboard for investment analysis with:
- Filter by category (Earnings, Economic Indicators, Monetary Policy, Geopolitics, Industry Trends)
- Date range selector
- News list with headline, summary, sentiment badge (BULLISH/BEARISH/NEUTRAL)
- Click to expand full content with citations
- "Analyze for investment implications" button

Clean, readable layout, shadcn/ui, Next.js 14, Japanese labels.
```

#### 戦略別パフォーマンス比較

```
Strategy performance comparison dashboard with:
- Summary cards: Total Return, Sharpe Ratio, Max Drawdown, Win Rate
- Comparison table: AI Auto vs Human Hybrid vs Rule-Based
- Equity curve chart (line chart comparing 3 strategies over time)
- Monthly returns bar chart (side-by-side comparison)
- Trade statistics (number of trades, avg holding period)

Professional financial dashboard style, shadcn/ui, Next.js 14.
```

---

## 開発フローと進め方

### 全体スケジュール

| 日付 | 目標 | 成果物 |
|---|---|---|
| **9/19（土）** | プロジェクトセットアップ、Prisma スキーマ完成 | `schema.prisma`, DB 作成済み |
| **9/20（日）** | API ルート＋shadcn/ui 導入 | `app/api/portfolio/*`, UI コンポーネント |
| **9/21（月・祝）** | ダッシュボード＋ポートフォリオ一覧画面 | `app/page.tsx`, `app/portfolio/page.tsx` |
| **9/22（火）** | 月次計画画面、投資余力計算 | `app/monthly-plan/page.tsx` |
| **9/23（水）** | Vercel デプロイ、スマホでアクセス確認 | 公開 URL 完成 |

### 1 日の開発フロー

```
1. 朝（30 分）
   - 前日の進捗確認
   - その日のタスクを Trello/GitHub Projects で整理

2. 開発（2-3 時間 × 2-3 セット）
   - Cursor で AI に指示 → コード生成 → 実行確認
   - エラーが出たら、エラーメッセージを AI に貼り付けて修正

3. 夕（30 分）
   - GitHub にコミット＆プッシュ
   - 翌日のタスクを整理
   - 開発ログを docs/development-log.md に記録
```

### Cursor への指示の出し方

```
1. 要件定義書を最初に渡す
   "以下の要件定義書に基づいて、Next.js アプリを開発してください。
   [ここに要件定義書を貼り付け]"

2. 段階的に指示
   "まずは Prisma スキーマを作成してください"
   "次に、Portfolio モデルの API ルートを作成してください"
   "shadcn/ui の Card コンポーネントを使って、ポートフォリオ一覧画面を作成してください"

3. エラー対応
   "以下のエラーが発生しました。修正方法を教えてください。
   [エラーメッセージを貼り付け]"
```

### Git コミットメッセージの規約

```
feat: 新機能（例：feat: ポートフォリオ CRUD 実装）
fix: バグ修正（例：fix: 投資余力計算のバグ修正）
docs: ドキュメント（例：docs: 要件定義書追加）
style: フォーマット（例：style: Prettier でフォーマット）
refactor: リファクタリング（例：refactor: API ルートを整理）
```

---

## リスクと対策

### 技術リスク

| リスク | 影響度 | 確率 | 対策 |
|---|---|---|---|
| Prisma のマイグレーション失敗 | 高 | 中 | `npx prisma migrate reset` でリセット可能 |
| shadcn/ui コンポーネント不足 | 低 | 中 | `npx shadcn-ui@latest add [component]` で追加 |
| Vercel デプロイエラー | 中 | 低 | エラーログを確認、環境変数を再設定 |
| API レート制限超過 | 中 | 低 | 使用量を監視、キャッシュを活用 |

### スケジュールリスク

| リスク | 影響度 | 確率 | 対策 |
|---|---|---|---|
| 機能が膨らんで完了しない | 高 | 高 | Must 要件に絞る、Want は Phase 2 以降 |
| AI 生成コードの品質が低い | 中 | 中 | v0.dev で UI 生成、Cursor でロジック接続 |
| スマホでの表示崩れ | 中 | 中 | Chrome DevTools で随時確認 |

---

## 免責事項

```
本アプリは投資判断の支援を目的としていますが、投資助言または推奨を行うものではありません。

表示される通知・推薦は、利用者が設定したルールに基づいて自動生成されたものであり、
その正確性・有用性を保証するものではありません。

全ての投資判断は利用者自身の責任で行ってください。
本アプリの使用により生じたいかなる損失についても、開発者は責任を負いません。
```

---

## 参考リソース

### 学習資料

```
【Next.js】
- 公式ドキュメント：https://nextjs.org/docs
- Next.js 14 App Router チュートリアル

【TypeScript】
- 公式ドキュメント：https://www.typescriptlang.org/docs/
- TypeScript 入門：https://typescriptbook.jp/

【Prisma】
- 公式ドキュメント：https://www.prisma.io/docs
- Prisma スキーマリファレンス

【Git】
- Git 公式：https://git-scm.com/doc
- Pro Git（無料書籍）：https://git-scm.com/book/ja/v2

【Cursor】
- 公式ドキュメント：https://docs.cursor.com/
- Cursor 活用ブログ記事
```

### 質問する際のテンプレート

```
【概念理解】
[概念名] について教えてください。
- 初心者にもわかる説明
- 実際の使用例
- よくある間違い

【コードレビュー】
以下のコードの問題点を教えてください。
[コード]
- ベストプラクトイスに則しているか？
- より良い書き方はあるか？
- セキュリティ上の懸念は？

【エラー対応】
以下のエラーが発生しました。
[エラーメッセージ]
- 原因は何ですか？
- 修正方法を教えてください
- 今後同じミスを防ぐには？
```

---

## まとめ：学習プロジェクトとしての位置付け

```
本プロジェクトは、以下の 2 つの目標を同時に達成することを目指します：

1. 実用アプリの完成
   - ポートフォリオ管理＋投資余力計算
   - Vercel にデプロイして運用可能

2. スキル習得
   - AI 駆動開発（Cursor の効果的な活用）
   - Web アプリ開発（Next.js, TypeScript, Prisma）
   - バージョン管理（Git, GitHub）
   - クラウドデプロイ（Vercel）

「AI に作らせる」だけでなく、「AI から学ぶ」姿勢で、
各工程で「なぜこの書き方をするのか」を理解しながら進めます。
```

---

## Perplexity API 活用：ニュース収集の自動化

### 概要

Perplexity Pro のニュース検索機能を API で活用し、投資判断に必要な情報を自動的に収集・要約します。

### 利用シナリオ

```
【朝のルーティン（自動）】
- 毎朝 9 時に経済ニュース、企業決算、金融政策を自動収集
- AI が投資判断に役立つ形で要約
- ダッシュボードに「今日の注目ニュース」として表示

【重要なイベント時（自動）】
- 日銀会合、FOMC、CPI 発表などの重要イベントを監視
- 発表直後に結果を自動収集・要約
- 影響を受けるセクターを AI が分析

【ユーザーのリクエスト（手動）】
- 「IBM の最新決算を教えて」と検索
- Perplexity API で最新情報を取得
- 投資への示唆を AI が追加
```

### 技術実装

#### API エンドポイント

```typescript
// lib/perplexityApi.ts

interface PerplexityResponse {
  id: string;
  model: string;
  choices: {
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }[];
  citations?: string[]; // ソース URL
}

export async function searchNews(query: string): Promise<PerplexityResponse> {
  const response = await fetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'llama-3.1-sonar-small-128k-online', // ニュース検索モデル
      messages: [
        {
          role: 'system',
          content: 'You are a financial news analyst. Provide accurate, up-to-date information with citations.'
        },
        {
          role: 'user',
          content: query
        }
      ],
      temperature: 0.2, // 事実重視、創造性を抑える
      top_p: 0.9,
      return_citations: true // ソース URL を含める
    })
  });

  return response.json();
}
```

#### 自動ニュース収集スケジュール

```typescript
// lib/newsScheduler.ts

const newsCategories = [
  {
    name: '企業決算',
    queries: [
      'IBM latest earnings report Q3 2026 revenue EPS guidance',
      'TOPI constituent companies earnings this week'
    ]
  },
  {
    name: '経済指標',
    queries: [
      'US CPI inflation rate September 2026 latest data',
      'US nonfarm payrolls employment report latest',
      'Japan GDP quarterly report latest'
    ]
  },
  {
    name: '金融政策',
    queries: [
      'Federal Reserve FOMC meeting latest decision interest rate',
      'Bank of Japan monetary policy meeting latest decision'
    ]
  },
  {
    name: '地政学リスク',
    queries: [
      'Middle East tension latest oil price impact',
      'US China trade relations latest developments'
    ]
  },
  {
    name: '業界動向',
    queries: [
      'technology sector trends AI semiconductor latest',
      'financial sector trends banks interest rates latest'
    ]
  }
];

// 毎日朝 9 時に実行（cron で）
export async function collectDailyNews() {
  const collectedNews: { category: string; query: string; content: string; citations: string[] }[] = [];

  for (const category of newsCategories) {
    for (const query of category.queries) {
      try {
        const response = await searchNews(query);
        collectedNews.push({
          category: category.name,
          query,
          content: response.choices[0].message.content,
          citations: response.citations || []
        });

        // API レート制限対策（1 秒待機）
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`Failed to fetch news for query: ${query}`, error);
      }
    }
  }

  // データベースに保存
  await db.newsDigest.create({
    data: {
      date: new Date(),
      items: collectedNews
    }
  });

  return collectedNews;
}
```

#### ニュースの解釈と投資判断への統合

```typescript
// lib/newsInterpretation.ts

interface NewsInterpretation {
  sentiment: 'BULLISH' | 'BEARISH' | 'NEUTRAL';
  keyThemes: string[];
  impactSectors: string[];
  investmentImplications: string[];
  summary: string;
}

export async function interpretNews(newsItems: any[]): Promise<NewsInterpretation> {
  const prompt = `
    あなたは、金融ニュースを分析する AI アシスタントです。
    
    以下のニュースを分析し、投資判断に役立つ形で要約してください。
    
    【ニュース】
    ${newsItems.map(item => `
      カテゴリ: ${item.category}
      検索クエリ: ${item.query}
      内容: ${item.content}
      ソース: ${item.citations.join(', ')}
    `).join('\n')}
    
    【出力形式】
    {
      "sentiment": "BULLISH" | "BEARISH" | "NEUTRAL",
      "keyThemes": ["利上げ", "円安", "輸出企業"],
      "impactSectors": ["銀行", "自動車", "電機"],
      "investmentImplications": [
        "銀行株：利ザヤ拡大で追い風",
        "輸出企業：円安で競争力向上"
      ],
      "summary": "日銀は利上げを見送り、円安基調が継続すると予想..."
    }
  `;

  const response = await client.messages.create({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }]
  });

  return JSON.parse(response.content[0].text);
}
```

### 実装プラン

#### Phase 1（シルバーウィーク後）

- [ ] Perplexity Pro で手動ニュース収集
- [ ] 収集したニュースを AI 推薦に手動で貼り付け
- [ ] ニュース解釈のテンプレートを作成

#### Phase 2（1-2 ヶ月後）

- [ ] Perplexity API キーの取得（https://www.perplexity.ai/settings/api）
- [ ] 自動ニュース収集スクリプトの実装
- [ ] ニュース解釈 AI の実装
- [ ] 投資推薦への統合
- [ ] ニュースダッシュボード画面の作成

#### Phase 3（3 ヶ月後〜）

- [ ] 毎日朝 9 時の自動収集（cron）
- [ ] 過去ニュースの蓄積・分析
- [ ] センチメント分析の精度向上

### コスト感

| サービス | プラン | 価格 | 投資エージェントでの使用量 | 月額費用 |
|---|---|---|---|---|
| **Perplexity Pro** | 既存契約 | $20/月 | 投資以外でも使用 | $0（追加費用なし） |
| **Perplexity API** | Free | $0/月 | 1 日 3 回×30 日 = 90 リクエスト | $0（Free プラン内） |
| **Anthropic API** | 従量課金 | - | 1 日 1 回推薦生成 | $1-2/月（約 150-300 円） |

**合計**: **月額 300 円程度**（Perplexity Pro は既存契約）

### API レート制限

```
Perplexity API Free プラン:
- 月 1,000 リクエスト
- 1 分間 10 リクエスト

投資エージェントでの使用量:
- 1 日 3 回（朝・昼・晩）× 5 カテゴリ = 15 リクエスト/日
- 15 × 30 = 450 リクエスト/月
- **Free プランで十分**
```

### 注意点

```
【ニュースの鮮度】
- Perplexity のニュース検索は「オンライン」モードで最新情報を取得
- ただし、リアルタイムではない（数分〜数時間の遅延）
- 超短期トレードには向かない、中长期投資には十分

【情報の正確性】
- AI 生成の要約は、必ずソース URL で確認する
- 重要な判断（損切り、利確）は、複数のソースでクロスチェック
- AI は「要約・解釈」のみ、「事実」はソースで確認
```

---

## Cursor への初期プロンプト

```
あなたは、Next.js と TypeScript の専門家であり、親切なメンターです。

私の目標は：
1. 本プロジェクトを完成させること
2. AI 駆動開発、Next.js、TypeScript、Git のスキルを習得すること

以下のルールで対応してください：

1. コードを生成する際は、必ず「なぜこの書き方をするのか」を解説してください
2. 私が理解していない概念は、初心者にもわかるように例えを使って説明してください
3. エラーが発生した際は、原因と修正方法を説明し、今後同じミスを防ぐためのアドバイスもください
4. 重要な判断（設計、アーキテクチャ）は、私に選択肢を示して考えさせてください
5. 毎日、その日の学習内容をまとめて、復習しやすい形式で提示してください

では、プロジェクトを始めましょう。

まずは、プロジェクトのセットアップと Prisma スキーマの作成から始めてください。
```