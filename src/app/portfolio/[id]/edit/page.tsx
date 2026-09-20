import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
import { SiteHeader } from "@/components/site-header";
import { PortfolioForm } from "@/components/portfolio-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type EditPortfolioPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditPortfolioPage({
  params,
}: EditPortfolioPageProps) {
  const { id } = await params;

  const portfolio = await prisma.portfolio.findUnique({
    where: { id },
  });

  if (!portfolio) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-2xl flex-col gap-6 p-4 md:p-8">
        <div>
          <h1 className="text-3xl font-bold">銘柄を編集</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {portfolio.ticker} の情報を更新します
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>編集</CardTitle>
            <CardDescription>
              変更後に「更新」を押すと REST API 経由で保存されます
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PortfolioForm mode="edit" initialData={portfolio} />
          </CardContent>
        </Card>
      </main>
    </>
  );
}
