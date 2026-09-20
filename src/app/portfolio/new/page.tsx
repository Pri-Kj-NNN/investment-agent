import { SiteHeader } from "@/components/site-header";
import { PortfolioForm } from "@/components/portfolio-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NewPortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-2xl flex-col gap-6 p-4 md:p-8">
        <div>
          <h1 className="text-3xl font-bold">銘柄を追加</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            保有銘柄の情報を入力してください
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>新規登録</CardTitle>
            <CardDescription>
              銘柄コード、株数、平均取得単価、カテゴリを入力します
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PortfolioForm mode="create" />
          </CardContent>
        </Card>
      </main>
    </>
  );
}
