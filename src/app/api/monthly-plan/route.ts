import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateMonthlyPlanInput } from "@/lib/monthly-plan";

// GET /api/monthly-plan — 月次計画一覧を取得
export async function GET() {
  try {
    const plans = await prisma.monthlyPlan.findMany({
      orderBy: { yearMonth: "desc" },
    });

    return NextResponse.json({ data: plans });
  } catch (error) {
    console.error("GET /api/monthly-plan failed:", error);
    return NextResponse.json(
      { error: "月次計画の取得に失敗しました" },
      { status: 500 }
    );
  }
}

// POST /api/monthly-plan — 新しい月次計画を登録
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validateMonthlyPlanInput(body);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const plan = await prisma.monthlyPlan.create({
      data: result.data,
    });

    return NextResponse.json({ data: plan }, { status: 201 });
  } catch (error) {
    console.error("POST /api/monthly-plan failed:", error);

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
      { error: "月次計画の登録に失敗しました" },
      { status: 500 }
    );
  }
}
