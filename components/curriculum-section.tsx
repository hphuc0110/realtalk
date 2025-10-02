"use client"

import { useState } from "react"

export function CurriculumSection() {
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
      details: `Xây dựng nền tảng giao tiếp cốt lõi `,
    },
    {
      number: 3,
      title: "Situational Application",
      subtitle: "28 BUỔI",
      color: "bg-gray-600",
      details: `Ứng dụng vào tình huống thực tế theo track đã chọn `,
    },
    {
      number: 4,
      title: "Final Assessment",
      subtitle: "2 BUỔI",
      color: "bg-gray-600",
      details: `Luyện tập tổng hợp và đánh giá cuối khóa `,
    },
  ]

  const [selected, setSelected] = useState<number | null>(null)

  const toggle = (number: number) => {
    setSelected(selected === number ? null : number) // click lần 2 sẽ đóng lại
  }

  return (
    <section className="py-20 bg-white text-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#000072] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Lộ trình 5+1
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            BẠN SẼ NHẬN ĐƯỢC HƠN CẢ MỘT{" "}
            <span className="text-[#000072]">KHÓA HỌC</span>
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-[#000072]">
            TIẾNG ANH
          </h3>
        </div>

        {/* Module list with expandable details */}
        <div className="space-y-4">
          {modules.map((module) => (
            <div key={module.number}>
              {/* Module header */}
              <div
                onClick={() => toggle(module.number)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-500 
                  ${selected === module.number ? "bg-[#000072] text-white" : `${module.color} text-white`}
                  hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-sm font-bold text-white">
                    {module.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{module.title}</h3>
                    <p className="text-sm opacity-80">{module.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Details (only show if selected) */}
              {selected === module.number && (
                <div className="bg-white rounded-lg p-6 mt-2 mb-6 text-gray-900 shadow-md animate-in fade-in slide-in-from-top-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#000072] text-white rounded flex items-center justify-center text-sm font-bold">
                      {module.number}
                    </div>
                    <div>
                      <h4 className="font-bold">{module.subtitle}</h4>
                      <p className="text-sm text-gray-600">{module.title}</p>
                    </div>
                  </div>

                  {/* Hiển thị đoạn văn */}
                  <div className="text-sm leading-relaxed whitespace-pre-line">
                    <p>{module.details}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
