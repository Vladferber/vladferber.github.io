// JavaScript для страницы каталога

// Данные предпринимателей
const businessesData = [
  {
    id: 1,
      name: "Саянский мясокомбинат",
      category: "food",
      categoryName: "Продукты питания",
      description: "Широкий ассортимент охлажденной и замороженной мясной продукции высочайшего качества, способной удовлетворить самые изысканные вкусы, но при этом доступной для всех слоев потребителей.",
      location: "Абакан",
      founded: "2015",
      employees: "100-200",
      image: "C:/Users/SkyNetPC/Downloads/NqlGqttBXmQ.jpg",
    },
    {
      id: 2,
      name: "Абаканские сласти",
      category: "food",
      categoryName: "Продукты питания",
      description: "Методом проб и ошибок, различных экспериментов, сочетанием, казалось бы, несочетаемого и появляются сладкие шедевры.",
      location: "Абакан",
      founded: "2015",
      employees: "50-100",
      image: "C:/Users/SkyNetPC/Downloads/bakaslasty.jpg",
    },
    {
      id: 3,
      name: "БутерОК",
      category: "food",
      categoryName: "Продукты питания",
      description: "Производственная компания изготавливает охлаждённую и замораживаемую продукцию быстрого приготовления, такую как бутерброды, пицца, роллы, багеты и так далее.",
      location: "Абакан",
      founded: "2018",
      employees: "30-50",
      image: "C:/Users/SkyNetPC/Downloads/buterok.png",
    },
]

let filteredBusinesses = [...businessesData]
let currentPage = 1
const itemsPerPage = 9

document.addEventListener("DOMContentLoaded", () => {
  initCatalog()
})

function initCatalog() {
  renderBusinesses()
  initFilters()
  updateResultsCount()
  updatePagination()
}

function renderBusinesses() {
  const grid = document.getElementById("businesses-grid")
  const noResults = document.getElementById("no-results")

  if (filteredBusinesses.length === 0) {
    grid.style.display = "none"
    noResults.style.display = "block"
    return
  }

  grid.style.display = "grid"
  noResults.style.display = "none"

  // Пагинация
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentBusinesses = filteredBusinesses.slice(startIndex, endIndex)

  grid.innerHTML = currentBusinesses
    .map(
      (business) => `
        <div class="business-card" data-category="${business.category}" data-location="${business.location}">
            <div class="business-image">
                ${business.image 
                  ? `<img src="${business.image}" alt="${business.name}" class="business-photo">`
                  : `<div class="business-icon-placeholder">${business.icon || '🏭'}</div>`}
            </div>
            <div class="business-content">
                <div class="business-meta">
                    <span class="category-badge">${business.categoryName}</span>
                    <span class="location-badge">📍 ${business.location}</span>
                </div>
                <h3>${business.name}</h3>
                <p>${business.description}</p>
                <div class="business-stats">
                    <span>Основан: ${business.founded}</span>
                    <span>Сотрудников: ${business.employees}</span>
                </div>
                <a href="business.html?id=${business.id}" class="view-btn">Подробнее</a>
            </div>
        </div>
    `,
    )
    .join("")

  // Анимация появления карточек
  setTimeout(() => {
    const cards = grid.querySelectorAll(".business-card")
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }, index * 100)
    })
  }, 100)
}

function initFilters() {
  const searchInput = document.getElementById("catalog-search")
  const categoryFilter = document.getElementById("catalog-category")
  const locationFilter = document.getElementById("catalog-location")
  const yearFilter = document.getElementById("catalog-year")
  const sortSelect = document.getElementById("sort-select")
  const resetBtn = document.getElementById("reset-filters")

  // Поиск с задержкой
  let searchTimeout
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      clearTimeout(searchTimeout)
      searchTimeout = setTimeout(() => {
        currentPage = 1
        applyFilters()
      }, 300)
    })
  }

  // Фильтры
  if (categoryFilter) {
    categoryFilter.addEventListener("change", () => {
      currentPage = 1
      applyFilters()
    })
  }

  if (locationFilter) {
    locationFilter.addEventListener("change", () => {
      currentPage = 1
      applyFilters()
    })
  }

  if (yearFilter) {
    yearFilter.addEventListener("change", () => {
      currentPage = 1
      applyFilters()
    })
  }

  // Сортировка
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      applySorting()
      renderBusinesses()
      updatePagination()
    })
  }

  // Сброс фильтров
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = ""
      if (categoryFilter) categoryFilter.value = ""
      if (locationFilter) locationFilter.value = ""
      if (yearFilter) yearFilter.value = ""
      if (sortSelect) sortSelect.value = "name"

      currentPage = 1
      applyFilters()
    })
  }
}

