import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex gap-6">
              <Image
                src="/logos/moibiznes-logo.svg"
                alt="Центр Мой Бизнес"
                width={40}
                height={40}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/logos/fond-razvitiya.png"
                alt="Фонд Развития Хакасии"
                width={40}
                height={32}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-gray-400">Официальный знак качества для продукции, произведенной в Республике Хакасия</p>
            <div className="flex gap-4">
              <a
                href="https://ok.ru/group/64303052488939"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-light hover:transform hover:-translate-y-1 transition-all"
                aria-label="Одноклассники"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M184.2 177.1c0-22.1 17.9-40 39.8-40s39.8 17.9 39.8 40c0 22-17.9 39.8-39.8 39.8s-39.8-17.9-39.8-39.8zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-305.1 97.1c0 44.6 36.4 80.9 81.1 80.9s81.1-36.2 81.1-80.9c0-44.8-36.4-81.1-81.1-81.1s-81.1 36.2-81.1 81.1zm174.5 90.7c-4.6-9.1-17.3-16.8-34.1-3.6 0 0-22.7 18-59.3 18s-59.3-18-59.3-18c-16.8-13.2-29.5-5.5-34.1 3.6-7.9 16.1 1.1 23.7 21.4 37 17.3 11.1 41.2 15.2 56.6 16.8l-12.9 12.9c-18.2 18-35.5 35.5-47.7 47.7-17.6 17.6 10.7 45.8 28.4 28.6l47.7-47.9c18.2 18.2 35.7 35.7 47.7 47.9 17.6 17.2 46-10.7 28.6-28.6l-47.7-47.7-13-12.9c15.5-1.6 39.1-5.9 56.2-16.8 20.4-13.3 29.3-21 21.5-37z"
                    fill="white"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@moibiznes19"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-light hover:transform hover:-translate-y-1 transition-all"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                    fill="white"
                  ></path>
                </svg>
              </a>
              <a
                href="https://vk.com/moibiznes19"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-light hover:transform hover:-translate-y-1 transition-all"
                aria-label="ВКонтакте"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M31.5 63.5C0 95 0 145.7 0 247V265C0 366.3 0 417 31.5 448.5C63 480 113.7 480 215 480H233C334.3 480 385 480 416.5 448.5C448 417 448 366.3 448 265V247C448 145.7 448 95 416.5 63.5C385 32 334.3 32 233 32H215C113.7 32 63 32 31.5 63.5zM75.6 168.3H126.7C128.4 253.8 166.1 290 196 297.4V168.3H244.2V242C273.7 238.8 304.6 205.2 315.1 168.3H363.3C359.3 187.4 351.5 205.6 340.2 221.6C328.9 237.6 314.5 251.1 297.7 261.2C316.4 270.5 332.9 283.6 346.1 299.8C359.4 315.9 369 334.6 374.5 354.7H321.4C316.6 337.3 306.6 321.6 292.9 309.8C279.1 297.9 262.2 290.4 244.2 288.1V354.7H238.4C136.3 354.7 78 284.7 75.6 168.3z"
                    fill="white"
                  ></path>
                </svg>
              </a>
              <a
                href="https://t.me/moibizness19"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-light hover:transform hover:-translate-y-1 transition-all"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path
                    d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-gray-400 hover:text-white transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  О программе
                </Link>
              </li>
              <li>
                <Link href="/requirements" className="text-gray-400 hover:text-white transition-colors">
                  Требования
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-400 hover:text-white transition-colors">
                  Подать заявку
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Категории</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/catalog?category=food" className="text-gray-400 hover:text-white transition-colors">
                  Продукты питания
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=crafts" className="text-gray-400 hover:text-white transition-colors">
                  Ремесла
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=agriculture" className="text-gray-400 hover:text-white transition-colors">
                  Сельхозпродукция
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=industrial" className="text-gray-400 hover:text-white transition-colors">
                  Промышленные товары
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=services" className="text-gray-400 hover:text-white transition-colors">
                  Услуги
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Контакты</h3>
            <div className="space-y-4 text-gray-400">
              <p className="font-semibold text-white">Фонд развития Республики Хакасия</p>
              <p>655010, Республика Хакасия, г. Абакан, пр-т. Дружбы Народов, д.2а, стр.1, помещение 4Н.</p>
              <p>8-800-350-37-53</p>
              <p>fondrh@mail.ru</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Фонд развития Республики Хакасия. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
