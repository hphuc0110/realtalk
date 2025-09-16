import { BlogCard } from "./blog-card"

const blogPosts = [
  {
    id: "star-method",
    title: "5 Tình Huống Đi Làm Mà Bạn Không Thể Thiếu Tiếng Anh",
    image: "/images/blog/star-method.webp",
    date: "2024-12-15",
    category: "Phỏng vấn",
    readTime: "5 phút đọc",
  },
  {
    id: "experience-storytelling",
    title: "Não Bộ Và Cách Chúng Ta Ghi Nhớ Ngôn Ngữ",
    image: "/images/blog/experience-storytelling.webp",
    date: "2024-12-12",
    category: "Kỹ năng giao tiếp",
    readTime: "6 phút đọc",
  },
  {
    id: "tell-me-about-yourself",
    title: "Bí Mật “Kích Hoạt Toàn Bộ Não Bộ” Khi Học Ngoại Ngữ",
    image: "/images/blog/tell-me-about-yourself.webp",
    date: "2024-12-10",
    category: "Phỏng vấn",
    readTime: "7 phút đọc",
  },
]

export function BlogGrid() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Bài viết mới nhất</h2>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            Tất cả
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            Phỏng vấn
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            Kỹ năng giao tiếp
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
