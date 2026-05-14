import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import FadeIn from "../components/FadeIn";
import CardParceiro from "../components/CardParceiro";

export default function Associados() {
  return (
    <PageLayout>
      <PageHero
        crumb="ACIERJ"
        title="Área de Associados"
        tagline="Canal institucional dedicado aos associados da ACIERJ."
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm p-8 md:p-10 mb-12">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-400/10 text-brand-600 dark:text-brand-300 mb-4">
                Em desenvolvimento
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
                Sistema para associados em desenvolvimento
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Estamos estruturando uma área segura para associados com recursos de cadastro,
                acompanhamento e serviços institucionais exclusivos.
              </p>

              <div className="rounded-xl border border-brand-200 dark:border-brand-700 bg-brand-50/70 dark:bg-brand-900/20 p-5">
                <p className="text-sm md:text-base font-semibold text-brand-700 dark:text-brand-300 m-0">
                  Sistema em desenvolvimento para associados.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Seção de Parceiros */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
              Parceiros e Serviços
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
              Conheça os profissionais e empresas parceiras da ACIERJ, prontos para atender aos associados.
            </p>

            {/* Grid de Parceiros */}
            <div className="space-y-8">
              <CardParceiro
                logo="/images/parceiros/pires-queiroz-martins.png"
                nome="Pires Queiroz & Martins — Advogados Associados"
                slogan="Nosso escritório possui longa parceria com a ACIERJ e atua de forma especializada na defesa dos direitos dos cuidadores."
                descricao="Temos experiência em ações trabalhistas envolvendo cuidadores da pessoa idosa, da saúde mental, escolares e da pessoa com deficiência, tanto no âmbito público quanto privado."
                areas={[
                  "Reconhecimento de vínculo empregatício",
                  "Jornadas exaustivas",
                  "Escalas abusivas",
                  "Horas extras",
                  "Demais violações de direitos trabalhistas",
                ]}
                textoAdicional="Nossa atuação é pautada na proteção da dignidade do trabalhador cuidador, reconhecendo a alta carga física e emocional da profissão."
                fraseDestaque="Por isso, unimos atendimento humanizado e atuação técnica especializada, sempre com foco no respeito, valorização profissional e justiça social aos cuidadores."
                endereco="Rua Debret, Nº 79, Grupo 607/609 — Centro, Rio de Janeiro"
                telefone="(21) 98236-3474"
                email="piresqueirozemartins@piresqueirozemartins.com"
                whatsappUrl="https://api.whatsapp.com/send?phone=5521982363474"
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
