import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import FadeIn from "../components/FadeIn";

export default function Contato() {
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
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-block bg-brand-400 text-white px-8 py-4 rounded-lg font-bold text-sm shadow-md shadow-brand-400/30 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Enviar
                </button>
              </form>
            </FadeIn>

            {/* Contatos institucionais */}
            <FadeIn direction="right" delay={0.15}>
              <SectionHeader
                title="Contatos institucionais"
                subtitle="Fale diretamente com nossa equipe."
                align="left"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                {/* Presidenta — destaque */}
                <div className="sm:col-span-2 md:col-span-1 lg:col-span-2 bg-brand-50 dark:bg-brand-900/30 rounded-xl p-6 border border-brand-200 dark:border-brand-700 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
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
                  <a
                    href="tel:+5521993482699"
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors"
                  >
                    📞 (21) 99348-2699
                  </a>
                </div>

                {/* Demais membros */}
                {[
                  { initials: "LN", name: "Lília Nascimento", role: "Vice-Presidente", phone: "(21) 96407-8051", tel: "+5521964078051" },
                  { initials: "CG", name: "Cássia Gouveia", role: "Diretoria", phone: "(21) 97614-4915", tel: "+5521976144915" },
                ].map(({ initials, name, role, phone, tel }) => (
                  <div
                    key={name}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-3">
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
                    <a
                      href={`tel:${tel}`}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-brand-500 transition-colors"
                    >
                      📞 {phone}
                    </a>
                  </div>
                ))}
              </div>

              {/* E-mail e Instagram */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm space-y-3">
                <a
                  href="mailto:acierj@gmail.com"
                  className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors"
                >
                  <span className="text-lg">✉️</span>
                  <span>acierj@gmail.com</span>
                </a>
                <a
                  href="https://instagram.com/acierjcuidadores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors"
                >
                  <span className="text-lg">📸</span>
                  <span>@acierjcuidadores</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

