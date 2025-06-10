"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Search, Filter } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const businesses = [
  {
    id: 1,
    name: "Хакасский мёд",
    category: "Продукты питания",
    description: "Натуральный мёд с пасек Хакасии. Производим более 15 сортов мёда.",
    image: "/placeholder.svg?height=200&width=300",
    location: "Абакан",
    founded: "2019",
    employees: "5-10",
  },
  {
    id: 2,
    name: "Саянские травы",
    category: "Здоровье и красота",
    description: "Лечебные травы и фиточаи из экологически чистых районов Саян.",
    image: "/placeholder.svg?height=200&width=300",
    location: "Черногорск",
    founded: "2020",
    employees: "3-5",
  },
  {
    id: 3,
    name: "Хакасские сувениры",
    category: "Ремесла и сувениры",
    description: "Традиционные изделия народных мастеров Хакасии.",
    image: "/placeholder.svg?height=200&width=300",
    location: "Абакан",
    founded: "2018",
    employees: "10-15",
  },
  {
    id: 4,
    name: "Молочная ферма 'Таштып'",
    category: "Продукты питания",
    description: "Свежие молочные продукты от местных фермеров.",
    image: "/placeholder.svg?height=200&width=300",
    location: "Таштып",
    founded: "2021",
    employees: "15-20",
  },
  {
    id: 5,
    name: "Хакасская керамика",
    category: "Ремесла и сувениры",
    description: "Уникальная керамика ручной работы с национальными орнаментами.",
    image: "/placeholder.svg?height=200&width=300",
    location: "Абакан",
    founded: "2017",
    employees: "5-10",
  },
  {
    id: 6,
    name: "IT-Решения Хакасии",
    category: "IT и технологии",
    description: "Разработка программного обеспечения для местного бизнеса.",
    image: "/placeholder.svg?height=200&width=300",
    location: "Абакан",
    founded: "2022",
    employees: "8-12",
  },
]

const categories = [
  "Все категории",
  "Продукты питания",
  "Здоровье и красота",
  "Ремесла и сувениры",
  "IT и технологии",
  "Услуги",
  "Производство",
]

const locations = ["Все города", "Абакан", "Черногорск", "Таштып", "Саяногорск", "Сорск"]

export default function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Все категории")
  const [selectedLocation, setSelectedLocation] = useState("Все города")

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch =
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Все категории" || business.category === selectedCategory
    const matchesLocation = selectedLocation === "Все города" || business.location === selectedLocation

    return matchesSearch && matchesCategory && matchesLocation
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8 pt-32">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Каталог предпринимателей</h1>
          <p className="text-gray-600">Найдите местных производителей и поставщиков услуг</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <h2 className="font-semibold text-gray-900">Фильтры</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Поиск по названию или описанию..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите город" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Найдено предпринимателей: <span className="font-semibold">{filteredBusinesses.length}</span>
          </p>
        </div>

        {/* Business Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBusinesses.map((business) => (
            <Card key={business.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image src={business.image || "/placeholder.svg"} alt={business.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{business.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {business.location}
                  </div>
                </div>
                <CardTitle className="text-xl">{business.name}</CardTitle>
                <CardDescription className="line-clamp-2">{business.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Основан: {business.founded}</span>
                  <span>Сотрудников: {business.employees}</span>
                </div>
                <Button asChild className="w-full">
                  <Link href={`/business/${business.id}`}>Подробнее</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBusinesses.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ничего не найдено</h3>
            <p className="text-gray-600">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
