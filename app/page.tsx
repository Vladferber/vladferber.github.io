import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Award, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const featuredBusinesses = [
  {
    id: 1,
    name: "Хакасский мёд",
    category: "Продукты питания",
    description: "Натуральный мёд с пасек Хакасии",
    image: "/placeholder.svg?height=200&width=300",
    location: "Абакан",
  },
  {
    id: 2,
    name: "Саянские травы",
    category: "Здоровье и красота",
    description: "Лечебные травы и фиточаи",
    image: "/placeholder.svg?height=200&width=300",
    location: "Черногорск",
  },
  {
    id: 3,
    name: "Хакасские сувениры",
    category: "Ремесла и сувениры",
    description: "Традиционные изделия народных мастеров",
    image: "/placeholder.svg?height=200&width=300",
    location: "Абакан",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="hero-content">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                Региональная программа поддержки
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">Официальный логотип</span> для продукции из Хакасии
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl">
                Подтвердите происхождение ваших товаров и получите конкурентное преимущество на рынке с официальным
                знаком качества "Сделано в Хакасии"
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  <Link href="/apply">Подать заявку</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://мойбизнес19.рф/assets/files/reestr-poluchatelej-logotipa-sdelano-v-hakasii-na-12.05.2025.pdf">
                    Реестр получателей логотипа
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-blue-600">60+</span>
                  <span className="text-gray-600 text-sm">компаний уже используют</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-blue-600">24</span>
                  <span className="text-gray-600 text-sm">часа обработка заявки</span>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-0">
              <Image src="/logo.svg" alt="логотип Сделано в Хакасии" width={400} height={400} className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">150+</h3>
              <p className="text-gray-600">Предпринимателей в программе</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">25</h3>
              <p className="text-gray-600">Категорий бизнеса</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">12</h3>
              <p className="text-gray-600">Городов и районов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему стоит получить логотип?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Использование официального знака "Сделано в Хакасии" дает вашей продукции значительные преимущества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4 text-blue-600">🤝</div>
                <CardTitle>Поддержка</CardTitle>
                <CardDescription>
                  Покажите свою причастность к развитию экономики Хакасии и получите поддержку региональных программ
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4 text-blue-600">📈</div>
                <CardTitle>Рост продаж</CardTitle>
                <CardDescription>
                  Продукция с подтвержденным местным происхождением вызывает больше доверия у потребителей
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4 text-blue-600">✅</div>
                <CardTitle>Репутация качества</CardTitle>
                <CardDescription>
                  Ассоциация с природой и экологией Хакасии повышает воспринимаемое качество ваших товаров
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 how-it-works">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Как получить логотип?</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Простая процедура оформления, которая займет минимум вашего времени
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div className="text-center">
              <div className="step-number">1</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Подача заявки</h3>
              <p className="text-white/80">
                Заполните онлайн-форму и приложите необходимые документы о происхождении продукции
              </p>
            </div>

            <div className="text-center">
              <div className="step-number">2</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Проверка</h3>
              <p className="text-white/80">
                Наши специалисты проверят соответствие вашей продукции требованиям программы
              </p>
            </div>

            <div className="text-center">
              <div className="step-number">3</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Получение</h3>
              <p className="text-white/80">
                После одобрения вы получите право использовать логотип на упаковке и в рекламе
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Рекомендуемые предприниматели</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Познакомьтесь с успешными участниками программы "Сделано в Хакасии"
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBusinesses.map((business) => (
              <Card key={business.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image src={business.image || "/placeholder.svg"} alt={business.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{business.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {business.location}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{business.name}</CardTitle>
                  <CardDescription>{business.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={`/business/${business.id}`}>Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/catalog">
                Смотреть все <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Требования к участникам</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Убедитесь, что ваша компания соответствует критериям для получения знака "Сделано в Хакасии"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4 text-blue-600">📝</div>
                <CardTitle>Юридическая регистрация</CardTitle>
                <CardDescription>
                  Компания должна быть зарегистрирована на территории Республики Хакасия
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4 text-blue-600">📊</div>
                <CardTitle>Качество продукции</CardTitle>
                <CardDescription>
                  Продукция должна соответствовать всем стандартам качества и безопасности
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4 text-blue-600">📦</div>
                <CardTitle>Упаковка</CardTitle>
                <CardDescription>
                  Возможность размещения логотипа на упаковке продукции или в точках продаж
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link href="/apply">Подать заявку</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://мойбизнес19.рф/assets/files/polozhenie-ot-18.09.2023.pdf">
                Положение об использовании логотипа (PDF)
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ответы на наиболее распространенные вопросы о знаке "Сделано в Хакасии"
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <FaqItem
              question="Какие компании могут получить знак 'Сделано в Хакасии'?"
              answer="Знак могут получить юридические лица и индивидуальные предприниматели, зарегистрированные на территории Республики Хакасия, чья продукция соответствует критериям программы."
            />
            <FaqItem
              question="Сколько стоит получение знака?"
              answer="Получение права на использование знака 'Сделано в Хакасии' абсолютно бесплатно для всех компаний, соответствующих требованиям программы. Это региональная инициатива по поддержке местных производителей."
            />
            <FaqItem
              question="Как долго длится проверка заявки?"
              answer="Стандартный срок рассмотрения заявки - 15 рабочих дней. В некоторых случаях, когда требуется дополнительная проверка документов или характеристик продукции, срок может быть увеличен до 20 рабочих дней."
            />
            <FaqItem
              question="На какой срок выдается право использования знака?"
              answer="Право использования знака выдается на срок действия документа, подтверждающего качество и безопасность продукции, прикладываемого к заявлению. Возможно последующее продление срока действия договора (соглашения) при предъявлении новых сертификатов соответствия продукции."
            />
            <FaqItem
              question="Можно ли использовать знак для продукции, не соответствующей требованиям?"
              answer="Нет, использование знака для продукции, не соответствующей требованиям, запрещено и может повлечь административную ответственность."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-blue-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Готовы присоединиться к программе?</h2>
            <p className="mb-6 opacity-90">Станьте частью успешного сообщества хакасских предпринимателей</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/apply">Подать заявку</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <Link href="/catalog">
                  Смотреть участников <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{answer}</p>
      </CardContent>
    </Card>
  )
}
