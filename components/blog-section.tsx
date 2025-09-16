"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Cách để thuyết trình hay hơn bằng phương pháp Storytelling",
      description: "Cách để thuyết trình hay hơn bằng phương pháp Storytelling",
      image: "/placeholder.svg?height=300&width=400",
      category: "Storytelling",
      link: "/blog/storytelling",
    },
    {
      title: "Mô đầu thuyết trình chiến lược với SCOA Model trong 60s",
      description: "Mô đầu bài thuyết trình bằng mô hình SCOA trong 60s",
      image: "/placeholder.svg?height=300&width=400&A+session+business+meeting=",
      category: "Strategy",
      link: "/blog/scoa-model",
    },
    {
      title: "THE ARENA – Làm chủ kỹ năng trả lời Q&A bằng tiếng Anh cho lãnh đạo",
      description: "THE ARENA – Làm chủ kỹ năng trả lời Q&A bằng tiếng Anh cho lãnh đạo",
      image: "/placeholder.svg?height=300&width=400",
      category: "Q&A Skills",
      link: "/blog/arena-qa",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-black/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#000072]">Blog</span> RealTalk
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Khám phá kiến thức và kỹ năng thuyết trình hiện đại cùng chuyên gia RealTalk
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image + Category */}
              <div className="relative aspect-video">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#000072] text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-black font-bold text-lg mb-3 leading-snug line-clamp-3 group-hover:text-[#000072] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">{post.description}</p>

                {/* Xem chi tiết */}
                <Link
                  href={post.link}
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-[#000072] hover:bg-[#2451A3] text-white font-semibold py-2.5 px-5 rounded-lg transition-colors"
                >
                  Đọc chi tiết <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
