import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Target, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Сделано в Хакасии</h1>
                <p className="text-sm text-gray-600">Каталог предпринимателей</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Главная
              </Link>
              <Link href="/catalog" className="text-gray-700 hover:text-blue-600">
                Каталог
              </Link>
              <Link href="/about" className="text-blue-600 font-medium">
                О программе
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Региональная программа поддержки</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">О программе "Сделано в Хакасии"</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Программа поддержки малого и среднего предпринимательства, направленная на развитие местного производства и
            повышение конкурентоспособности хакасских товаров и услуг
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Наша миссия</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Создание благоприятных условий для развития малого и среднего бизнеса в Республике Хакасия, поддержка
                местных производителей и повышение узнаваемости хакасских брендов на российском рынке.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Наше видение</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Хакасия как регион с развитой экономикой, где местные предприниматели успешно конкурируют на федеральном
                уровне, создавая качественные товары и услуги под брендом "Сделано в Хакасии".
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Program Benefits */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Преимущества участия в программе</CardTitle>
            <CardDescription>
              Что получают предприниматели, присоединившиеся к программе "Сделано в Хакасии"
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Льготное кредитование</h3>
                  <p className="text-sm text-gray-600">Доступ к льготным кредитам и субсидиям для развития бизнеса</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Маркетинговая поддержка</h3>
                  <p className="text-sm text-gray-600">Продвижение продукции под единым региональным брендом</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Налоговые льготы</h3>
                  <p className="text-sm text-gray-600">Специальные налоговые режимы для участников программы</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Образовательные программы</h3>
                  <p className="text-sm text-gray-600">Бесплатные курсы и тренинги по развитию бизнеса</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Участие в выставках</h3>
                  <p className="text-sm text-gray-600">
                    Представление продукции на региональных и федеральных выставках
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Консультационная поддержка</h3>
                  <p className="text-sm text-gray-600">
                    Профессиональные консультации по юридическим и финансовым вопросам
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Результаты программы</CardTitle>
            <CardDescription>Достижения программы "Сделано в Хакасии" за время работы</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">150+</h3>
                <p className="text-gray-600">Участников программы</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">2.5 млрд</h3>
                <p className="text-gray-600">Рублей оборота участников</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">1200+</h3>
                <p className="text-gray-600">Созданных рабочих мест</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">25</h3>
                <p className="text-gray-600">Отраслей экономики</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Join */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Как стать участником программы</CardTitle>
            <CardDescription>Простые шаги для присоединения к программе "Сделано в Хакасии"</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Подача заявки</h3>
                <p className="text-sm text-gray-600">
                  Заполните онлайн-заявку на официальном сайте программы или обратитесь в центр поддержки
                  предпринимательства
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Рассмотрение документов</h3>
                <p className="text-sm text-gray-600">
                  Экспертная комиссия рассматривает заявку и документы в течение 30 рабочих дней
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Получение статуса</h3>
                <p className="text-sm text-gray-600">
                  При положительном решении вы получаете статус участника и доступ ко всем льготам программы
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Готовы присоединиться к программе?</h2>
          <p className="mb-6 opacity-90">Станьте частью успешного сообщества хакасских предпринимателей</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Подать заявку
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
    </div>
  )
}
