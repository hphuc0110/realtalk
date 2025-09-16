"use client"

import { useState } from "react"

export function CurriculumSection() {
  const modules = [
    {
      number: 1,
      title: "Tiếng Anh giao tiếp hàng ngày ",
      subtitle: "General Communication Skills – GCS",
      color: "bg-gray-600",
      details: `- Khóa học trang bị cho học viên vốn ngôn ngữ và kỹ năng thiết yếu để tự tin trong mọi tình huống đời sống thường nhật. 
- Làm quen, duy trì trò chuyện ngắn small talk, giới thiệu bản thân và người khác một cách tự nhiên. 
- Miêu tả con người, địa điểm, đồ vật và hoạt động thường ngày một cách sinh động. 
- Tự tin kể lại trải nghiệm, sự kiện đã qua hoặc kế hoạch trong tương lai. 
- Diễn đạt ý kiến, sở thích, thể hiện sự đồng tình/không đồng tình một cách lịch thiệp. 
- Sử dụng ngôn ngữ chức năng để đưa ra yêu cầu, lời mời, lời khuyên, chỉ đường hiệu quả. 
- Vận dụng chiến lược giao tiếp như làm rõ, xác nhận lại thông tin hoặc ngắt lời một cách tinh tế. 
👉 Kết quả đạt được: Học viên có thể giao tiếp tự nhiên, xây dựng kết nối và mở rộng mối quan hệ trong cả công việc lẫn cuộc sống hàng ngày.`,
    },
    {
      number: 2,
      title: "Tiếng Anh công việc ",
      subtitle: "Business English Skills – BES",
      color: "bg-gray-600",
      details: `Khóa học tập trung phát triển khả năng giao tiếp chuyên nghiệp, giúp học viên làm việc hiệu quả trong môi trường công sở và quốc tế:
- Tạo dựng mối quan hệ chuyên nghiệp, làm small talk và tự giới thiệu vai trò trong công ty.
- Trình bày sản phẩm, dịch vụ hoặc mô tả quy trình/cơ cấu công ty với khách hàng và đối tác.
- Báo cáo tiến độ, tóm lược dự án và định hướng bước tiếp theo một cách súc tích.
- Đóng góp ý kiến, đưa ra đề xuất, phản hồi hoặc tranh luận trong cuộc họp một cách xây dựng.
- Viết email và thực hiện cuộc gọi công việc (sắp xếp lịch hẹn, xác nhận, giao phó nhiệm vụ) chuyên nghiệp và chuẩn mực.
- Làm rõ điều khoản, tổng hợp ý chính, dẫn dắt thảo luận và tham gia đàm phán cơ bản.
- Giải quyết các tình huống công sở như phàn nàn từ khách hàng, sự cố kỹ thuật, hay chậm tiến độ.
👉 Kết quả đạt được: Học viên sẽ sử dụng tiếng Anh một cách tự tin, chuẩn mực và thuyết phục trong môi trường làm việc, từ đó nâng cao hiệu quả công việc và giá trị nghề nghiệp.`,
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
