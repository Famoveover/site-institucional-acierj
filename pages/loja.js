import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import FadeIn from "../components/FadeIn";

/* ── Dados dos produtos ── */
const produtos = [
  {
    id: 1,
    nome: "Camiseta ACIERJ",
    descricao: "Camiseta oficial da ACIERJ em algodão 100%. Vista a causa!",
    preco: 49.9,
    imagem: "/produtos/camiseta-acierj.jpg",
    tamanhos: ["P", "M", "G", "GG"],
    link: "https://mpago.la/exemplo-camiseta",
  },
  {
    id: 2,
    nome: "Caneca ACIERJ",
    descricao: "Caneca de porcelana 325ml com a marca ACIERJ.",
    preco: 29.9,
    imagem: "/produtos/caneca-acierj.jpg",
    tamanhos: [],
    link: "https://mpago.la/exemplo-caneca",
  },
  {
    id: 3,
    nome: "Ecobag ACIERJ",
    descricao: "Sacola ecológica resistente. Leve a ACIERJ com você!",
    preco: 25.0,
    imagem: "/produtos/ecobag-acierj.jpg",
    tamanhos: [],
    link: "https://mpago.la/exemplo-ecobag",
  },
  {
    id: 4,
    nome: "Boné ACIERJ",
    descricao: "Boné ajustável com bordado da ACIERJ.",
    preco: 39.9,
    imagem: "/produtos/bone-acierj.jpg",
    tamanhos: ["P/M", "G/GG"],
    link: "https://mpago.la/exemplo-bone",
  },
  {
    id: 5,
    nome: "Adesivo ACIERJ",
    descricao: "Kit com 3 adesivos exclusivos ACIERJ.",
    preco: 10.0,
    imagem: "/produtos/adesivo-acierj.jpg",
    tamanhos: [],
    link: "https://mpago.la/exemplo-adesivo",
  },
  {
    id: 6,
    nome: "Moletom ACIERJ",
    descricao: "Moletom confortável com capuz e logo ACIERJ.",
    preco: 119.9,
    imagem: "/produtos/moletom-acierj.jpg",
    tamanhos: ["P", "M", "G", "GG"],
    link: "https://mpago.la/exemplo-moletom",
  },
];

function formatPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/* ── Card de produto ── */
function ProdutoCard({ produto, index }) {
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(
    produto.tamanhos.length > 0 ? produto.tamanhos[0] : null,
  );
  const [clicou, setClicou] = useState(false);

  const handleComprar = () => {
    setClicou(true);
    setTimeout(() => setClicou(false), 1500);

    const url = new URL(produto.link);
    if (tamanhoSelecionado) {
      url.searchParams.set("tamanho", tamanhoSelecionado);
    }
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <FadeIn delay={index * 0.1}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full transition-all duration-300 group"
      >
        {/* Imagem */}
        <div className="relative w-full aspect-square bg-gray-100 dark:bg-gray-700 overflow-hidden">
          <Image
            src={produto.imagem}
            alt={produto.nome}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Conteúdo */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 tracking-tight">
            {produto.nome}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3 flex-1">
            {produto.descricao}
          </p>

          <p className="text-2xl font-extrabold text-brand-500 dark:text-brand-400 mb-4">
            {formatPreco(produto.preco)}
          </p>

          {/* Seletor de tamanho */}
          {produto.tamanhos.length > 0 && (
            <div className="mb-4">
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide block mb-2">
                Tamanho
              </span>
              <div className="flex gap-2 flex-wrap">
                {produto.tamanhos.map((tam) => (
                  <button
                    key={tam}
                    onClick={() => setTamanhoSelecionado(tam)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-all duration-200 ${
                      tamanhoSelecionado === tam
                        ? "bg-brand-400 text-white border-brand-400 shadow-sm"
                        : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-600 hover:border-brand-300 dark:hover:border-brand-400"
                    }`}
                  >
                    {tam}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Botão comprar */}
          <button
            onClick={handleComprar}
            className={`w-full py-3 rounded-lg font-bold text-white text-sm transition-all duration-300 ${
              clicou
                ? "bg-green-500 scale-95"
                : "bg-brand-400 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg"
            }`}
          >
            {clicou ? "✓ Redirecionando..." : "Comprar"}
          </button>
        </div>
      </motion.div>
    </FadeIn>
  );
}

/* ── Página da Loja ── */
export default function Loja() {
  return (
    <PageLayout>
      <PageHero
        title="Loja ACIERJ"
        tagline="Adquira produtos oficiais e apoie a nossa causa."
      />

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Nossos Produtos"
            subtitle="Cada compra fortalece a luta pelos direitos dos cuidadores e da pessoa idosa."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.map((produto, i) => (
              <ProdutoCard key={produto.id} produto={produto} index={i} />
            ))}
          </div>

          {/* Aviso */}
          <FadeIn>
            <div className="mt-16 text-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto">
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                💡 Ao clicar em <strong>&quot;Comprar&quot;</strong>, você será
                redirecionado para uma página de pagamento segura. Em caso de
                dúvidas, entre em{" "}
                <a
                  href="/contato"
                  className="text-brand-400 hover:underline font-semibold"
                >
                  contato conosco
                </a>
                .
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
}
