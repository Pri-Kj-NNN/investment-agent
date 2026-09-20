import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatYearMonth } from "@/lib/monthly-plan";

export const dynamic = "force-dynamic";
import { SiteHeader } from "@/components/site-header";
import { MonthlyPlanForm } from "@/components/monthly-plan-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type EditMonthlyPlanPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditMonthlyPlanPage({
  params,
}: EditMonthlyPlanPageProps) {
  const { id } = await params;

  const plan = await prisma.monthlyPlan.findUnique({
    where: { id },
  });

  if (!plan) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-2xl flex-col gap-6 p-4 md:p-8">
        <div>
          <h1 className="text-3xl font-bold">月次計画を編集</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {formatYearMonth(plan.yearMonth)} の計画を更新します
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>編集</CardTitle>
            <CardDescription>
              保存時に投資余力が再計算されます
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MonthlyPlanForm mode="edit" initialData={plan} />
          </CardContent>
        </Card>
      </main>
    </>
  );
}
