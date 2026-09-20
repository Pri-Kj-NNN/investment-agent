import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
import { formatCurrency, formatNumber } from "@/lib/format";
import { PORTFOLIO_CATEGORY_LABELS } from "@/lib/portfolio";
import { SiteHeader } from "@/components/site-header";
import { PortfolioDeleteButton } from "@/components/portfolio-delete-button";
import { ButtonLink } from "@/components/ui/button-link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function PortfolioPage() {
  const portfolios = await prisma.portfolio.findMany({
    orderBy: { updatedAt: "desc" },
  });

  const totalCost = portfolios.reduce(
    (sum, item) => sum + item.shares * item.avgCost,
    0
  );

  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-5xl flex-col gap-6 p-4 md:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">ポートフォリオ</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              保有銘柄の一覧と管理
            </p>
          </div>
          <ButtonLink href="/portfolio/new">銘柄を追加</ButtonLink>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>取得総額</CardTitle>
            <CardDescription>
              評価額・損益率は Phase 2 の株価連携後に表示します
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{formatCurrency(totalCost)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>保有銘柄</CardTitle>
            <CardDescription>{portfolios.length} 件</CardDescription>
          </CardHeader>
          <CardContent>
            {portfolios.length === 0 ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <p className="text-muted-foreground">
                  まだ銘柄が登録されていません
                </p>
                <ButtonLink href="/portfolio/new">最初の銘柄を登録</ButtonLink>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>銘柄</TableHead>
                    <TableHead>カテゴリ</TableHead>
                    <TableHead>株数</TableHead>
                    <TableHead>取得単価</TableHead>
                    <TableHead>取得総額</TableHead>
                    <TableHead className="text-right">操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {portfolios.map((portfolio) => {
                    const costBasis = portfolio.shares * portfolio.avgCost;

                    return (
                      <TableRow key={portfolio.id}>
                        <TableCell className="font-medium">
                          {portfolio.ticker}
                        </TableCell>
                        <TableCell>
                          {PORTFOLIO_CATEGORY_LABELS[
                            portfolio.category as keyof typeof PORTFOLIO_CATEGORY_LABELS
                          ] ?? portfolio.category}
                        </TableCell>
                        <TableCell>{formatNumber(portfolio.shares)}</TableCell>
                        <TableCell>{formatCurrency(portfolio.avgCost)}</TableCell>
                        <TableCell>{formatCurrency(costBasis)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <ButtonLink
                              href={`/portfolio/${portfolio.id}/edit`}
                              variant="outline"
                              size="sm"
                            >
                              編集
                            </ButtonLink>
                            <PortfolioDeleteButton
                              id={portfolio.id}
                              ticker={portfolio.ticker}
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </>
  );
}
