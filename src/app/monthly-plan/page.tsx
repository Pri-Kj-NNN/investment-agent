import { prisma } from "@/lib/prisma";
import { formatCurrency } from "@/lib/format";
import { formatYearMonth } from "@/lib/monthly-plan";

export const dynamic = "force-dynamic";
import { SiteHeader } from "@/components/site-header";
import { MonthlyPlanDeleteButton } from "@/components/monthly-plan-delete-button";
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

function getCurrentYearMonth(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

export default async function MonthlyPlanPage() {
  const plans = await prisma.monthlyPlan.findMany({
    orderBy: { yearMonth: "desc" },
  });

  const currentYearMonth = getCurrentYearMonth();
  const currentPlan = plans.find((plan) => plan.yearMonth === currentYearMonth);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-5xl flex-col gap-6 p-4 md:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">月次計画</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              給与と支出から投資余力を管理
            </p>
          </div>
          <ButtonLink href="/monthly-plan/new">計画を追加</ButtonLink>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>今月の投資余力</CardTitle>
            <CardDescription>
              {formatYearMonth(currentYearMonth)} の計画
            </CardDescription>
          </CardHeader>
          <CardContent>
            {currentPlan ? (
              <div className="space-y-2">
                <p className="text-3xl font-bold">
                  {formatCurrency(currentPlan.investmentCap)}
                </p>
                <p className="text-sm text-muted-foreground">
                  給与 {formatCurrency(currentPlan.salary)} − 生活費{" "}
                  {formatCurrency(currentPlan.livingExpenses)} − その他{" "}
                  {formatCurrency(currentPlan.otherExpenses)}
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <p className="text-muted-foreground">
                  今月の計画がまだ登録されていません
                </p>
                <ButtonLink href="/monthly-plan/new">
                  今月の計画を登録
                </ButtonLink>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>月次計画一覧</CardTitle>
            <CardDescription>{plans.length} 件</CardDescription>
          </CardHeader>
          <CardContent>
            {plans.length === 0 ? (
              <p className="py-8 text-center text-muted-foreground">
                まだ月次計画が登録されていません
              </p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>対象月</TableHead>
                    <TableHead>給与</TableHead>
                    <TableHead>生活費</TableHead>
                    <TableHead>その他</TableHead>
                    <TableHead>投資余力</TableHead>
                    <TableHead className="text-right">操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {plans.map((plan) => (
                    <TableRow key={plan.id}>
                      <TableCell className="font-medium">
                        {formatYearMonth(plan.yearMonth)}
                      </TableCell>
                      <TableCell>{formatCurrency(plan.salary)}</TableCell>
                      <TableCell>
                        {formatCurrency(plan.livingExpenses)}
                      </TableCell>
                      <TableCell>{formatCurrency(plan.otherExpenses)}</TableCell>
                      <TableCell className="font-medium">
                        {formatCurrency(plan.investmentCap)}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <ButtonLink
                            href={`/monthly-plan/${plan.id}/edit`}
                            variant="outline"
                            size="sm"
                          >
                            編集
                          </ButtonLink>
                          <MonthlyPlanDeleteButton
                            id={plan.id}
                            yearMonth={plan.yearMonth}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </>
  );
}
