import type { RequestHandler } from './$types';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// 🟡 Charge les variables d'environnement (.env)
dotenv.config();

// 🔍 Debug: Affiche les variables pour confirmation
console.log('📨 SMTP Config Loaded:', {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS?.slice(0, 4) + '********',
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_TO
});

// ✅ Crée le transporteur SMTP
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

export const POST: RequestHandler = async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name')?.toString() || '';
    const email = data.get('email')?.toString() || '';
    const phone = data.get('phone')?.toString() || '';
    const message = data.get('message')?.toString() || '';

    // 🛑 Validation minimale
    if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: 'Champs requis manquants.' }), { status: 400 });
    }

    try {
        // 📬 Envoie le courriel
        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: process.env.SMTP_TO,
            subject: `Nouveau message de ${name}`,
            html: `
            <div style="font-family: sans-serif; line-height: 1.5; color: #333; max-width: 600px; margin: auto;">
              <h2 style="color: #054236;">📥 Nouveau message de SansFiltre</h2>
              <p><strong>👤 Nom :</strong> ${name}</p>
              <p><strong>📧 Email :</strong> ${email}</p>
              <p><strong>📞 Téléphone :</strong> ${phone || '<em>Aucun</em>'}</p>
              <p><strong>📝 Message :</strong></p>
              <div style="background-color: #f9f9f9; padding: 1em; border-left: 4px solid #054236;">
                ${message.replace(/\n/g, '<br>')}
              </div>
              <hr style="margin-top: 2em; border: none; border-top: 1px solid #ddd;" />
              <p style="font-size: 0.9em; color: #999;">Envoyé depuis le formulaire SansFiltre</p>
            </div>
          `
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (err: any) {
        // ❌ Log détaillé de l’erreur SMTP
        console.error('❌ Mailer error details:', {
            message: err?.message,
            code: err?.code,
            response: err?.response,
            stack: err?.stack
        });

        return new Response(JSON.stringify({ error: 'Mailer failed' }), { status: 500 });
    }
};
