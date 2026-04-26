import { useRef, useState } from "react";
import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import FadeIn from "../components/FadeIn";

const FORM_SUBMIT_ENDPOINT = "https://formsubmit.co/ajax/acierj@gmail.com";
const MIN_SUBMIT_TIME_MS = 3000;

function validateFormData(form) {
  const nome = form.nome.trim();
  const email = form.email.trim();
  const mensagem = form.mensagem.trim();

  if (!nome || !email || !mensagem) {
    return {
      isValid: false,
      error: "Preencha todos os campos obrigatórios.",
    };
  }

  if (nome.length < 2 || nome.length > 100) {
    return {
      isValid: false,
      error: "Informe um nome entre 2 e 100 caracteres.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: "Informe um e-mail valido.",
    };
  }

  if (mensagem.length < 10 || mensagem.length > 2000) {
    return {
      isValid: false,
      error: "A mensagem deve ter entre 10 e 2000 caracteres.",
    };
  }

  return {
    isValid: true,
    cleanData: { nome, email, mensagem },
  };
}

function waLink(number, name) {
  const msg = encodeURIComponent(
    `Olá ${name}, gostaria de entrar em contato com a ACIERJ.`,
  );
  return `https://wa.me/${number}?text=${msg}`;
}

const contatosPorFuncao = [
  {
    area: "Presidência",
    contatos: [
      {
        initials: "AG",
        name: "Ana Gilda",
        role: "Presidenta",
        phone: "(21) 99348-2699",
        tel: "+5521993482699",
        wa: "5521993482699",
        destaque: true,
      },
      {
        initials: "CG",
        name: "Cássia Gouveia",
        role: "Vice-Presidenta",
        phone: "(21) 97614-4915",
        tel: "+5521976144915",
        wa: "5521976144915",
      },
    ],
  },
  {
    area: "Tesouraria",
    contatos: [
      {
        initials: "TS",
        name: "Tainá Santos",
        role: "1ª Tesoureira",
        phone: "(21) 96964-1139",
        tel: "+5521969641139",
        wa: "5521969641139",
      },
      {
        initials: "AZ",
        name: "Ariel Zerbinato",
        role: "2ª Tesoureira",
        phone: "(21) 97867-9468",
        tel: "+5521978679468",
        wa: "5521978679468",
      },
    ],
  },
  {
    area: "Secretaria",
    contatos: [
      {
        initials: "LN",
        name: "Lília Nascimento",
        role: "1ª Secretaria",
        phone: "(21) 96407-8051",
        tel: "+5521964078051",
        wa: "5521964078051",
      },
      {
        initials: "RG",
        name: "Rômulo Gabriel",
        role: "2º Secretário",
        phone: "(21) 96975-8402",
        tel: "+5521969758402",
        wa: "5521969758402",
      },
    ],
  },
];

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
    empresa: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const startedAtRef = useRef(Date.now());

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    if (form.empresa.trim()) {
      setStatus("error");
      setErrorMsg("Nao foi possivel enviar. Tente novamente em instantes.");
      return;
    }

    if (Date.now() - startedAtRef.current < MIN_SUBMIT_TIME_MS) {
      setStatus("error");
      setErrorMsg("Aguarde alguns segundos e tente novamente.");
      return;
    }

    const validation = validateFormData(form);
    if (!validation.isValid) {
      setStatus("error");
      setErrorMsg(validation.error);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(FORM_SUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...validation.cleanData,
          _subject: `Contato via site: ${validation.cleanData.nome}`,
          _template: "table",
          _captcha: "false",
          _replyto: validation.cleanData.email,
          _honey: form.empresa,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success !== "true") {
        throw new Error(
          "Nao foi possivel enviar sua mensagem agora. Tente novamente em alguns minutos.",
        );
      }

      setStatus("success");
      setForm({ nome: "", email: "", mensagem: "", empresa: "" });
      startedAtRef.current = Date.now();
    } catch (err) {
      setErrorMsg(
        err.message ||
          "Nao foi possivel enviar sua mensagem agora. Tente novamente em alguns minutos.",
      );
      setStatus("error");
    }
  }

  async function handleCopyEmail() {
    const email = "acierj@gmail.com";

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const tempInput = document.createElement("textarea");
        tempInput.value = email;
        tempInput.setAttribute("readonly", "");
        tempInput.style.position = "absolute";
        tempInput.style.left = "-9999px";
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      }

      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      setCopiedEmail(false);
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
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="empresa">Empresa</label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    disabled={status === "loading"}
                    value={form.empresa}
                    onChange={handleChange}
                  />
                </div>
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
                    minLength={2}
                    maxLength={100}
                    required
                    disabled={status === "loading"}
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
                    maxLength={120}
                    required
                    disabled={status === "loading"}
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
                    minLength={10}
                    maxLength={2000}
                    required
                    disabled={status === "loading"}
                    value={form.mensagem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none"
                  />
                </div>

                {/* Feedback de status */}
                {status === "success" && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="px-4 py-3 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 text-sm font-semibold"
                  >
                    ✅ Mensagem enviada! Responderemos em breve.
                  </div>
                )}
                {status === "error" && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="px-4 py-3 rounded-lg bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 text-sm font-semibold"
                  >
                    ❌ {errorMsg}
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  <a
                    href={waLink("5521993482699", "Ana Gilda")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold text-sm shadow-md shadow-black/10 hover:bg-[#1ebe5d] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 no-underline hover:no-underline"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Atendimento imediato via WhatsApp
                  </a>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 border border-brand-300 text-brand-600 dark:text-brand-300 px-8 py-4 rounded-lg font-bold text-sm bg-white dark:bg-gray-800 hover:bg-brand-50 dark:hover:bg-brand-900/20 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" && (
                      <span
                        className="w-4 h-4 border-2 border-brand-300 border-t-transparent rounded-full animate-spin"
                        aria-hidden="true"
                      />
                    )}
                    {status === "loading"
                      ? "Enviando formulário..."
                      : "Enviar formulário por e-mail"}
                  </button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Para retorno mais rápido, prefira o WhatsApp.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Ao enviar, voce concorda com o envio desta mensagem para
                  atendimento da ACIERJ em acierj@gmail.com.
                </p>
              </form>
            </FadeIn>

            {/* Contatos institucionais */}
            <FadeIn direction="right" delay={0.15}>
              <SectionHeader
                title="Contatos institucionais"
                subtitle="Escolha a área e fale com a pessoa responsável."
                align="left"
              />

              <div className="space-y-6 mb-6">
                {contatosPorFuncao.map(({ area, contatos }) => (
                  <section key={area} className="space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-sm font-extrabold uppercase tracking-wide text-gray-700 dark:text-gray-200">
                        {area}
                      </h3>
                      <a
                        href={waLink(contatos[0].wa, contatos[0].name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-300 hover:text-accent transition-colors"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        {`Falar com a ${area}`}
                      </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {contatos.map(
                        ({
                          initials,
                          name,
                          role,
                          phone,
                          tel,
                          wa,
                          destaque,
                        }) => (
                          <div
                            key={name}
                            className={
                              destaque
                                ? "bg-brand-50 dark:bg-brand-900/30 rounded-xl p-5 border border-brand-200 dark:border-brand-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                                : "bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                            }
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <span
                                className={
                                  destaque
                                    ? "w-10 h-10 flex items-center justify-center rounded-full bg-brand-400 text-white font-bold text-sm flex-shrink-0"
                                    : "w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold text-sm flex-shrink-0"
                                }
                              >
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
                                {`Falar com a ${area}`}
                              </a>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </section>
                ))}
              </div>

              {/* E-mail e Instagram */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm space-y-3">
                <div className="px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-50 dark:bg-brand-900/40 text-brand-500 flex-shrink-0 text-base group-hover:bg-brand-100 transition-colors">
                    ✉️
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400 dark:text-gray-500 leading-none mb-0.5">
                        E-mail institucional
                      </p>
                      <a
                        href="mailto:acierj@gmail.com"
                        className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-brand-500 transition-colors no-underline"
                      >
                        acierj@gmail.com
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center justify-center px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-600 text-xs font-semibold text-gray-600 dark:text-gray-200 bg-white dark:bg-gray-700 hover:border-brand-300 hover:text-brand-500 transition-colors"
                    >
                      {copiedEmail ? "Copiado!" : "Copiar e-mail"}
                    </button>
                  </div>
                </div>
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
                    <p className="text-xs text-gray-400 dark:text-gray-500 leading-none mb-0.5">
                      Instagram
                    </p>
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
