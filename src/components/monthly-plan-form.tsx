"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { MonthlyPlan } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { calculateInvestmentCap, formatYearMonth } from "@/lib/monthly-plan";
import { formatCurrency } from "@/lib/format";

type MonthlyPlanFormProps = {
  mode: "create" | "edit";
  initialData?: MonthlyPlan;
};

function getCurrentYearMonth(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

export function MonthlyPlanForm({ mode, initialData }: MonthlyPlanFormProps) {
  const router = useRouter();
  const [yearMonth, setYearMonth] = useState(
    initialData?.yearMonth ?? getCurrentYearMonth()
  );
  const [salary, setSalary] = useState(
    initialData ? String(initialData.salary) : ""
  );
  const [livingExpenses, setLivingExpenses] = useState(
    initialData ? String(initialData.livingExpenses) : ""
  );
  const [otherExpenses, setOtherExpenses] = useState(
    initialData ? String(initialData.otherExpenses) : ""
  );
  const [note, setNote] = useState(initialData?.note ?? "");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const investmentCap = useMemo(() => {
    const salaryValue = Number(salary);
    const livingValue = Number(livingExpenses);
    const otherValue = Number(otherExpenses);

    if (
      [salary, livingExpenses, otherExpenses].some((value) => value === "") ||
      [salaryValue, livingValue, otherValue].some((value) => Number.isNaN(value))
    ) {
      return null;
    }

    return calculateInvestmentCap(salaryValue, livingValue, otherValue);
  }, [salary, livingExpenses, otherExpenses]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const payload = {
      yearMonth,
      salary: Number(salary),
      livingExpenses: Number(livingExpenses),
      otherExpenses: Number(otherExpenses),
      note: note.trim() === "" ? null : note.trim(),
    };

    const url =
      mode === "create"
        ? "/api/monthly-plan"
        : `/api/monthly-plan/${initialData?.id}`;
    const method = mode === "create" ? "POST" : "PUT";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error ?? "保存に失敗しました");
        return;
      }

      router.push("/monthly-plan");
      router.refresh();
    } catch {
      setError("通信エラーが発生しました");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="yearMonth">
          対象月
        </label>
        <Input
          id="yearMonth"
          type="month"
          value={yearMonth}
          onChange={(event) => setYearMonth(event.target.value)}
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="salary">
          給与収入（円）
        </label>
        <Input
          id="salary"
          type="number"
          min="0"
          step="1"
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
          placeholder="例: 400000"
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="livingExpenses">
          生活費（円）
        </label>
        <Input
          id="livingExpenses"
          type="number"
          min="0"
          step="1"
          value={livingExpenses}
          onChange={(event) => setLivingExpenses(event.target.value)}
          placeholder="例: 250000"
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="otherExpenses">
          その他支出（円）
        </label>
        <Input
          id="otherExpenses"
          type="number"
          min="0"
          step="1"
          value={otherExpenses}
          onChange={(event) => setOtherExpenses(event.target.value)}
          placeholder="例: 50000"
          required
        />
      </div>

      <div className="rounded-lg border bg-muted/50 p-4">
        <p className="text-sm text-muted-foreground">投資余力（自動計算）</p>
        <p className="mt-1 text-2xl font-bold">
          {investmentCap === null
            ? "—"
            : formatCurrency(investmentCap)}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          {formatYearMonth(yearMonth)}：給与 − 生活費 − その他支出
        </p>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="note">
          メモ
        </label>
        <Input
          id="note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="任意"
        />
      </div>

      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "保存中..." : mode === "create" ? "登録" : "更新"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/monthly-plan")}
        >
          キャンセル
        </Button>
      </div>
    </form>
  );
}
