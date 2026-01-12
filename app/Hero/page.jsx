"use client"

import { motion } from "framer-motion"
import Silk from "@/Components/Silk"
import '../globals.css'

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
      
      {/* 1. THE SILK LAYER */}
      <div className="absolute inset-0 z-0 ">
        <Silk 
          speed={10} 
          scale={1} 
          color="#7B7481" 
          noiseIntensity={1} 
        />
      </div>

      {/* 2. THE VIGNETTE (Focuses attention to the center) */}
      <div className="absolute inset-0 z-[1] " />

      {/* 3. THE CONTENT */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-7xl font-bold tracking-tighter text-white md:text-9xl">
            ZURE <span className="text-[#7B7481]">UI</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400 md:text-xl">
            A fluid design system for the next generation of web interfaces. 
            Experience motion that feels like gravity.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button className="rounded-full bg-white px-8 py-3 font-medium text-black transition-transform hover:scale-105">
              Start Building
            </button>
            <button className="rounded-full border border-white/10 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-md transition-all hover:bg-white/10">
              Documentation
            </button>
          </div>
        </motion.div>
      </section>

      {/* 4. OPTIONAL BOTTOM BLEND */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20" />
    </div>
  )
}