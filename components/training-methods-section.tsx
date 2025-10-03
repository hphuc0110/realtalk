export function TrainingMethodsSection() {
  const methods = [
    {
      image: "/images/training/phan-bien.webp",
      description: "Toàn bộ luyện tập diễn ra ngay trên lớp, có giảng viên phản hồi tức thì.",
    },
    {
      image: "/images/training/nghe-thuat-ke-chuyen.webp",
      description: "90% thời lượng là thực hành nói",
    },
    {
      image: "/images/training/ban-linh.webp",
      description: "Nghe trong tình huống công việc thật.",
    },
    {
      image: "/images/training/education-2.webp",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#000072] to-[#2850A0] relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/5 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white/5 animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-8 relative z-10">
      <div className="text-center mb-16">
  <div className="inline-block bg-black/30 backdrop-blur-sm rounded-2xl p-8">
    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
      HỌC VIÊN TẠI REALTALK 
    </h2>
    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
      KHÔNG CẦN LÀM BÀI TẬP VỀ NHÀ
    </h2>
    <div className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
      {/* nội dung phụ nếu có */}
    </div>
  </div>
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-white/20 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/10">
                <div className="aspect-[4/5] relative">
                  <img
                    src={method.image || "/placeholder.svg"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay mô tả (chỉ hiện khi hover) */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex justify-center items-center p-6 text-center">
                    <p className="text-white/90 text-sm leading-relaxed">{method.description}</p>
                  </div>

                  {/* Tiêu đề luôn hiển thị dưới cùng */}
                  <div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
        <p className="mt-10 text-center italic text-white/90 text-lg">
        <strong>Bài tập không mang về, vì đã luyện đủ và đúng ngay tại lớp.</strong>
</p>
      </div>
    </section>
  )
}
