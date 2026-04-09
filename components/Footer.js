import Image from "next/image";
import Link from "next/link";
import logoImg from "../imagens/acierj.png";

export default function Footer() {
  return (
    <footer className="bg-brand-600 dark:bg-gray-950 text-gray-100 pt-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/15">
          {/* Marca */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={logoImg}
                alt="Logo ACIERJ"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <h3 className="text-xl font-extrabold text-white">ACIERJ</h3>
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              Associação dos Cuidadores da Pessoa Idosa, da Saúde Mental e com
              Deficiência do Estado do Rio de Janeiro. Coletivo na luta pela
              valorização e regulamentação da profissão.
            </p>
            <div className="flex gap-2.5 mt-1">
              {[
                {
                  href: "https://www.instagram.com/acaborj/",
                  label: "Instagram",
                  icon: "📷",
                },
                {
                  href: "https://www.facebook.com/acaborj",
                  label: "Facebook",
                  icon: "📘",
                },
                {
                  href: "mailto:acierj@gmail.com",
                  label: "Email",
                  icon: "✉️",
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={`${label} da ACIERJ`}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white text-base no-underline hover:bg-brand-400 hover:-translate-y-0.5 transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <nav aria-label="Links do footer">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/45 mb-5">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {[
                ["/", "Início"],
                ["/sobre", "Sobre a ACIERJ"],
                ["/areas", "Áreas de Atuação"],
                ["/cuidadores", "Cuidadores"],
                ["/cursos", "Cursos"],
                ["/contato", "Contato"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/80 no-underline hover:text-white hover:pl-1 transition-all"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Participe */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/45 mb-5">
              Participe
            </h4>
            <ul className="space-y-2.5">
              {[
                ["/cuidadores", "Associe-se à ACIERJ"],
                ["/cuidadores", "Ficha de inscrição"],
                ["/projetos", "Projetos e eventos"],
                ["/noticias", "Notícias"],
                ["/direitos-idoso", "Direitos da Pessoa Idosa"],
              ].map(([href, label]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/80 no-underline hover:text-white hover:pl-1 transition-all"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/45 mb-5">
              Contato
            </h4>
            <div className="space-y-4">
              {[
                { icon: "✉️", title: "Email", text: "acierj@gmail.com" },
                { icon: "📞", title: "Telefone", text: "(21) 98236-3474" },
                {
                  icon: "📍",
                  title: "Localização",
                  text: "Rio de Janeiro – RJ",
                },
              ].map(({ icon, title, text }) => (
                <div key={title} className="flex items-start gap-2.5">
                  <span className="text-base mt-0.5 shrink-0">{icon}</span>
                  <p className="text-sm text-white/80 leading-snug m-0">
                    <strong className="block text-white font-semibold mb-0.5">
                      {title}
                    </strong>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 py-6">
          <p className="text-[13px] text-white/50 m-0">
            © {new Date().getFullYear()} ACIERJ – Associação dos Cuidadores do
            Estado do Rio de Janeiro. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/35 m-0">
            Fortalecimento da categoria dos cuidadores.
          </p>
        </div>
      </div>
    </footer>
  );
}
