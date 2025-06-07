"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Award } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 border-b ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="https://мойбизнес19.рф" className="transition-transform hover:scale-105">
              <Image src="/logos/moibiznes-logo.svg" alt="Лого ЦМБ" width={48} height={48} className="h-12 w-auto" />
            </Link>
            <Link href="https://мойбизнес19.рф" className="transition-transform hover:scale-105">
              <Image src="/logos/fond-razvitiya.png" alt="Лого Фонда" width={48} height={32} className="h-8 w-auto" />
            </Link>
            <Link href="/" className="transition-transform hover:scale-105">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
            </Link>
          </div>

          <button
            className="md:hidden text-2xl text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>

          <nav
            className={`${
              isMobileMenuOpen
                ? "fixed inset-0 bg-white/98 backdrop-blur-sm flex flex-col justify-center items-center z-50 transform translate-y-0"
                : "hidden md:block"
            } transition-transform duration-300`}
          >
            <ul className={`${isMobileMenuOpen ? "flex flex-col gap-6 text-center" : "flex gap-8"}`}>
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 relative after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className="text-gray-700 hover:text-blue-600 relative after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-600 relative after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  О программе
                </Link>
              </li>
              <li>
                <Link
                  href="/requirements"
                  className="text-gray-700 hover:text-blue-600 relative after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Требования
                </Link>
              </li>
              <li>
                <Link href="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6">
                    Подать заявку
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
