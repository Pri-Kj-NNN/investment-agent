// ポートフォリオ API で使う型と入力チェック

export const PORTFOLIO_CATEGORIES = [
  "ESPP",
  "GENERAL",
  "NISA",
  "IDECO",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export const PORTFOLIO_CATEGORY_LABELS: Record<PortfolioCategory, string> = {
  ESPP: "社員持株",
  GENERAL: "一般",
  NISA: "新NISA",
  IDECO: "iDeCo",
};

export type PortfolioInput = {
  ticker: string;
  shares: number;
  avgCost: number;
  category: PortfolioCategory;
  note?: string | null;
};

type ValidationResult =
  | { success: true; data: PortfolioInput }
  | { success: false; error: string };

function isPortfolioCategory(value: string): value is PortfolioCategory {
  return PORTFOLIO_CATEGORIES.includes(value as PortfolioCategory);
}

// API から届いた JSON をチェックする
export function validatePortfolioInput(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { success: false, error: "リクエストの形式が正しくありません" };
  }

  const { ticker, shares, avgCost, category, note } = body as Record<
    string,
    unknown
  >;

  if (typeof ticker !== "string" || ticker.trim() === "") {
    return { success: false, error: "銘柄コード（ticker）は必須です" };
  }

  if (typeof shares !== "number" || shares <= 0) {
    return { success: false, error: "保有株数（shares）は0より大きい数値で入力してください" };
  }

  if (typeof avgCost !== "number" || avgCost <= 0) {
    return {
      success: false,
      error: "平均取得単価（avgCost）は0より大きい数値で入力してください",
    };
  }

  if (typeof category !== "string" || !isPortfolioCategory(category)) {
    return {
      success: false,
      error: "カテゴリ（category）は ESPP, GENERAL, NISA, IDECO のいずれかを指定してください",
    };
  }

  if (note !== undefined && note !== null && typeof note !== "string") {
    return { success: false, error: "メモ（note）は文字列で入力してください" };
  }

  return {
    success: true,
    data: {
      ticker: ticker.trim(),
      shares,
      avgCost,
      category,
      note: typeof note === "string" && note.trim() !== "" ? note.trim() : null,
    },
  };
}
