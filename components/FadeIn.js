"use client";
import { motion } from "framer-motion";

/**
 * FadeIn – wrapper reutilizável para animações de entrada.
 * Props:
 *   direction  "up" | "down" | "left" | "right" (default "up")
 *   delay      number em segundos (default 0)
 *   duration   number em segundos (default 0.5)
 *   className  classes extras
 *   children
 */
const offsets = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 32 },
  right: { x: -32 },
};

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
}) {
  const offset = offsets[direction] || offsets.up;

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
