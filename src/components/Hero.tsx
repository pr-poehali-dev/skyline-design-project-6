import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/90500ce5-0732-41cb-86b0-43f7f8ffd574/bucket/5242f886-d126-4f68-b6c0-bafc4f9b9b60.jpg"
          alt="Евгений"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ЕВГЕНИЙ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Живые беседы, честные истории. Подписывайся и смотри.
        </p>
        <a
          href="#video"
          className="inline-block mt-8 bg-white text-black px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors duration-300"
        >
          Смотреть
        </a>
      </div>
    </div>
  );
}