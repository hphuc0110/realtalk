"use client"

import type React from "react"
import { useState } from "react"
import { Facebook, Youtube, MessageCircle, Phone, Mail, MapPin, ArrowUp } from "lucide-react"

export { Footer }
export default Footer

function Footer() {
  const [formData, setFormData] = useState({
    program: "",
    name: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-50 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-[#000072] mb-6">Thông tin liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#000072] mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Hotline:</p>
                  <a href="tel:0325194889" className="text-[#000072] hover:underline">
                    0325 194 889
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#000072] mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email:</p>
                  <a href="mailto:support@honglinheducation.vn" className="text-[#000072] hover:underline">
                    support@honglinheducation.vn
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#000072] mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Địa chỉ:</p>
                  <p className="text-gray-700">1G Trần Quang Diệu, Ô Chợ Dừa, Đống Đa, Hà Nội</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              {[Facebook, MessageCircle, Youtube, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#000072] p-3 rounded-full text-white hover:bg-[#b50001] transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-[#000072] mb-6">Về REALTALK</h3>
            <ul className="space-y-3">
              {["Liên hệ", "Điều khoản sử dụng", "FAQS"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#000072] transition-colors"
                  >
                    <div className="w-2 h-2 bg-[#000072] rounded-full"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#000072] mb-6">Thông tin khác</h3>
            <ul className="space-y-3">
              {[
                "Kiểm tra trình độ",
                "Chương trình đào tạo",
                "Chính sách thanh toán",
                "Chia sẻ kiến thức",
                "Sự kiện nổi bật",
                "Tuyển dụng",
                "Đối tác",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#000072] transition-colors"
                  >
                    <div className="w-2 h-2 bg-[#000072] rounded-full"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section (đưa ra ngoài grid) */}
        <div className="border-t border-gray-200 pt-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo and Copyright */}
            <div className="flex items-center gap-6">
              <div className="text-2xl font-bold text-[#000072]">HLE</div>
              <div className="text-gray-600 text-sm">© 2025 HLE. All rights reserved.</div>
              <a href="#" className="text-gray-600 hover:text-[#000072] text-sm">
                Privacy Policy
              </a>
            </div>

            {/* Network Links */}
            <div className="text-center md:text-right">
              <p className="text-sm font-semibold text-[#000072] mb-1">Part of our network</p>
              <a
                href="https://hle.edu.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#000072] hover:underline"
              >
                Xem thêm về chúng tôi
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 bg-[#000072] text-white p-3 rounded-full shadow-lg hover:bg-[#b50001] transition-colors z-50"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Chat Button */}
      <a
        href="https://zalo.me/0325194889"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  )
}
