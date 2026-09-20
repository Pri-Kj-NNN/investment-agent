"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type PortfolioDeleteButtonProps = {
  id: string;
  ticker: string;
};

export function PortfolioDeleteButton({
  id,
  ticker,
}: PortfolioDeleteButtonProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(`${ticker} を削除しますか？`);
    if (!confirmed) return;

    setIsDeleting(true);

    try {
      const response = await fetch(`/api/portfolio/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const result = await response.json();
        window.alert(result.error ?? "削除に失敗しました");
        return;
      }

      router.refresh();
    } catch {
      window.alert("通信エラーが発生しました");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <Button
      variant="destructive"
      size="sm"
      onClick={handleDelete}
      disabled={isDeleting}
    >
      {isDeleting ? "削除中..." : "削除"}
    </Button>
  );
}
