import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Ajuda() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/contato");
  }, [router]);
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: { destination: "/contato", permanent: true },
  };
}

  {
    icon: "📧",
    title: "Contato Direto",
    desc: "E-mail: contato@acierj.org.br\nTelefone: (21) 1234-5678",
  },
  {
    icon: "🔀",
    title: "Encaminhamentos",
    desc: "Para onde direcionamos casos específicos.",
  },
  {
    icon: "🚨",
    title: "Suporte Imediato",
    desc: "Informações para situações urgentes.",
  },
];

export default function Ajuda() {
  return (
    <PageLayout>
      <PageHero
        crumb="ACIERJ"
        title="Buscar Ajuda"
        tagline="Se você ou sua família precisa de suporte relacionado a cuidado, orientação social ou encaminhamento, entre em contato conosco."
      />

      {/* ═══════════════ Como pedir orientação ═══════════════ */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Como Pedir Orientação"
            subtitle="Entre em contato através dos canais abaixo para solicitar apoio."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {canais.map(({ icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full">
                  <span className="text-3xl mb-4 block">{icon}</span>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                    {desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

