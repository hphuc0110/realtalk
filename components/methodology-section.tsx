"use client"

import { useState } from "react"
import { RefreshCw, User, Users, Shield } from "lucide-react"

export function MethodologySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const steps = [
    {
      icon: RefreshCw,
      label: "PHƯƠNG PHÁP KÍCH HOẠT (ACTIVATION)",
      content: "Kích hoạt vốn tiếng anh sẵn có tự tin giao tiếp ngay",
    },
    {
      icon: User,
      label: "HỆ SINH THÁI HỌC TẬP TOÀN DIỆN",
      content:
        "Sự kết hợp giữa lớp học 1-1 với chuyên gia, tự học có định hướng và luyện tập với AI",
    },
    {
      icon: Users,
      label: "CÁ NHÂN HOÁ 100%",
      content: "Phù hợp với mục tiêu cá nhân",
    },
    {
      icon: Shield,
      label: "TẬP TRUNG VÀO ỨNG DỤNG",
      content: "Thực tế",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#dbe4f9] to-[#b9c7e8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#264ca3] mb-4">
            Phương Pháp Đào Tạo
          </h2>
          <p className="text-lg lg:text-xl italic text-black/80">
            PHÙ HỢP NHẤT VỚI NGƯỜI TRƯỞNG THÀNH
          </p>
        </div>

        {/* Các bước */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative max-w-[200px] text-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon */}
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-[#4f7de8] to-[#264ca3] flex items-center justify-center mb-3 shadow-md transition-transform duration-300 hover:scale-110">
                  <step.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>

                {/* Label */}
                <span className="text-black font-semibold text-sm lg:text-base">
                  {step.label}
                </span>

                {/* Tooltip hiển thị nội dung */}
                {hoveredIndex === index && (
                  <div className="absolute top-full mt-5 w-60 bg-white text-black text-sm p-4 rounded-xl shadow-lg z-10 animate-fadeInUp">
                    {step.content}
                  </div>
                )}

                {/* Thanh nối giữa các bước (ẩn trên mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-[-60px] w-16 lg:w-20 h-0.5 bg-gradient-to-r from-[#4f7de8] to-[#264ca3]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
