"use client";

import { motion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const revealEase = [0.22, 1, 0.36, 1];

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  trigger = "view",
  ...props
}) {
  const MotionElement = motion[as];

  return (
    <MotionElement
      initial="hidden"
      animate={trigger === "mount" ? "visible" : undefined}
      whileInView={trigger === "view" ? "visible" : undefined}
      viewport={trigger === "view" ? { once: true, amount: 0.12 } : undefined}
      variants={revealVariants}
      transition={{ duration: 0.55, delay, ease: revealEase }}
      data-motion-reveal=""
      className={className}
      {...props}
    >
      {children}
    </MotionElement>
  );
}
