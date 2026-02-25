import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    // Get or create user
    const user = await prisma.user.upsert({
      where: { clerkId: userId },
      update: {},
      create: {
        clerkId: userId,
        email: body.clientEmail || "unknown@email.com",
        name: body.clientName,
      },
    });

    // Create brief
    const brief = await prisma.brief.create({
      data: {
        userId: user.id,
        clientName: body.clientName,
        clientEmail: body.clientEmail,
        projectName: body.projectName,
        projectType: body.projectType,
        goals: body.goals,
        targetAudience: body.targetAudience,
        timeline: body.timeline,
        budget: body.budget,
        description: body.description,
        moodboardUrls: body.moodboardUrls || [],
        status: "completed",
      },
    });

    return NextResponse.json(brief);
  } catch (error) {
    console.error("Error creating brief:", error);
    return NextResponse.json(
      { error: "Failed to create brief" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: {
        briefs: {
          orderBy: { createdAt: "desc" },
        },
      },
    });

    return NextResponse.json(user?.briefs || []);
  } catch (error) {
    console.error("Error fetching briefs:", error);
    return NextResponse.json(
      { error: "Failed to fetch briefs" },
      { status: 500 },
    );
  }
}
