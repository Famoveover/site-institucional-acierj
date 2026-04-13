import { useState } from "react";
import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import FadeIn from "../components/FadeIn";

const WA_MSG = encodeURIComponent(
  "Olá, gostaria de entrar em contato com a ACIERJ."
);

function waLink(number, name) {
  const msg = encodeURIComponent(
    `Olá ${name}, gostaria de entrar em contato com a ACIERJ.`
  );
  return `https://wa.me/${number}?text=${msg}`;
}

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro desconhecido.");
      setStatus("success");
      setForm({ nome: "", email: "", mensagem: "" });
    } catch (err) {
      setErrorMsg(err.message);
      setStatus("error");
    }
  }

  return (
    <PageLayout>
      <PageHero
        crumb="ACIERJ"
        title="Contato e Participar"
        tagline="Entre em contato conosco ou participe do movimento da ACIERJ."
      />

      {/* ═══════════════ Formulário ═══════════════ */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário */}
            <FadeIn direction="left">
              <SectionHeader
                title="Formulário de Contato"
                subtitle="Preencha o formulário e entraremos em contato em breve."
                align="left"
              />
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    value={form.mensagem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none"
                  />
                </div>

                {/* Feedback de status */}
                {status === "success" && (
                  <div className="px-4 py-3 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 text-sm font-semibold">
                    ✅ Mensagem enviada! Responderemos em breve.
                  </div>
                )}
                {status === "error" && (
                  <div className="px-4 py-3 rounded-lg bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 text-sm font-semibold">
                    ❌ {errorMsg}
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-block bg-brand-400 text-white px-8 py-4 rounded-lg font-bold text-sm shadow-md shadow-brand-400/30 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Enviando…" : "Enviar por e-mail"}
                  </button>
                  <a
                    href={waLink("5521993482699", "Ana Gilda")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold text-sm shadow-md shadow-black/10 hover:bg-[#1ebe5d] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 no-underline hover:no-underline"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Falar no WhatsApp
                  </a>
                </div>
              </form>
            </FadeIn>

            {/* Contatos institucionais */}
            <FadeIn direction="right" delay={0.15}>
              <SectionHeader
                title="Contatos institucionais"
                subtitle="Fale diretamente com nossa equipe."
                align="left"
              />
              <div className="flex flex-col gap-4 mb-6">
                {/* Presidenta — destaque */}
                <div className="bg-brand-50 dark:bg-brand-900/30 rounded-xl p-5 border border-brand-200 dark:border-brand-700 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-400 text-white font-bold text-sm flex-shrink-0">
                      AG
                    </span>
                    <div>
                      <p className="font-extrabold text-gray-900 dark:text-white leading-tight">
                        Ana Gilda
                      </p>
                      <span className="inline-block px-2 py-0.5 bg-brand-400 text-white text-xs font-bold rounded-full mt-0.5">
                        Presidenta
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="tel:+5521993482699"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:text-brand-500 hover:border-brand-300 transition-colors font-medium"
                    >
                      📞 (21) 99348-2699
                    </a>
                    <a
                      href={waLink("5521993482699", "Ana Gilda")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-sm text-[#1a9b4e] dark:text-[#25D366] hover:bg-[#25D366]/20 transition-colors font-medium"
                    >
                      <WhatsAppIcon />
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Demais membros */}
                {[
                  {
                    initials: "CG",
                    name: "Cássia Gouveia",
                    role: "Vice-Presidenta",
                    phone: "(21) 97614-4915",
                    tel: "+5521976144915",
                    wa: "5521976144915",
                  },
                  {
                    initials: "LN",
                    name: "Lília Nascimento",
                    role: "1ª Secretaria",
                    phone: "(21) 96407-8051",
                    tel: "+5521964078051",
                    wa: "5521964078051",
                  },
                ].map(({ initials, name, role, phone, tel, wa }) => (
                  <div
                    key={name}
                    className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold text-sm flex-shrink-0">
                        {initials}
                      </span>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white leading-tight">
                          {name}
                        </p>
                        <p className="text-xs text-brand-500 dark:text-brand-300 font-semibold">
                          {role}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={`tel:${tel}`}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 hover:text-brand-500 hover:border-brand-300 transition-colors font-medium"
                      >
                        📞 {phone}
                      </a>
                      <a
                        href={waLink(wa, name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-sm text-[#1a9b4e] dark:text-[#25D366] hover:bg-[#25D366]/20 transition-colors font-medium"
                      >
                        <WhatsAppIcon />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* E-mail e Instagram */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm space-y-3">
                <a
                  href="mailto:acierj@gmail.com"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-50 dark:bg-brand-900/40 text-brand-500 flex-shrink-0 text-base group-hover:bg-brand-100 transition-colors">
                    ✉️
                  </span>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 leading-none mb-0.5">E-mail institucional</p>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-brand-500 transition-colors">
                      acierj@gmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="https://instagram.com/acierjcuidadores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-50 dark:bg-pink-900/20 text-pink-500 flex-shrink-0 text-base group-hover:bg-pink-100 transition-colors">
                    📸
                  </span>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 leading-none mb-0.5">Instagram</p>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-brand-500 transition-colors">
                      @acierjcuidadores
                    </p>
                  </div>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
