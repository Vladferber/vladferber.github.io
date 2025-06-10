// Основной JavaScript файл для сайта "Сделано в Хакасии"

document.addEventListener("DOMContentLoaded", () => {
  // Инициализация всех компонентов
  initHeader()
  initMobileMenu()
  initFAQ()
  initForm()
  initAnimations()
  initSmoothScroll()
  initCatalogPreview()
})

// Управление хедером при скролле
function initHeader() {
  const header = document.getElementById("header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })
}

// Мобильное меню
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mainNav = document.getElementById("mainNav")

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mainNav.classList.toggle("active")

      // Изменяем иконку
      if (mainNav.classList.contains("active")) {
        mobileMenuBtn.innerHTML = "✕"
      } else {
        mobileMenuBtn.innerHTML = "☰"
      }
    })

    // Закрытие меню при клике на ссылку
    const navLinks = mainNav.querySelectorAll("a")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active")
        mobileMenuBtn.innerHTML = "☰"
      })
    })

    // Закрытие меню при клике вне его
    document.addEventListener("click", (e) => {
      if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mainNav.classList.remove("active")
        mobileMenuBtn.innerHTML = "☰"
      }
    })
  }
}

// FAQ аккордеон
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active")

      // Закрываем все остальные
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active")
      })

      // Открываем текущий, если он не был активен
      if (!isActive) {
        item.classList.add("active")
      }
    })
  })
}

