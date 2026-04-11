import Image from "next/image";
import { cn } from "../lib/utils";

/**
 * Componente padronizado para imagens otimizadas.
 * Garante uso consistente de next/image com estilos profissionais.
 *
 * @param {string} src - Caminho da imagem em /public (ex: "/images/hero/capa.png")
 * @param {string} alt - Texto alternativo (obrigatório para acessibilidade)
 * @param {number} width - Largura da imagem
 * @param {number} height - Altura da imagem
 * @param {boolean} priority - Carregar com prioridade (use no hero/above the fold)
 * @param {string} className - Classes adicionais para o <Image>
 * @param {string} wrapperClassName - Classes adicionais para o wrapper
 * @param {"cover"|"contain"} fit - object-fit da imagem (padrão: "cover")
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  wrapperClassName,
  fit = "cover",
  ...props
}) {
  return (
    <div
      className={cn("overflow-hidden rounded-xl shadow-sm", wrapperClassName)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn(
          "w-full h-auto",
          fit === "cover" ? "object-cover" : "object-contain",
          className,
        )}
        {...props}
      />
    </div>
  );
}
