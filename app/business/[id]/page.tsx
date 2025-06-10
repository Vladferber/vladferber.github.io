import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"

// Mock data - в реальном приложении это будет загружаться из API
const businessData = {
  1: {
    id: 1,
    name: "Хакасский мёд",
    category: "Продукты питания",
    description:
      "Наша семейная пасека работает уже более 20 лет. Мы производим натуральный мёд высочайшего качества с пасек, расположенных в экологически чистых районах Хакасии. У нас вы найдете более 15 сортов мёда: липовый, гречишный, цветочный, таёжный и многие другие.",
    fullDescription:
      "Компания 'Хакасский мёд' была основана в 2019 году на базе семейной пасеки с многолетним опытом. Мы специализируемся на производстве натурального мёда и продуктов пчеловодства. Наши пасеки расположены в экологически чистых районах Республики Хакасия, что гарантирует высочайшее качество нашей продукции.\n\nМы предлагаем широкий ассортимент мёда: от классических сортов до редких таёжных видов. Вся продукция проходит строгий контроль качества и имеет необходимые сертификаты.",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    location: "Абакан",
    address: "ул. Пчеловодов, 15, Абакан",
    founded: "2019",
    employees: "5-10",
    phone: "+7 (3902) 123-456",
    email: "info@khakassia-honey.ru",
    website: "www.khakassia-honey.ru",
    products: ["Липовый мёд", "Гречишный мёд", "Цветочный мёд", "Таёжный мёд", "Прополис", "Пчелиная пыльца"],
    achievements: [
      "Лауреат конкурса 'Лучший продукт Хакасии 2022'",
      "Сертификат качества ГОСТ",
      "Участник программы 'Сделано в Хакасии' с 2020 года",
    ],
  },
}

export default function BusinessPage({ params }: { params: { id: string } }) {
  const business = businessData[Number.parseInt(params.id) as keyof typeof businessData]

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Предприниматель не найден</h1>
          <Button asChild>
            <Link href="/catalog">Вернуться к каталогу</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8 pt-32">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/catalog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к каталогу
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image src={business.image || "/placeholder.svg"} alt={business.name} fill className="object-cover" />
            </div>

            {/* Business Info */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="mb-2">
                    \
