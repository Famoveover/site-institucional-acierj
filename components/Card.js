"use client";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

/**
 * Card – card padronizado com ícone em círculo.
 * Props:
 *   icon   string  — emoji ou texto
 *   title  string
 *   desc   string
 *   delay  number  — delay de animação em segundos (default 0)
 */
export default function Card({ icon, title, desc, delay = 0 }) {
  return (
    <FadeIn delay={delay}>
      <motion.div
        whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
        className="bg-white p-8 rounded-2xl border border-gray-100 text-center transition-all duration-300 shadow-sm group hover:border-brand-200"
      >
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 text-3xl mb-5 group-hover:bg-brand-100 transition-colors duration-300 mx-auto">
          {icon}
        </span>
        <h3 className="text-base font-bold mb-2 text-gray-900 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed m-0">{desc}</p>
      </motion.div>
    </FadeIn>
  );
}
