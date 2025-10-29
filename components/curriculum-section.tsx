"use client"

import { useState } from "react"

export function CurriculumSection() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0)
  const [selected, setSelected] = useState<number | null>(null)

  const modules = [
    {
      number: 1,
      title: "Introduction",
      subtitle: "1 BUỔI",
      color: "bg-gray-600",
      details: `Xác lập mục tiêu, phương pháp học, chuẩn hóa phát âm`,
    },
    {
      number: 2,
      title: "Core Foundation",
      subtitle: "14 BUỔI",
      color: "bg-gray-600",
      details: `Xây dựng nền tảng giao tiếp cốt lõi`,
    },
    {
      number: 3,
      title: "Situational Application",
      subtitle: "28 BUỔI",
      color: "bg-gray-600",
      details: `Ứng dụng vào tình huống thực tế theo track đã chọn`,
    },
    {
      number: 4,
      title: "Final Assessment",
      subtitle: "2 BUỔI",
      color: "bg-gray-600",
      details: `Luyện tập tổng hợp và đánh giá cuối khóa`,
    },
  ]

  const steps = [
    { number: 1, 
      description: "1 tiếng mỗi ngày.", 
      color: "bg-[#000072]" 
    },
    {
      number: 5,
      description: "5 ngày 1 tuần.",
      color: "bg-[#000072]",
    },
    {
      number: 9,
      description: "9 tuần kỉ luật.",
      color: "bg-[#000072]",
    },
    {
      number: 45,
      description: "45 buổi kiên trì & kỉ luật.",
      color: "bg-[#000072]",
    },
  ]

  const toggleModule = (number: number) => {
    setSelected(selected === number ? null : number)
  }

  return (
    <section className="py-16 sm:py-20 bg-white text-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[#000072] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-2xl sm:text-3xl font-bold shadow-lg ring-4 ring-yellow-500 ring-offset-4 ring-offset-[#000072]">
            Lộ trình 45 buổi
          </div>
        </div>

        {/* Steps Section */}
        <div className="max-w-6xl mx-auto">
          {/* Step Buttons (Mobile) */}
          <div className="md:hidden flex justify-between items-center gap-2 pb-4 w-full">
  {steps.map((step, index) => (
    <div
      key={step.number}
      className="flex flex-col items-center flex-1 min-w-0"
    >
      <button
        onClick={() => setActiveStepIndex(index)}
        className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
          activeStepIndex === index
            ? "bg-gradient-to-br from-yellow-400 to-yellow-500 scale-105 shadow-yellow-400/40"
            : "bg-[#000072] hover:scale-105"
        }`}
      >
        <span className="text-sm sm:text-base font-bold text-white">
          {activeStepIndex > index ? "✓" : step.number}
        </span>
      </button>

    </div>
  ))}
</div>
          {/* Step Buttons (Desktop) */}
          <div className="hidden md:block relative mb-16">
            {/* Thanh nền */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-[#000072] rounded-full" />
            {/* Thanh tiến trình */}
            <div
              className="absolute top-8 left-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-700 ease-out shadow-lg shadow-yellow-400/50"
              style={{
                width: `${(activeStepIndex / (steps.length - 1)) * 100}%`,
              }}
            />
            {/* Nút step */}
            <div className="relative flex justify-between items-start">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center w-1/4">
                  <button
                    onClick={() => setActiveStepIndex(index)}
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 ${
                      activeStepIndex === index
                        ? "bg-gradient-to-br from-yellow-400 to-yellow-500 scale-125 -translate-y-2 shadow-yellow-400/50"
                        : activeStepIndex > index
                        ? "bg-gradient-to-br from-green-400 to-green-500 shadow-green-400/30"
                        : "bg-[#000072] hover:from-yellow-300 hover:to-yellow-400"
                    }`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {activeStepIndex > index ? "✓" : step.number}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Detail */}
          <div className="relative min-h-[200px]">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`absolute right-1/2 translate-x-1/2 transition-all duration-700 max-w-2xl w-full ${
                  activeStepIndex === index
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div
                  className={`relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br ${step.color} shadow-2xl overflow-hidden transition-shadow duration-500`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl">
                        <span className="text-2xl sm:text-3xl font-bold text-white">{step.number}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">{step.description}</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* "Bạn sẽ nhận được..." */}
        <div className="text-center mt-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
            BẠN SẼ NHẬN ĐƯỢC HƠN CẢ MỘT{" "}
            <span className="text-[#000072] bg-[#000072] bg-clip-text text-transparent">
              KHÓA HỌC TIẾNG ANH
            </span>
          </h2>
        </div>

        {/* Module List */}
        <div className="mt-12 sm:mt-20 space-y-4">
          {modules.map((module) => (
            <div key={module.number}>
              <div
                onClick={() => toggleModule(module.number)}
                className={`p-5 sm:p-6 rounded-xl cursor-pointer transition-all duration-500 ${
                  selected === module.number ? "bg-[#000072] text-white" : `${module.color} text-white`
                } hover:scale-[1.02] hover:shadow-xl`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-sm font-bold text-white">
                    {module.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg">{module.title}</h3>
                    <p className="text-xs sm:text-sm opacity-80">{module.subtitle}</p>
                  </div>
                </div>
              </div>

              {selected === module.number && (
                <div className="bg-white rounded-lg p-5 sm:p-6 mt-2 mb-4 text-gray-900 shadow-md animate-in fade-in slide-in-from-top-4">
                  <h4 className="font-bold mb-2 text-sm sm:text-base">{module.subtitle}</h4>
                  <p className="text-sm leading-relaxed">{module.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
