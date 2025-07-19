// app/api/contact/route.ts
import { prisma } from '@/db/prisma';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';



// Schéma de validation zod
const contactSchema =  z.object({
  firstName: z.string().min(2, "Le prénom est requis"),
  email: z.email("Email invalide"),
  phone: z.string().min(6, "Le téléphone est requis"),
  subject: z.string().min(2, "Le sujet est requis"),
  message: z.string().min(5, "Le message est requis"),
});

export async function POST(request: NextRequest) {
  try {
    // Parse du body
    const body = await request.json();
    const parse = contactSchema.safeParse(body);
    if (!parse.success) {
      return NextResponse.json(
        { message: parse.error.issues[0]?.message || 'Données invalides' },
        { status: 400 }
      );
    }
    const { firstName, phone, email, subject, message } = parse.data;

    // Configuration Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true pour 465, false pour autres ports
      auth: {
        user: process.env.SMTP_USER, // Votre email
        pass: process.env.SMTP_PASS, // Votre mot de passe d'application
      },
    });

    await prisma.contactMessage.create({
      data:{
        firstName,
        email,
        phone,
        interest: subject,
        // message
      }
    })



    // Template HTML pour l'email
    const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Nouveau Contact - Yiri Tech</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #007bff; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 4px solid #007bff; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚀 Nouveau Contact - Yiri Tech</h1>
            </div>
            <div class="content">
                <p>Vous avez reçu un nouveau message de contact :</p>
                
                <div class="field">
                    <div class="label">👤 Prénom :</div>
                    <div class="value">${firstName}</div>
                </div>
                
                <div class="field">
                    <div class="label">📞 Téléphone :</div>
                    <div class="value">${phone}</div>
                </div>
                
                <div class="field">
                    <div class="label">📧 Email :</div>
                    <div class="value">${email}</div>
                </div>
                
                <div class="field">
                    <div class="label">🕒 Date :</div>
                    <div class="value">${new Date().toLocaleString('fr-FR')}</div>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;

    // Options de l'email
    const mailOptions = {
      from: `"Yiri Tech Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Email de destination
      subject: `🚀 Nouveau Contact - ${firstName}`,
      html: htmlTemplate,
      text: `
        Nouveau contact reçu:
        
        Prénom: ${firstName}
        Téléphone: ${phone}
        Email: ${email}
        Date: ${new Date().toLocaleString('fr-FR')}
      `
    };

    // Envoi de l'email
    // await transporter.sendMail(mailOptions);

    // Email de confirmation à l'utilisateur (optionnel)
    const confirmationMailOptions = {
      from: `"Yiri Tech" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "✅ Votre message a été reçu - Yiri Tech",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #007bff; color: white; padding: 20px; text-align: center;">
            <h1>Merci ${firstName} !</h1>
          </div>
          <div style="padding: 20px;">
            <p>Nous avons bien reçu votre message et nous vous recontacterons très bientôt.</p>
            <p>L'équipe Yiri Tech vous remercie pour votre intérêt.</p>
            <hr>
            <p style="color: #666; font-size: 12px;">
              Cet email a été envoyé automatiquement, merci de ne pas y répondre.
            </p>
          </div>
        </div>
      `
    };

    // Envoi de l'email de confirmation
    // await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { message: 'Message envoyé avec succès !' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { message: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}