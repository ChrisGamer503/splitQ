import React from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PaginaActual from "./PaginaActual";

const Animador = () => {
  const location = useLocation();

  const initialAnimation = { opacity: 0 };
  const animateAnimation = { opacity: 1 };
  const exitAnimation = { opacity: 0 };
  const transitionProps = { duration: 0.4 };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={initialAnimation}
        animate={animateAnimation}
        exit={exitAnimation}
        transition={transitionProps}
        style={{ position: "absolute", width: "100%" }}
      >
        <PaginaActual />
      </motion.div>
    </AnimatePresence>
  );
};

export default Animador;