function applyFilters() {
  const searchTerm = document.getElementById("catalog-search")?.value.toLowerCase() || ""
  const selectedCategory = document.getElementById("catalog-category")?.value || ""
  const selectedLocation = document.getElementById("catalog-location")?.value || ""
  const selectedYear = document.getElementById("catalog-year")?.value || ""

  filteredBusinesses = businessesData.filter((business) => {
    const matchesSearch =
      !searchTerm ||
      business.name.toLowerCase().includes(searchTerm) ||
      business.description.toLowerCase().includes(searchTerm)

    const matchesCategory = !selectedCategory || business.category === selectedCategory
    const matchesLocation = !selectedLocation || business.location === selectedLocation

    let matchesYear = true
    if (selectedYear) {
      if (selectedYear === "older") {
        matchesYear = Number.parseInt(business.founded) < 2020
      } else {
        matchesYear = business.founded === selectedYear
      }
    }

    return matchesSearch && matchesCategory && matchesLocation && matchesYear
  })

  applySorting()
  renderBusinesses()
  updateResultsCount()
  updatePagination()
}

function applySorting() {
  const sortBy = document.getElementById("sort-select")?.value || "name"

  filteredBusinesses.sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "year":
        return Number.parseInt(b.founded) - Number.parseInt(a.founded)
      case "category":
        return a.categoryName.localeCompare(b.categoryName)
      case "location":
        return a.location.localeCompare(b.location)
      default:
        return 0
    }
  })
}

function updateResultsCount() {
  const counter = document.getElementById("results-count")
  if (counter) {
    counter.textContent = filteredBusinesses.length
  }
}

function updatePagination() {
  const pagination = document.getElementById("pagination")
  const prevBtn = document.getElementById("prev-page")
  const nextBtn = document.getElementById("next-page")
  const numbersContainer = document.getElementById("pagination-numbers")

  if (!pagination) return

  const totalPages = Math.ceil(filteredBusinesses.length / itemsPerPage)

  if (totalPages <= 1) {
    pagination.style.display = "none"
    return
  }

  pagination.style.display = "flex"

  // Кнопки назад/вперед
  if (prevBtn) {
    prevBtn.disabled = currentPage === 1
    prevBtn.onclick = () => {
      if (currentPage > 1) {
        currentPage--
        renderBusinesses()
        updatePagination()
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }
  }

  if (nextBtn) {
    nextBtn.disabled = currentPage === totalPages
    nextBtn.onclick = () => {
      if (currentPage < totalPages) {
        currentPage++
        renderBusinesses()
        updatePagination()
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }
  }

  // Номера страниц
  if (numbersContainer) {
    numbersContainer.innerHTML = ""

    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement("a")
      pageBtn.href = "#"
      pageBtn.className = `pagination-number ${i === currentPage ? "active" : ""}`
      pageBtn.textContent = i
      pageBtn.onclick = (e) => {
        e.preventDefault()
        currentPage = i
        renderBusinesses()
        updatePagination()
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      numbersContainer.appendChild(pageBtn)
    }
  }
}

// Анимация появления карточек
function animateCards() {
  const cards = document.querySelectorAll(".business-card")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }, index * 100)
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "all 0.6s ease"
    observer.observe(card)
  })
}

// Вызываем анимацию после рендера
const originalRenderBusinesses = renderBusinesses
renderBusinesses = () => {
  originalRenderBusinesses()
  setTimeout(animateCards, 100)
}
