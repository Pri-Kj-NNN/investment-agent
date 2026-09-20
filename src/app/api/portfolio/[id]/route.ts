import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validatePortfolioInput } from "@/lib/portfolio";

type RouteContext = {
  params: Promise<{ id: string }>;
};

// GET /api/portfolio/[id] — 1件取得
export async function GET(_request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;

    const portfolio = await prisma.portfolio.findUnique({
      where: { id },
    });

    if (!portfolio) {
      return NextResponse.json(
        { error: "指定されたポートフォリオが見つかりません" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: portfolio });
  } catch (error) {
    console.error("GET /api/portfolio/[id] failed:", error);
    return NextResponse.json(
      { error: "ポートフォリオの取得に失敗しました" },
      { status: 500 }
    );
  }
}

// PUT /api/portfolio/[id] — 更新
export async function PUT(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const result = validatePortfolioInput(body);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const existing = await prisma.portfolio.findUnique({
      where: { id },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "指定されたポートフォリオが見つかりません" },
        { status: 404 }
      );
    }

    const portfolio = await prisma.portfolio.update({
      where: { id },
      data: result.data,
    });

    return NextResponse.json({ data: portfolio });
  } catch (error) {
    console.error("PUT /api/portfolio/[id] failed:", error);
    return NextResponse.json(
      { error: "ポートフォリオの更新に失敗しました" },
      { status: 500 }
    );
  }
}

// DELETE /api/portfolio/[id] — 削除
export async function DELETE(_request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;

    const existing = await prisma.portfolio.findUnique({
      where: { id },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "指定されたポートフォリオが見つかりません" },
        { status: 404 }
      );
    }

    await prisma.portfolio.delete({
      where: { id },
    });

    return NextResponse.json({ data: { id } });
  } catch (error) {
    console.error("DELETE /api/portfolio/[id] failed:", error);
    return NextResponse.json(
      { error: "ポートフォリオの削除に失敗しました" },
      { status: 500 }
    );
  }
}
