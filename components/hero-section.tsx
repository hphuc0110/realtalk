"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RegistrationPopup } from "./registration-popup"

export function HeroSection() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-white">
        {/* Ảnh desktop */}
        <img
          src="/images/hero.webp"
          alt="GoTalk Desktop"
          className="hidden lg:block w-full h-full object-cover object-center"
        />

        {/* Ảnh mobile */}
        <img
          src="/images/hero-mobile.webp"
          alt="GoTalk Mobile"
          className="block lg:hidden w-full h-full object-cover object-center"
        />

        {/* Button đăng ký */}
        <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 z-10">
        <Button
  onClick={() => setIsRegistrationOpen(true)}
  size="lg"
  className="
    relative overflow-hidden
    text-white font-bold uppercase tracking-wide
    px-6 sm:px-10 py-3 sm:py-4
    text-base sm:text-lg
    rounded-full
    transition-all duration-500 ease-out
    transform hover:scale-110
  "
>
  {/* Vệt sáng vàng chạy quanh */}
  <span
    className="
      absolute inset-0 rounded-full p-[5px]
      bg-[conic-gradient(from_0deg,transparent_0deg,transparent_80deg,#FFD700_120deg,transparent_160deg,transparent_360deg)]
      animate-glow-spin
    "
    style={{
      maskImage: 'radial-gradient(circle at center, transparent 60%, white 61%)',
      WebkitMaskImage:
        'radial-gradient(circle at center, transparent 60%, white 61%)',
    }}
  />

  {/* Lớp nền chính */}
  <span
    className="
      absolute inset-[2px] rounded-full
      bg-[#1B4DFF]
      shadow-[0_0_25px_rgba(40,83,166,0.6)]
    "
  />

  {/* Nội dung nút */}
  <span className="relative z-10 flex items-center justify-center gap-2">
   ĐĂNG KÝ NGAY - MIỄN PHÍ TƯ VẤN
  </span>
</Button>

<style jsx>{`
  @keyframes glow-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .animate-glow-spin {
    animation: glow-spin 6s linear infinite;
  }
`}</style>

        </div>
      </section>

      <RegistrationPopup
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </>
  )
}
