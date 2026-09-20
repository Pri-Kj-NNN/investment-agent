import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateMonthlyPlanInput } from "@/lib/monthly-plan";

type RouteContext = {
  params: Promise<{ id: string }>;
};

// GET /api/monthly-plan/[id] — 1件取得
export async function GET(_request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;

    const plan = await prisma.monthlyPlan.findUnique({
      where: { id },
    });

    if (!plan) {
      return NextResponse.json(
        { error: "指定された月次計画が見つかりません" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: plan });
  } catch (error) {
    console.error("GET /api/monthly-plan/[id] failed:", error);
    return NextResponse.json(
      { error: "月次計画の取得に失敗しました" },
      { status: 500 }
    );
  }
}

// PUT /api/monthly-plan/[id] — 更新
export async function PUT(request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const result = validateMonthlyPlanInput(body);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const existing = await prisma.monthlyPlan.findUnique({
      where: { id },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "指定された月次計画が見つかりません" },
        { status: 404 }
      );
    }

    const plan = await prisma.monthlyPlan.update({
      where: { id },
      data: result.data,
    });

    return NextResponse.json({ data: plan });
  } catch (error) {
    console.error("PUT /api/monthly-plan/[id] failed:", error);

    if (
      error instanceof Error &&
      error.message.includes("Unique constraint")
    ) {
      return NextResponse.json(
        { error: "この月の計画はすでに登録されています" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "月次計画の更新に失敗しました" },
      { status: 500 }
    );
  }
}

// DELETE /api/monthly-plan/[id] — 削除
export async function DELETE(_request: Request, context: RouteContext) {
  try {
    const { id } = await context.params;

    const existing = await prisma.monthlyPlan.findUnique({
      where: { id },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "指定された月次計画が見つかりません" },
        { status: 404 }
      );
    }

    await prisma.monthlyPlan.delete({
      where: { id },
    });

    return NextResponse.json({ data: { id } });
  } catch (error) {
    console.error("DELETE /api/monthly-plan/[id] failed:", error);
    return NextResponse.json(
      { error: "月次計画の削除に失敗しました" },
      { status: 500 }
    );
  }
}
