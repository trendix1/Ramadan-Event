
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TasbihCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("tasbih");
    if (saved) setCount(parseInt(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasbih", count.toString());
  }, [count]);

  return (
    <div className="text-center py-20">
      <motion.h2
        key={count}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="text-6xl font-bold text-primary"
      >
        {count}
      </motion.h2>

      <div className="mt-6 flex justify-center gap-4">
        <button onClick={() => setCount(count+1)} className="bg-primary text-white px-6 py-2 rounded">Tambah</button>
        <button onClick={() => setCount(0)} className="bg-red-500 text-white px-6 py-2 rounded">Reset</button>
      </div>
    </div>
  );
}
