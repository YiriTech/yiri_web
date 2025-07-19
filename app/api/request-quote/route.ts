import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/generated/prisma';
import { z } from 'zod';

const schema = z.object({
  firstName: z.string().min(2, "Le prénom est requis"),
  lastName: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  number: z.string().min(6, "Numéro requis"),
  company: z.string().min(2, "Entreprise requise"),
  website: z.string().url("URL invalide"),
  services: z.array(z.string()).min(1, "Sélectionnez au moins un service"),
  message: z.string().min(5, "Message requis"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parse = schema.safeParse(body);
    if (!parse.success) {
      return NextResponse.json({ message: parse.error.issues[0]?.message || 'Données invalides' }, { status: 400 });
    }
    const { firstName, lastName, email, number, company, website, services, message } = parse.data;
    await prisma.requestQuote.create({
      data: {
        firstName, lastName, email, number, company, website,
        services: Array.isArray(services) ? services.join(",") : services,
        message
      }
    });
    return NextResponse.json({ message: "Demande envoyée !" });
  } catch (e) {
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
} 