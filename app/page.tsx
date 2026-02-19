
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-primary mb-8"
      >
        Selamat Menyambut Bulan Suci Ramadan 1447 H / 2026 M
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-6">
        {["tasbih","niat-puasa","doa-qunut","wudhu","tarawih","sejarah"].map((item) => (
          <Link key={item} href={`/${item}`} className="bg-soft p-6 rounded-xl hover:scale-105 transition">
            {item.replace("-", " ").toUpperCase()}
          </Link>
        ))}
      </div>
    </section>
  );
}
