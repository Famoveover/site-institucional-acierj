import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido." });
  }

  const { nome, email, mensagem } = req.body;

  // Validação básica
  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "E-mail inválido." });
  }

  if (nome.length > 100 || mensagem.length > 2000) {
    return res.status(400).json({ error: "Dados inválidos." });
  }

  try {
    await resend.emails.send({
      from: "Site ACIERJ <onboarding@resend.dev>",
      to: "acierj@gmail.com",
      reply_to: email,
      subject: `Contato via site: ${nome}`,
      text: `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d7a4f;">Nova mensagem via site da ACIERJ</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 1px solid #eee; margin: 16px 0;" />
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-line; color: #444;">${mensagem}</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Erro ao enviar email:", err);
    return res.status(500).json({ error: "Erro ao enviar a mensagem. Tente novamente." });
  }
}
