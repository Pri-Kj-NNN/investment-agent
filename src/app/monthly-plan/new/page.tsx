import { SiteHeader } from "@/components/site-header";
import { MonthlyPlanForm } from "@/components/monthly-plan-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NewMonthlyPlanPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-2xl flex-col gap-6 p-4 md:p-8">
        <div>
          <h1 className="text-3xl font-bold">月次計画を追加</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            給与と支出を入力すると、投資余力が自動計算されます
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>新規登録</CardTitle>
            <CardDescription>
              投資余力 = 給与収入 − 生活費 − その他支出
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MonthlyPlanForm mode="create" />
          </CardContent>
        </Card>
      </main>
    </>
  );
}
