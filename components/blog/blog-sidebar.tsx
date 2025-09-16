import Image from "next/image"
import Link from "next/link"
import { TrendingUp, Clock, Users } from "lucide-react"

const popularPosts = [
  {
    id: "star-method",
    title: "5 Tình Huống Đi Làm Mà Bạn Không Thể Thiếu Tiếng Anh",
    image: "/images/blog/Bai-1.webp",
    readTime: "5 phút đọc",
  },
  {
    id: "experience-storytelling",
    title: "Não Bộ Và Cách Chúng Ta Ghi Nhớ Ngôn Ngữ",
    image: "/images/blog/bai-2.webp",
    date: "2024-12-12",
    category: "Kỹ năng giao tiếp",
    readTime: "6 phút đọc",
  },
  {
    id: "tell-me-about-yourself",
    title: "Bí Mật “Kích Hoạt Toàn Bộ Não Bộ” Khi Học Ngoại Ngữ",
    image: "/images/blog/bai-3.webp",
    date: "2024-12-10",
    category: "Phỏng vấn",
    readTime: "7 phút đọc",
  },
]

const categories = [
  { name: "Phỏng vấn", count: 3 },
  { name: "Kỹ năng giao tiếp", count: 2 },
  { name: "Phát triển sự nghiệp", count: 1 },
  { name: "Tiếng Anh thương mại", count: 4 },
  { name: "Presentation Skills", count: 2 },
]

export function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Popular Posts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Bài viết phổ biến</h3>
        </div>

        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group block">
              <div className="flex gap-3">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Chủ đề</h3>
        </div>

        <div className="space-y-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{category.name}</span>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{category.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
