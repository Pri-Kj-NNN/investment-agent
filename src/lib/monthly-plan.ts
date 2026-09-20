// 月次計画 API で使う型と入力チェック

export type MonthlyPlanInput = {
  yearMonth: string;
  salary: number;
  livingExpenses: number;
  otherExpenses: number;
  investmentCap: number;
  note?: string | null;
};

type ValidationResult =
  | { success: true; data: MonthlyPlanInput }
  | { success: false; error: string };

export function calculateInvestmentCap(
  salary: number,
  livingExpenses: number,
  otherExpenses: number
): number {
  return salary - livingExpenses - otherExpenses;
}

function isValidYearMonth(value: string): boolean {
  return /^\d{4}-\d{2}$/.test(value);
}

export function formatYearMonth(yearMonth: string): string {
  const [year, month] = yearMonth.split("-");
  return `${year}年${Number(month)}月`;
}

export function validateMonthlyPlanInput(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { success: false, error: "リクエストの形式が正しくありません" };
  }

  const { yearMonth, salary, livingExpenses, otherExpenses, note } =
    body as Record<string, unknown>;

  if (typeof yearMonth !== "string" || !isValidYearMonth(yearMonth)) {
    return {
      success: false,
      error: "対象月（yearMonth）は YYYY-MM 形式で入力してください",
    };
  }

  if (typeof salary !== "number" || salary < 0) {
    return {
      success: false,
      error: "給与収入（salary）は0以上の数値で入力してください",
    };
  }

  if (typeof livingExpenses !== "number" || livingExpenses < 0) {
    return {
      success: false,
      error: "生活費（livingExpenses）は0以上の数値で入力してください",
    };
  }

  if (typeof otherExpenses !== "number" || otherExpenses < 0) {
    return {
      success: false,
      error: "その他支出（otherExpenses）は0以上の数値で入力してください",
    };
  }

  if (note !== undefined && note !== null && typeof note !== "string") {
    return { success: false, error: "メモ（note）は文字列で入力してください" };
  }

  const investmentCap = calculateInvestmentCap(
    salary,
    livingExpenses,
    otherExpenses
  );

  return {
    success: true,
    data: {
      yearMonth,
      salary,
      livingExpenses,
      otherExpenses,
      investmentCap,
      note: typeof note === "string" && note.trim() !== "" ? note.trim() : null,
    },
  };
}
