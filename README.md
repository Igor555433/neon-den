# Neon Den

React приложение, построенное с использованием Vite, TypeScript, Tailwind CSS и современного UI kit.

## 🚀 Технологии

- **React 18** - Современная библиотека для создания пользовательских интерфейсов
- **TypeScript** - Типизированный JavaScript для лучшей разработки
- **Vite** - Быстрый инструмент сборки
- **Tailwind CSS** - Utility-first CSS фреймворк
- **Radix UI** - Доступные компоненты интерфейса
- **Framer Motion** - Библиотека для анимаций
- **React Router** - Маршрутизация
- **React Hook Form** - Работа с формами
- **Lucide React** - Иконки

## 📦 Установка

```bash
# Клонируйте репозиторий
git clone https://github.com/Igor555433/neon-den.git

# Перейдите в директорию проекта
cd neon-den

# Установите зависимости
npm install
```

## 🛠️ Разработка

```bash
# Запуск в режиме разработки
npm run dev

# Сборка для production
npm run build

# Проверка типов
npm run typecheck

# Форматирование кода
npm run format.fix

# Тестирование
npm run test
```

## 🌐 Деплой

### Vercel

Проект готов для деплоя на Vercel:

1. Подключите репозиторий к Vercel
2. Vercel автоматически определит настройки благодаря `vercel.json`
3. Деплой произойдет автоматически при каждом push в main/master

### Настройки сборки для Vercel

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📝 Структура проекта

```
src/
├── components/         # React компоненты
│   └── ui/            # UI компоненты (Radix UI + Tailwind)
├── hooks/             # Пользовательские хуки
├── lib/               # Утилиты и конфигурация
├── pages/             # Страницы приложения
├── App.tsx            # Главный компонент
└── main.tsx           # Точка входа
```

## 🎨 UI Components

Проект использует кастомные компоненты, построенные на базе Radix UI и стилизованные с помощью Tailwind CSS.

## 📄 Лицензия

MIT License 