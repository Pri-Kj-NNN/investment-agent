import { prisma } from "@/lib/prisma";
import { formatCurrency } from "@/lib/format";
import { formatYearMonth } from "@/lib/monthly-plan";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const dynamic = "force-dynamic";

function getCurrentYearMonth(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

export default async function Home() {
  const portfolios = await prisma.portfolio.findMany();
  const currentYearMonth = getCurrentYearMonth();
  const currentPlan = await prisma.monthlyPlan.findUnique({
    where: { yearMonth: currentYearMonth },
  });

  const totalCost = portfolios.reduce(
    (sum, item) => sum + item.shares * item.avgCost,
    0
  );

  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-5xl flex-col gap-6 p-4 md:p-8">
        <div>
          <h1 className="text-3xl font-bold">ダッシュボード</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            ポートフォリオと投資余力の概要
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>取得総額</CardTitle>
              <CardDescription>保有銘柄の取得金額合計</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{formatCurrency(totalCost)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>保有銘柄数</CardTitle>
              <CardDescription>登録済みの銘柄数</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{portfolios.length} 件</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>今月の投資余力</CardTitle>
              <CardDescription>
                {formatYearMonth(currentYearMonth)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {currentPlan ? (
                <p className="text-3xl font-bold">
                  {formatCurrency(currentPlan.investmentCap)}
                </p>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">未登録</p>
                  <ButtonLink href="/monthly-plan/new" size="sm">
                    計画を登録
                  </ButtonLink>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>クイックアクション</CardTitle>
            <CardDescription>よく使う操作</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <ButtonLink href="/portfolio">ポートフォリオ一覧</ButtonLink>
            <ButtonLink href="/portfolio/new" variant="outline">
              銘柄を追加
            </ButtonLink>
            <ButtonLink href="/monthly-plan" variant="outline">
              月次計画
            </ButtonLink>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
