import { prisma } from '@/app/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email("Email invalide"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parse = schema.safeParse(body);
    if (!parse.success) {
      return NextResponse.json({ message: parse.error.issues[0]?.message || 'Données invalides' }, { status: 400 });
    }
    const { email } = parse.data;
    await prisma.newsLetterEmail.create({ data: { email } });
    return NextResponse.json({ message: "Inscription réussie !" });
  } catch (e) {
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
} 