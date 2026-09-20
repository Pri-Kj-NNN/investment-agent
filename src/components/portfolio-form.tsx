"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Portfolio } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_CATEGORY_LABELS,
  type PortfolioCategory,
} from "@/lib/portfolio";

type PortfolioFormProps = {
  mode: "create" | "edit";
  initialData?: Portfolio;
};

const selectClassName =
  "h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30";

export function PortfolioForm({ mode, initialData }: PortfolioFormProps) {
  const router = useRouter();
  const [ticker, setTicker] = useState(initialData?.ticker ?? "");
  const [shares, setShares] = useState(
    initialData ? String(initialData.shares) : ""
  );
  const [avgCost, setAvgCost] = useState(
    initialData ? String(initialData.avgCost) : ""
  );
  const [category, setCategory] = useState<PortfolioCategory>(
    (initialData?.category as PortfolioCategory) ?? "GENERAL"
  );
  const [note, setNote] = useState(initialData?.note ?? "");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const payload = {
      ticker,
      shares: Number(shares),
      avgCost: Number(avgCost),
      category,
      note: note.trim() === "" ? null : note.trim(),
    };

    const url =
      mode === "create"
        ? "/api/portfolio"
        : `/api/portfolio/${initialData?.id}`;
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

      router.push("/portfolio");
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
        <label className="text-sm font-medium" htmlFor="ticker">
          銘柄コード
        </label>
        <Input
          id="ticker"
          value={ticker}
          onChange={(event) => setTicker(event.target.value)}
          placeholder="例: 7203.T"
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="shares">
          保有株数
        </label>
        <Input
          id="shares"
          type="number"
          min="0"
          step="any"
          value={shares}
          onChange={(event) => setShares(event.target.value)}
          placeholder="例: 100"
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="avgCost">
          平均取得単価（円）
        </label>
        <Input
          id="avgCost"
          type="number"
          min="0"
          step="any"
          value={avgCost}
          onChange={(event) => setAvgCost(event.target.value)}
          placeholder="例: 2500"
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="category">
          カテゴリ
        </label>
        <select
          id="category"
          className={selectClassName}
          value={category}
          onChange={(event) =>
            setCategory(event.target.value as PortfolioCategory)
          }
        >
          {PORTFOLIO_CATEGORIES.map((value) => (
            <option key={value} value={value}>
              {PORTFOLIO_CATEGORY_LABELS[value]}
            </option>
          ))}
        </select>
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
          onClick={() => router.push("/portfolio")}
        >
          キャンセル
        </Button>
      </div>
    </form>
  );
}
