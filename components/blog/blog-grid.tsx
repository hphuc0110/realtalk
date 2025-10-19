import { BlogCard } from "./blog-card"

const blogPosts = [
  {
    id: "star-method",
    title: "5 Tình Huống Đi Làm Mà Bạn Không Thể Thiếu Tiếng Anh",
    image: "/images/blog/Bai-1.webp",
    date: "2024-12-15",
    category: "Phỏng vấn",
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
  {
    id: "tinh-huong-thuc-te",
    title: "Học tiếng Anh qua tình huống thực tế: Phương pháp giúp bạn nhớ lâu và nói tự nhiên",
    image: "/images/blog/1.png",
    date: "2024-10-12",
    category: "Phỏng vấn",
    readTime: "5 phút đọc",
  },
  {
    id: "5-thoi-quen",
    title: "5 thói quen nhỏ giúp bạn giỏi tiếng Anh hơn mỗi ngày mà không cần học quá nhiều",
    image: "/images/blog/2.png",
    date: "2024-09-02",
    category: "Phỏng vấn",
    readTime: "6 phút đọc",
  },
  {
    id: "bi-quyet-noi",
    title: "Storytelling – Bí quyết khiến bài nói tiếng Anh trở nên đáng nhớ",
    image: "/images/blog/3.png",
    date: "2024-09-02",
    category: "Phỏng vấn",
    readTime: "6 phút đọc",
  },
]

export function BlogGrid() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Bài viết mới nhất</h2>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-[#191980] text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            Tất cả
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
