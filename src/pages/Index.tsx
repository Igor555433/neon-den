import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ArrowRight,
  Bot,
  TrendingUp,
  Zap,
  Shield,
  Users,
  Target,
  Calendar,
  ExternalLink,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container-max section-padding">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-evia-blue to-evia-purple rounded-lg flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">EVIA.AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#solution"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Решение
              </a>
              <a
                href="#market"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Рынок
              </a>
              <a
                href="#cases"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Кейсы
              </a>
              <a
                href="#team"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Команда
              </a>
              <a
                href="#investment"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Инвестиции
              </a>
            </div>
            <Button
              className="bg-gradient-to-r from-evia-blue to-evia-purple hover:from-evia-blue/90 hover:to-evia-purple/90"
              onClick={() => window.open("https://t.me/igorgorbulev", "_blank")}
            >
              Связаться <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-pattern opacity-30"></div>
        <div className="container-max section-padding relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              AI-конструктор для МСБ компаний
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">EVIA.AI</span> — конструктор с
              адаптивными AI агентами
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              AI-конструктор, который повышает выручку МСП на{" "}
              <span className="font-semibold text-evia-green">10-30%</span>{" "}
              всего за{" "}
              <span className="font-semibold text-evia-blue">45 дней</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-evia-blue to-evia-purple hover:from-evia-blue/90 hover:to-evia-purple/90"
                onClick={() =>
                  window.open("https://t.me/igorgorbulev", "_blank")
                }
              >
                Получить демо <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open("https://t.me/igorgorbulev", "_blank")
                }
              >
                Скачать презентацию
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-evia-green mb-2">
                  10-30%
                </div>
                <div className="text-sm text-muted-foreground">
                  Рост выручки за 45 дней
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-evia-blue mb-2">
                  40%
                </div>
                <div className="text-sm text-muted-foreground">
                  Чистой прибыли — дивиденды
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-evia-purple mb-2">
                  30%+
                </div>
                <div className="text-sm text-muted-foreground">
                  Плановая IRR
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section id="solution" className="py-20 bg-muted/30">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Проблема</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-evia-red rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong>Неиспользованный потенциал:</strong> 70% средних и
                    крупных ��омпаний РФ не используют потенциал AI в управлении
                    продуктами и проектами
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-evia-red rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong>Сложности внедрения:</strong> SMB-бизнесу сложно
                    внедрять AI из-за нехватки экспертизы и высоких барьеров
                    входа
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-evia-red rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong>Неэффективные процессы:</strong> неэффективные
                    процессы отбора IT решений, управления инновациями и
                    акселерации
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-evia-green/10 rounded-lg">
                <p className="text-sm font-medium">
                  <strong>Возможность:</strong> стать стандартом «AI-аутсорса»
                  для 21 тыс. средних и 225 тыс. малых компаний
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Решение EVIA.AI</h2>
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bot className="h-6 w-6 text-evia-blue" />
                    <span>Кастомизируемая AI-платформа</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Business-Audit</Badge>
                      <Badge variant="outline">Market-Research</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Growth</Badge>
                      <Badge variant="outline">Investment-Match</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">MVP-Builder</Badge>
                      <Badge variant="outline">KPI-менеджмент</Badge>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-evia-green" />
                      <span className="text-sm">
                        Модули быстро внедряются без изменения ИТ-ландшафта
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-evia-blue" />
                      <span className="text-sm">
                        Управляемый рост выручки и повышение эффективности
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market & Potential */}
      <section id="market" className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Рынок и потенциал</h2>
            <p className="text-lg text-muted-foreground">
              Численность МСП в России более 6,7 млн компаний
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center card-hover">
              <CardHeader>
                <CardTitle className="text-5xl font-bold text-evia-gray-500">
                  305
                </CardTitle>
                <CardDescription>млрд ₽</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Размер рынка (TAM)</p>
                <p className="text-sm text-muted-foreground">
                  ≈ 3,3 млрд $ в 2024 г. — Smart Ranking, янв 2025
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <CardTitle className="text-5xl font-bold text-evia-orange">
                  1,9
                </CardTitle>
                <CardDescription>млрд $</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Адресуемый сегмент (SAM)</p>
                <p className="text-sm text-muted-foreground">
                  Расходы МСП России на И��-решения
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <CardTitle className="text-5xl font-bold text-evia-green">
                  4,4
                </CardTitle>
                <CardDescription>млн $</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Целевая доля (SOM 2027)</p>
                <p className="text-sm text-muted-foreground">
                  Выручка при 740 клиентах, 0,23 %
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Target Audience Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">6,5 млн</CardTitle>
                <CardDescription>Микропредприятия</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">До 15 чел.</p>
                <p className="text-sm text-muted-foreground">
                  От 120 млн ₽ в год
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">225 тыс</CardTitle>
                <CardDescription>Малые компании</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">До 100 чел.</p>
                <p className="text-sm text-muted-foreground">
                  От 120 до 800 млн ₽ в год
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">21 тыс</CardTitle>
                <CardDescription>Средние компании</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">От 101 до 250 чел.</p>
                <p className="text-sm text-muted-foreground">
                  0,8–2 млрд руб. в год
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Financial Model */}
      <section className="py-20 bg-muted/30">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Финансовая модель</h2>
            <p className="text-lg text-muted-foreground">
              Прогноз роста на 2025-2027 годы
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Динамика клиентов и выручки
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <div>
                    <p className="font-semibold">2025</p>
                    <p className="text-sm text-muted-foreground">58 клиентов</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">31,71 млн ₽</p>
                    <p className="text-sm text-muted-foreground">Выручка</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <div>
                    <p className="font-semibold">2026</p>
                    <p className="text-sm text-muted-foreground">
                      320 клиентов
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">174,08 млн ₽</p>
                    <p className="text-sm text-muted-foreground">Выручка</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-background rounded-lg border-2 border-evia-green">
                  <div>
                    <p className="font-semibold">2027</p>
                    <p className="text-sm text-muted-foreground">
                      740 клиентов
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-evia-green">
                      402,56 млн ₽
                    </p>
                    <p className="text-sm text-muted-foreground">Выручка</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Бизнес-модель</h3>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Кастомное решение</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span>AI-платформа</span>
                      <span className="font-bold">300–500 тыс. ₽</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Акселерация</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span>Полное сопровождение</span>
                      <span className="font-bold">1-3 млн ₽</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Подписка</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span>AI-модули</span>
                      <span className="font-bold">от 40 000 ₽/мес</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-evia-blue/10 rounded-lg">
                <p className="text-sm font-medium text-evia-blue">
                  Чистая прибыль 2027:{" "}
                  <span className="font-bold">260,45 млн ₽</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Модель ориентирована на дивидендные выплаты инвесторам с
                  первого года
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Успешные кейсы</h2>
            <p className="text-lg text-muted-foreground">
              Реальные результаты наших клиентов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Кейс #1</CardTitle>
                  <Badge variant="secondary">СТО</Badge>
                </div>
                <CardDescription>
                  Автоматизация маркетинга и продаж оборудования
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-evia-green/10 rounded-lg">
                      <div className="text-2xl font-bold text-evia-green">
                        82
                      </div>
                      <div className="text-sm text-muted-foreground">
                        лида за 1,5 мес.
                      </div>
                    </div>
                    <div className="text-center p-3 bg-evia-blue/10 rounded-lg">
                      <div className="text-2xl font-bold text-evia-blue">
                        30%+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        конверсия
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-evia-green" />
                    <span className="text-sm">
                      Экономия 80% времени менеджеров
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Кейс #2</CardTitle>
                  <Badge variant="secondary">Evolux CNC</Badge>
                </div>
                <CardDescription>
                  Вывод на рынок промышленного оборудования
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-evia-purple/10 rounded-lg">
                      <div className="text-2xl font-bold text-evia-purple">
                        6
                      </div>
                      <div className="text-sm text-muted-foreground">
                        приоритетных сегментов
                      </div>
                    </div>
                    <div className="text-center p-3 bg-evia-orange/10 rounded-lg">
                      <div className="text-2xl font-bold text-evia-orange">
                        400+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        касаний в месяц
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-evia-blue" />
                      <span className="text-sm">
                        Объем рынка: 3-4 млрд, 200 целевых клиентов
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-evia-green" />
                      <span className="text-sm">Более 30 демо ежемесячно</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-muted/30">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Конкурентные преимущества
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center card-hover">
              <CardHeader>
                <Zap className="h-8 w-8 text-evia-blue mx-auto mb-2" />
                <CardTitle className="text-lg">Модульная архитектура</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Быстрое масштабирование, индивидуальные настройки под отрасль
                  и задачу
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <Users className="h-8 w-8 text-evia-green mx-auto mb-2" />
                <CardTitle className="text-lg">White-label</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Партнёры и интеграторы используют платформу под своим брендом
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <Shield className="h-8 w-8 text-evia-purple mx-auto mb-2" />
                <CardTitle className="text-lg">RAG-архитектура</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Сочетание частных данных и открытых датасетов для максимальной
                  релевантности
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <Target className="h-8 w-8 text-evia-orange mx-auto mb-2" />
                <CardTitle className="text-lg">Голубой океан</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Сегмент МСП не охвачен российскими AI-вендорами, минимальная
                  конкуренция
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Дорожная карта</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-evia-blue" />
                  <CardTitle className="text-lg">Q2 2025</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Запуск модулей Business-Audit, Market-Research, Growth,
                  MVP-Builder
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-evia-green" />
                  <CardTitle className="text-lg">Q3 2025</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  20 пилот-агентов, партнёрство 3 интегратора (white-label)
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-evia-purple" />
                  <CardTitle className="text-lg">Q4 2025</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Выход на MRR 1 млн ₽, подписка 20 клиентов
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-evia-orange" />
                  <CardTitle className="text-lg">Q1 2026</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Запуск библиотеки «малых» LLM-моделей</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-muted/30">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Команда</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Игорь Горбулев</CardTitle>
                <CardDescription>CEO & Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">
                  13+ лет в бизнесе, 2 реализованных проекта, успешный exit
                  (Energiatrend.ru)
                </p>
                <p className="text-sm text-muted-foreground">
                  Оборот последнего бизнеса более 300 млн ₽
                </p>
                <div className="mt-3">
                  <Badge variant="outline" className="text-xs">
                    Продуктовая разработка
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Владимир Бондаренко</CardTitle>
                <CardDescription>Co-Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">
                  10+ лет в изучении менеджмента, РГГУ кафедра
                </p>
                <div className="mt-3">
                  <Badge variant="outline" className="text-xs">
                    Коммуникации
                  </Badge>
                  <Badge variant="outline" className="text-xs ml-2">
                    Интеграция ресурсов
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Виктор Улыбин</CardTitle>
                <CardDescription>CTO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">
                  25+ лет в ML и разработке ПО, компьютерное зрение,
                  автоматизация
                </p>
                <p className="text-sm text-muted-foreground">
                  Основатель ritg.ru
                </p>
                <div className="mt-3">
                  <Badge variant="outline" className="text-xs">
                    AI-ядро
                  </Badge>
                  <Badge variant="outline" className="text-xs ml-2">
                    Инфраструктура
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-evia-blue to-evia-purple rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Дмитрий Филатов</h3>
                  <p className="text-sm text-muted-foreground">
                    Ментор, технологический стратег
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Основатель Topface, Playneta, Cryptobots | 150+ млн
                    пользователей
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section id="investment" className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Инвестиционный запрос</h2>
            <p className="text-lg text-muted-foreground">
              Требуемый капитал:{" "}
              <span className="font-bold text-evia-blue">3 млн ₽</span> для
              достижения 1 млн ₽ MRR и 20+ платящих клиентов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Условия инвестирования
              </h3>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Инвестиция</span>
                      <span className="font-bold">3 млн ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доля</span>
                      <span className="font-bold text-evia-blue">
                        15% капитала
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Политика выплат</span>
                      <span className="font-bold">40% чистой прибыли</span>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                      <span>Выплата инвестору (10 мес)</span>
                      <span className="font-bold text-evia-green">
                        0,78 млн ₽
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доходность 10 мес</span>
                      <span className="font-bold">26%</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span>Годовая IRR</span>
                      <span className="font-bold text-evia-blue">≈ 32%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">
                Цель расходования средств
              </h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold">
                          ФОТ: CTO, дата-сайентисты
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Разработка AI-модулей
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">2,2 млн</p>
                        <p className="text-sm text-muted-foreground">60%</p>
                      </div>
                    </div>
                    <Progress value={60} className="h-2" />
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold">Инструменты</p>
                        <p className="text-sm text-muted-foreground">
                          Сервисы, парсеры, LLM
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">0,3 млн</p>
                        <p className="text-sm text-muted-foreground">20%</p>
                      </div>
                    </div>
                    <Progress value={20} className="h-2" />
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold">Продвижение</p>
                        <p className="text-sm text-muted-foreground">
                          PR, контент-маркетинг, TG аутрич
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">0,5 млн</p>
                        <p className="text-sm text-muted-foreground">10%</p>
                      </div>
                    </div>
                    <Progress value={10} className="h-2" />
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-evia-green/10 rounded-lg">
                <p className="text-sm font-medium text-evia-green">
                  Результат к Q2-Q3 2025: Создание ядра AI-платформы и 500
                  квалифицированных лидов
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-muted/30">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Импакт</h2>
            <h3 className="text-xl font-semibold text-gradient mb-6">
              EVIA.AI = ускоренная цифровизация МСП
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center card-hover">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-evia-green mx-auto mb-2" />
                <CardTitle>Рост бизнеса</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Каждый клиент ускоряет темп развития и внедряет инновации,
                  сокращая технологический разрыв
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <Users className="h-8 w-8 text-evia-blue mx-auto mb-2" />
                <CardTitle>Новые рабочие места</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Увеличение оборота на 10-30% означает новые рабочие места и
                  налоги в регионах
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <Shield className="h-8 w-8 text-evia-purple mx-auto mb-2" />
                <CardTitle>Цифровое равенство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Делаем AI доступным даже микробизнесу, формируем новые навыки
                  у сотрудников МСП
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Готовы к сотрудничеству?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Свяжитесь с нами для получения демо-ролика, продуктовых кейсов и
              отзывов клиентов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-evia-blue to-evia-purple hover:from-evia-blue/90 hover:to-evia-purple/90"
                onClick={() =>
                  window.open("https://t.me/igorgorbulev", "_blank")
                }
              >
                Telegram: @igorgorbulev{" "}
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open("https://t.me/igorgorbulev", "_blank")
                }
              >
                Скачать презентацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container-max section-padding">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-evia-blue to-evia-purple rounded-lg flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">EVIA.AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-конструктор для ускоренной цифровизации МСП
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
