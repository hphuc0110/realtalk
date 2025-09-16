import Image from "next/image"
import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  image: string
  date: string
  category: string
  readTime: string
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-gradient-to-br from-[#000072] to-[#b9c7e8] rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Ảnh cố định 300x300 */}
      <div className="flex justify-center items-center bg-gray-100">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={300}
          height={300}
          className="object-cover w-[300px] h-[300px] group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-yellow-200 transition-colors">
          <Link href={`/blog/${post.id}`} className="text-balance">
            {post.title}
          </Link>
        </h3>

        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-yellow-200 font-medium hover:text-yellow-300 transition-colors"
        >
          Đọc thêm
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
