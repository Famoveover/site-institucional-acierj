"use client";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function NewsCard({ title, source, summary, link, delay = 0 }) {
  return (
    <FadeIn delay={delay}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <motion.div
          whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
          className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm transition-all duration-300 group hover:border-brand-200 dark:hover:border-brand-400/40 h-full"
        >
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-brand-500 dark:text-brand-400 mb-3">
            {source}
          </span>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
            {summary}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-500 dark:text-brand-400 group-hover:gap-2 transition-all">
            Ler matéria
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </motion.div>
      </a>
    </FadeIn>
  );
}
