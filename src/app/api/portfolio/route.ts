import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validatePortfolioInput } from "@/lib/portfolio";

// GET /api/portfolio — ポートフォリオ一覧を取得
export async function GET() {
  try {
    const portfolios = await prisma.portfolio.findMany({
      orderBy: { updatedAt: "desc" },
    });

    return NextResponse.json({ data: portfolios });
  } catch (error) {
    console.error("GET /api/portfolio failed:", error);
    return NextResponse.json(
      { error: "ポートフォリオの取得に失敗しました" },
      { status: 500 }
    );
  }
}

// POST /api/portfolio — 新しい銘柄を登録
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validatePortfolioInput(body);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const portfolio = await prisma.portfolio.create({
      data: result.data,
    });

    return NextResponse.json({ data: portfolio }, { status: 201 });
  } catch (error) {
    console.error("POST /api/portfolio failed:", error);
    return NextResponse.json(
      { error: "ポートフォリオの登録に失敗しました" },
      { status: 500 }
    );
  }
}