// Многошаговая форма
function initForm() {
  const form = document.getElementById("application-form")
  const formWrapper = document.getElementById("form-wrapper")
  const notification = document.getElementById("form-notification")
  const backToFormBtn = document.getElementById("back-to-form")

  if (!form) return

  let currentStep = 1
  const totalSteps = 3

  // Обновление прогресса
  function updateProgress() {
    const progressFill = document.querySelector(".progress-fill")
    const steps = document.querySelectorAll(".progress-steps .step")
    const formSteps = document.querySelectorAll(".form-step")

    // Обновляем прогресс-бар
    const progressPercent = (currentStep / totalSteps) * 100
    progressFill.style.width = progressPercent + "%"

    // Обновляем индикаторы шагов
    steps.forEach((step, index) => {
      const stepNumber = index + 1
      step.classList.remove("active", "completed")

      if (stepNumber < currentStep) {
        step.classList.add("completed")
      } else if (stepNumber === currentStep) {
        step.classList.add("active")
      }
    })

    // Показываем нужный шаг формы
    formSteps.forEach((step, index) => {
      step.classList.remove("active")
      if (index + 1 === currentStep) {
        step.classList.add("active")
      }
    })
  }

  // Валидация шага
  function validateStep(stepNumber) {
    const currentFormStep = document.querySelector(`.form-step[data-step="${stepNumber}"]`)
    const requiredFields = currentFormStep.querySelectorAll("[required]")
    let isValid = true

    requiredFields.forEach((field) => {
      field.classList.remove("error")

      if (!field.value.trim()) {
        field.classList.add("error")
        isValid = false
      }

      // Дополнительная валидация для email
      if (field.type === "email" && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(field.value)) {
          field.classList.add("error")
          isValid = false
        }
      }

      // Дополнительная валидация для телефона
      if (field.type === "tel" && field.value) {
        const phoneRegex = /^[+]?[0-9\s\-()]{10,}$/
        if (!phoneRegex.test(field.value)) {
          field.classList.add("error")
          isValid = false
        }
      }
    })

    return isValid
  }

  // Обработчики кнопок навигации
  const nextButtons = document.querySelectorAll(".btn-next")
  const prevButtons = document.querySelectorAll(".btn-prev")

  nextButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (validateStep(currentStep)) {
        currentStep++
        updateProgress()
      }
    })
  })

  prevButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentStep--
      updateProgress()
    })
  })

  // Счетчик символов для textarea
  const textarea = document.getElementById("product-description")
  if (textarea) {
    const counter = document.querySelector(".textarea-counter span")

    textarea.addEventListener("input", function () {
      const length = this.value.length
      counter.textContent = length

      if (length > 500) {
        counter.style.color = "var(--secondary)"
      } else {
        counter.style.color = "var(--text-light)"
      }
    })
  }

  // Обновление значения слайдера
  const rangeSlider = document.getElementById("production-percent")
  const percentValue = document.getElementById("percent-value")

  if (rangeSlider && percentValue) {
    rangeSlider.addEventListener("input", function () {
      percentValue.textContent = this.value
    })
  }

  // Обработка загрузки файлов
  const fileInputs = document.querySelectorAll('input[type="file"]')

  fileInputs.forEach((input) => {
    input.addEventListener("change", function () {
      const preview = this.parentNode.querySelector(".file-preview")
      preview.innerHTML = ""

      Array.from(this.files).forEach((file) => {
        const fileItem = document.createElement("div")
        fileItem.className = "file-item"
        fileItem.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                    <span>${file.name}</span>
                    <button type="button" onclick="this.parentNode.remove()">×</button>
                `
        preview.appendChild(fileItem)
      })
    })
  })

  // Отправка формы
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (!validateStep(currentStep)) {
      return
    }

    const submitBtn = form.querySelector(".btn-submit")
    submitBtn.classList.add("loading")
    submitBtn.textContent = "Отправка..."

    // Имитация отправки формы
    setTimeout(() => {
      showNotification(
        "success",
        "Заявка успешно отправлена!",
        "Мы получили ваши данные и свяжемся с вами в течение 24 часов. На указанный email отправлено подтверждение.",
      )
    }, 2000)
  })

  // Показ уведомления
  function showNotification(type, title, message) {
    const notificationIcon = document.getElementById("notification-icon")
    const notificationTitle = document.getElementById("notification-title")
    const notificationMessage = document.getElementById("notification-message")

    // Скрываем форму
    formWrapper.style.display = "none"

    // Настраиваем уведомление
    notificationIcon.className = `notification-icon ${type}`
    notificationIcon.textContent = type === "success" ? "✓" : "✕"
    notificationTitle.textContent = title
    notificationMessage.textContent = message

    // Показываем уведомление
    notification.classList.add("show")
  }

  // Возврат к форме
  if (backToFormBtn) {
    backToFormBtn.addEventListener("click", () => {
      // Сбрасываем форму
      form.reset()
      currentStep = 1
      updateProgress()

      // Убираем состояние загрузки
      const submitBtn = form.querySelector(".btn-submit")
      submitBtn.classList.remove("loading")
      submitBtn.textContent = "Отправить заявку"

      // Скрываем уведомление и показываем форму
      notification.classList.remove("show")
      setTimeout(() => {
        formWrapper.style.display = "block"
      }, 300)
    })
  }

  // Инициализация
  updateProgress()
}

// Каталог на главной странице (только первые 3 карточки)
function initCatalogPreview() {
  const searchInput = document.getElementById("catalog-search")
  const categorySelect = document.getElementById("catalog-category")
  const locationSelect = document.getElementById("catalog-location")
  const businessesGrid = document.getElementById("businesses-grid")
  const resultsCount = document.getElementById("results-count")

  if (!businessesGrid) return

  // ИСПРАВЛЕННЫЕ данные предпринимателей с правильными именами файлов
  const businessesData = [
    {
      id: 1,
      name: "Саянский мясокомбинат",
      category: "food",
      categoryName: "Продукты питания",
      description:
        "Широкий ассортимент охлажденной и замороженной мясной продукции высочайшего качества, способной удовлетворить самые изысканные вкусы, но при этом доступной для всех слоев потребителей.",
      location: "Абакан",
      founded: "2015",
      employees: "100-200",
      image: "img/NqlGqttBXmQ.jpg",
      htmlFile: "business-sayansk-meat.html", // ← ИСПРАВЛЕНО: соответствует реальному файлу
    },
    {
      id: 2,
      name: "Абаканские сласти",
      category: "food",
      categoryName: "Продукты питания",
      description:
        "Методом проб и ошибок, различных экспериментов, сочетанием, казалось бы, несочетаемого и появляются сладкие шедевры.",
      location: "Абакан",
      founded: "2010",
      employees: "50-100",
      image: "img/bakaslasty.jpg",
      htmlFile: "abakanskie-slasti.html", // ← Временно используем динамическую страницу
    },
    {
      id: 3,
      name: "БутерОК",
      category: "food",
      categoryName: "Продукты питания",
      description:
        "Производственная компания изготавливает охлаждённую и замораживаемую продукцию быстрого приготовления, такую как бутерброды, пицца, роллы, багеты и так далее.",
      location: "Абакан",
      founded: "2018",
      employees: "30-50",
      image: "img/buterok.png",
      htmlFile: "business-buterok.html", // ← Временно используем динамическую страницу
    },
    {
      id: 4,
      name: "Хакасские ремесла",
      category: "crafts",
      categoryName: "Ремесла и сувениры",
      description:
        "Традиционные хакасские изделия ручной работы: украшения, сувениры, предметы быта в национальном стиле.",
      location: "Аскиз",
      founded: "2020",
      employees: "10-20",
      image: "img/crafts.jpg",
      htmlFile: "business.html?id=4", // ← Временно используем динамическую страницу
    },
    {
      id: 5,
      name: "Абаканский трикотаж",
      category: "textil",
      categoryName: "Текстиль",
      description:
        "Производство трикотажа и реализация трикотажных изделий высокого качества. Наша миссия — создавать удобную и качественную одежду для повседневной жизни, спорта и активного отдыха.",
      location: "Абакан",
      founded: "2014",
      employees: "50-100",
      image: "img/атбиг.png",
      htmlFile: "business-abakan-tricotage.html", // ← ИСПРАВЛЕНО: соответствует реальному файлу
    },
    {
      id: 6,
      name: "Саяногорский хлеб",
      category: "food",
      categoryName: "Продукты питания",
      description:
        "Современная пекарня с многолетними традициями. Производим свежий хлеб, выпечку и кондитерские изделия высочайшего качества.",
      location: "Саяногорск",
      founded: "2010",
      employees: "80-120",
      image: "img/bread.jpg",
      htmlFile: "business.html?id=6", // ← Временно используем динамическую страницу
    },
  ]

  // Определяем, какие данные показывать
  let filteredBusinesses = [...businessesData]

  // Если мы на главной странице, показываем только первые 3
  const isHomePage =
    window.location.pathname.includes("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === ""
  if (isHomePage) {
    filteredBusinesses = businessesData.slice(0, 3) // Только первые 3 карточки
  }

  // Рендер карточек
  function renderBusinesses() {
    businessesGrid.innerHTML = filteredBusinesses
      .map(
        (business) => `
          <div class="business-card">
              <div class="business-image">
                  ${
                    business.image
                      ? `<img src="${business.image}" alt="${business.name}" class="business-photo">`
                      : `<div class="business-icon-placeholder">🏭</div>`
                  }
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
                  <a href="${business.htmlFile}" class="view-btn">Подробнее</a>
              </div>
          </div>
        `,
      )
      .join("")

    if (resultsCount) {
      resultsCount.textContent = filteredBusinesses.length
    }
  }

  // Фильтрация (только для страницы каталога)
  function applyFilters() {
    if (isHomePage) return // На главной фильтрация не работает

    const searchTerm = searchInput ? searchInput.value.toLowerCase() : ""
    const selectedCategory = categorySelect ? categorySelect.value : ""
    const selectedLocation = locationSelect ? locationSelect.value : ""

    filteredBusinesses = businessesData.filter((business) => {
      const matchesSearch =
        !searchTerm ||
        business.name.toLowerCase().includes(searchTerm) ||
        business.description.toLowerCase().includes(searchTerm)

      const matchesCategory = !selectedCategory || business.category === selectedCategory
      const matchesLocation = !selectedLocation || business.location === selectedLocation

      return matchesSearch && matchesCategory && matchesLocation
    })

    renderBusinesses()
  }

  // Обработчики событий (только для страницы каталога)
  if (!isHomePage) {
    if (searchInput) {
      let searchTimeout
      searchInput.addEventListener("input", () => {
        clearTimeout(searchTimeout)
        searchTimeout = setTimeout(applyFilters, 300)
      })
    }

    if (categorySelect) {
      categorySelect.addEventListener("change", applyFilters)
    }

    if (locationSelect) {
      locationSelect.addEventListener("change", applyFilters)
    }
  }

  // Инициализация
  renderBusinesses()
}

// Анимации при скролле
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Наблюдаем за элементами с анимацией
  const animatedElements = document.querySelectorAll(".animate__animated")
  animatedElements.forEach((el) => {
    observer.observe(el)
  })
}

// Плавный скролл
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const headerHeight = document.getElementById("header").offsetHeight
        const targetPosition = target.offsetTop - headerHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// Утилиты
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Форматирование телефона
function formatPhone(input) {
  let value = input.value.replace(/\D/g, "")

  if (value.startsWith("7")) {
    value = "+7 (" + value.slice(1, 4) + ") " + value.slice(4, 7) + "-" + value.slice(7, 9) + "-" + value.slice(9, 11)
  } else if (value.startsWith("8")) {
    value = "+7 (" + value.slice(1, 4) + ") " + value.slice(4, 7) + "-" + value.slice(7, 9) + "-" + value.slice(9, 11)
  }

  input.value = value
}

// Добавляем форматирование телефона
document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phone")
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      formatPhone(this)
    })
  }
})

// Экспорт функций для использования в других файлах
window.siteUtils = {
  debounce,
  formatPhone,
  showNotification: (type, title, message) => {
    // Можно использовать для показа уведомлений в других частях сайта
    console.log(`${type}: ${title} - ${message}`)
  },
}
