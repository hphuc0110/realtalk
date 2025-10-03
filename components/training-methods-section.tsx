"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { VideoModal } from "./video-modal"

export function TrainingMethodsSection() {
  const methods = [
    {
      title: "Phản biện & giải quyết vấn đề",
      video: "/videos/training/video-1.mp4",
    },
    {
      title: "Nghệ thuật kể chuyện (Storytelling)",
      video: "/videos/training/video-2.mp4",
    },
    {
      title: "Bản lĩnh từ sự nhuần nhuyễn",
      video: "/videos/training/video-3.mp4",
    },
  ]

  const [selectedVideo, setSelectedVideo] = useState<{ video: string; title: string } | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-[#3264C3] to-[#2850A0] relative overflow-hidden">
      {/* background animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/5 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white/5 animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mx-auto max-w-2xl">
            <h2 className="text-4xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              HỌC VIÊN TẠI REALTALK KHÔNG CẦN LÀM BÀI TẬP VỀ NHÀ
            </h2>
          </div>
        </div>

        {/* grid video cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {methods.map((method, index) => (
            <VideoCard
              key={index}
              title={method.title}
              video={method.video}
              onClick={() => setSelectedVideo(method)}
            />
          ))}
        </div>

        {/* text dưới cùng */}
        <p className="text-center text-white/90 text-lg font-medium italic drop-shadow-md">
          Bài tập không mang về, vì đã luyện đủ và đúng ngay tại lớp.
        </p>
      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoSrc={selectedVideo?.video || ""}
        title={selectedVideo?.title || ""}
      />
    </section>
  )
}

function VideoCard({
  title,
  video,
  onClick,
}: {
  title: string
  video: string
  onClick: () => void
}) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden rounded-2xl bg-white/20 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/10">
        <div className="aspect-[4/5] relative">
          <video src={video} className="w-full h-full object-cover" playsInline muted />

          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
              <Play className="w-8 h-8 text-[#3264C3] ml-1" fill="currentColor" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
            <h3 className="text-white font-semibold text-lg leading-tight drop-shadow-lg">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
