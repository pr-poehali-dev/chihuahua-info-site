import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-pink-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🐕</span>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Мир Чихуахуа
              </h1>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: "home", label: "Главная", icon: "Home" },
                { id: "breeds", label: "Породы", icon: "Dog" },
                { id: "care", label: "Уход", icon: "Heart" },
                { id: "health", label: "Здоровье", icon: "Activity" },
                { id: "nutrition", label: "Питание", icon: "Apple" },
                { id: "training", label: "Дрессировка", icon: "Award" },
                { id: "blog", label: "Блог", icon: "BookOpen" },
                { id: "gallery", label: "Галерея", icon: "Image" },
                { id: "contact", label: "Контакты", icon: "Mail" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 text-sm font-medium transition-all hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  <Icon name={item.icon as any} size={16} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-orange-500 text-white">Всё о чихуахуа</Badge>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Познакомьтесь с миром{" "}
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  чихуахуа
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Самые полные и актуальные сведения о породе, уходе, здоровье и воспитании ваших любимцев
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("breeds")}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                >
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Узнать больше
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("gallery")}
                  className="border-orange-300 hover:bg-orange-50"
                >
                  <Icon name="Image" size={20} className="mr-2" />
                  Галерея
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="https://cdn.poehali.dev/projects/39aa8042-c6ec-41ab-a024-5ef1d5cb6cca/files/6cdde333-c644-414b-b72e-657105fef49e.jpg"
                alt="Чихуахуа"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="breeds" className="py-20 px-4 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-pink-500 text-white">Разновидности</Badge>
            <h2 className="text-4xl font-bold mb-4">Породы чихуахуа</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Узнайте о различных типах чихуахуа и их уникальных особенностях
            </p>
          </div>

          <Tabs defaultValue="smooth" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="smooth" className="text-base">
                <Icon name="Dog" size={18} className="mr-2" />
                Гладкошёрстные
              </TabsTrigger>
              <TabsTrigger value="long" className="text-base">
                <Icon name="Sparkles" size={18} className="mr-2" />
                Длинношёрстные
              </TabsTrigger>
            </TabsList>

            <TabsContent value="smooth" className="animate-fade-in">
              <Card className="border-orange-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Гладкошёрстные чихуахуа</CardTitle>
                  <CardDescription>Классический и элегантный вид породы</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="Check" className="text-green-500 mt-1" size={20} />
                        <div>
                          <h4 className="font-semibold">Шерсть</h4>
                          <p className="text-sm text-muted-foreground">Короткая, плотно прилегающая, блестящая</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Check" className="text-green-500 mt-1" size={20} />
                        <div>
                          <h4 className="font-semibold">Уход</h4>
                          <p className="text-sm text-muted-foreground">Минимальный уход, расчёсывание 1-2 раза в неделю</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="Check" className="text-green-500 mt-1" size={20} />
                        <div>
                          <h4 className="font-semibold">Характер</h4>
                          <p className="text-sm text-muted-foreground">Активные, живые, энергичные</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Check" className="text-green-500 mt-1" size={20} />
                        <div>
                          <h4 className="font-semibold">Размер</h4>
                          <p className="text-sm text-muted-foreground">Вес 1.5-3 кг, высота 15-23 см</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="long" className="animate-fade-in">
              <Card className="border-pink-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Длинношёрстные чихуахуа</CardTitle>
                  <CardDescription>Роскошная шерсть и утончённый вид</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="Check" className="text-green-500 mt-1" size={20} />
                        <div>
                          <h4 className="font-semibold">Шерсть</h4>
                          <p className="text-sm text-muted-foreground">Длинная, мягкая, с подшёрстком</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Check" className="text-green-500 mt-1" size={20} />
                        <div>
                          <h4 className="font-semibold">Уход</h4>
                          <p className="text-sm text-muted-foreground">Регулярное расчёсывание 3-4 раза в неделю</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="Check" className="text-green-500 mt-1" size={20} />
                        <div>
                          <h4 className="font-semibold">Характер</h4>
                          <p className="text-sm text-muted-foreground">Спокойные, ласковые, нежные</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Check" className="text-green-500 mt-1" size={20} />
                        <div>
                          <h4 className="font-semibold">Размер</h4>
                          <p className="text-sm text-muted-foreground">Вес 1.5-3 кг, высота 15-23 см</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="care" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-orange-500 text-white">Забота</Badge>
            <h2 className="text-4xl font-bold mb-4">Уход за чихуахуа</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Основные правила ухода для здоровья и счастья вашего питомца
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "Sparkles",
                title: "Гигиена",
                description: "Регулярное купание, чистка зубов, уход за когтями и ушами",
                color: "orange",
              },
              {
                icon: "Shirt",
                title: "Одежда",
                description: "Одежда для защиты от холода в зимний период",
                color: "pink",
              },
              {
                icon: "Home",
                title: "Место",
                description: "Уютное тёплое место для отдыха и сна",
                color: "purple",
              },
              {
                icon: "Footprints",
                title: "Прогулки",
                description: "Ежедневные прогулки 2-3 раза в день по 20-30 минут",
                color: "blue",
              },
              {
                icon: "Scissors",
                title: "Груминг",
                description: "Регулярная стрижка когтей и расчёсывание шерсти",
                color: "green",
              },
              {
                icon: "ShieldCheck",
                title: "Безопасность",
                description: "Защита от травм, контроль температуры, избегание стресса",
                color: "red",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-${item.color}-200 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-${item.color}-100 flex items-center justify-center mb-4`}>
                    <Icon name={item.icon as any} className={`text-${item.color}-500`} size={24} />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="health" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-blue-500 text-white">Здоровье</Badge>
            <h2 className="text-4xl font-bold mb-4">Здоровье чихуахуа</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Важная информация о здоровье и типичных заболеваниях породы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-blue-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="HeartPulse" className="text-green-600" size={20} />
                  </div>
                  <CardTitle className="text-xl">Профилактика</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-green-500 mt-0.5" size={18} />
                  <p className="text-sm">Регулярные визиты к ветеринару (раз в 6 месяцев)</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-green-500 mt-0.5" size={18} />
                  <p className="text-sm">Вакцинация по графику</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-green-500 mt-0.5" size={18} />
                  <p className="text-sm">Обработка от паразитов</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-green-500 mt-0.5" size={18} />
                  <p className="text-sm">Контроль веса и активности</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <Icon name="AlertCircle" className="text-red-600" size={20} />
                  </div>
                  <CardTitle className="text-xl">Типичные проблемы</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="AlertTriangle" className="text-orange-500 mt-0.5" size={18} />
                  <p className="text-sm">Проблемы с зубами и дёснами</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="AlertTriangle" className="text-orange-500 mt-0.5" size={18} />
                  <p className="text-sm">Вывих коленной чашечки</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="AlertTriangle" className="text-orange-500 mt-0.5" size={18} />
                  <p className="text-sm">Гипогликемия (низкий сахар)</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="AlertTriangle" className="text-orange-500 mt-0.5" size={18} />
                  <p className="text-sm">Чувствительность к холоду</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="nutrition" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-green-500 text-white">Питание</Badge>
            <h2 className="text-4xl font-bold mb-4">Питание чихуахуа</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Рекомендации по правильному питанию для здоровья вашего питомца
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Icon name="Apple" className="text-green-500" />
                  Основные принципы
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Clock" size={18} className="text-green-600" />
                      Режим кормления
                    </h4>
                    <p className="text-sm text-muted-foreground">2-3 раза в день небольшими порциями</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Droplets" size={18} className="text-blue-600" />
                      Вода
                    </h4>
                    <p className="text-sm text-muted-foreground">Постоянный доступ к свежей воде</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Scale" size={18} className="text-orange-600" />
                      Порции
                    </h4>
                    <p className="text-sm text-muted-foreground">50-80 грамм корма в день на 1 кг веса</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Beef" size={18} className="text-purple-600" />
                      Качество
                    </h4>
                    <p className="text-sm text-muted-foreground">Корм премиум или супер-премиум класса</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <Icon name="Check" size={20} />
                    Полезные продукты
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {["Нежирное мясо (курица, индейка)", "Рыба (без костей)", "Овощи (морковь, кабачок)", "Рис и гречка", "Творог (нежирный)"].map(
                    (item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        {item}
                      </div>
                    )
                  )}
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <Icon name="X" size={20} />
                    Запрещённые продукты
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {["Шоколад и сладости", "Лук и чеснок", "Виноград и изюм", "Жирная пища", "Кости (куриные, рыбные)"].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      {item}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="training" className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-purple-500 text-white">Обучение</Badge>
            <h2 className="text-4xl font-bold mb-4">Дрессировка чихуахуа</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Советы по воспитанию и обучению вашего чихуахуа
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "GraduationCap",
                title: "Базовые команды",
                tips: ["Сидеть", "Лежать", "Ко мне", "Место", "Рядом"],
                color: "purple",
              },
              {
                icon: "Trophy",
                title: "Методы обучения",
                tips: ["Положительное подкрепление", "Лакомства за выполнение", "Короткие сессии 5-10 минут", "Игровая форма", "Терпение и последовательность"],
                color: "pink",
              },
              {
                icon: "Target",
                title: "Социализация",
                tips: ["Знакомство с людьми", "Общение с другими собаками", "Привыкание к звукам", "Поездки в транспорте", "Посещение новых мест"],
                color: "blue",
              },
            ].map((section, index) => (
              <Card key={index} className={`border-${section.color}-200 shadow-lg hover:shadow-xl transition-all`}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-${section.color}-100 flex items-center justify-center mb-4`}>
                    <Icon name={section.icon as any} className={`text-${section.color}-600`} size={24} />
                  </div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" className={`text-${section.color}-500 mt-0.5 flex-shrink-0`} size={16} />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-indigo-500 text-white">Блог</Badge>
            <h2 className="text-4xl font-bold mb-4">Советы владельцам</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полезные статьи и рекомендации по уходу за чихуахуа
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "Snowflake",
                title: "Как защитить чихуахуа от холода зимой",
                date: "15 октября 2024",
                excerpt: "Чихуахуа очень чувствительны к холоду. Узнайте, как правильно одевать питомца и защитить его здоровье в зимний период.",
                category: "Уход",
                color: "blue",
                readTime: "5 мин"
              },
              {
                icon: "Utensils",
                title: "5 ошибок в кормлении чихуахуа",
                date: "12 октября 2024",
                excerpt: "Неправильное питание может навредить здоровью вашего питомца. Разбираем самые частые ошибки владельцев.",
                category: "Питание",
                color: "green",
                readTime: "7 мин"
              },
              {
                icon: "Baby",
                title: "Первые дни щенка чихуахуа дома",
                date: "8 октября 2024",
                excerpt: "Как подготовить дом к появлению щенка и помочь ему адаптироваться в новой семье. Практическое руководство.",
                category: "Воспитание",
                color: "pink",
                readTime: "10 мин"
              },
              {
                icon: "Stethoscope",
                title: "Когда нужно срочно к ветеринару",
                date: "5 октября 2024",
                excerpt: "Симптомы, которые требуют немедленного обращения к врачу. Важная информация для каждого владельца.",
                category: "Здоровье",
                color: "red",
                readTime: "6 мин"
              },
              {
                icon: "Users",
                title: "Социализация чихуахуа: с чего начать",
                date: "1 октября 2024",
                excerpt: "Правильная социализация поможет вашему питомцу стать уверенным и дружелюбным. Пошаговая инструкция.",
                category: "Дрессировка",
                color: "purple",
                readTime: "8 мин"
              },
              {
                icon: "Scissors",
                title: "Груминг чихуахуа в домашних условиях",
                date: "28 сентября 2024",
                excerpt: "Как правильно ухаживать за шерстью, когтями и зубами вашего чихуахуа дома. Советы профессионалов.",
                category: "Уход",
                color: "orange",
                readTime: "9 мин"
              },
            ].map((post, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-${post.color}-200 animate-fade-in cursor-pointer group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className={`text-${post.color}-600 border-${post.color}-300`}>
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-${post.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={post.icon as any} className={`text-${post.color}-600`} size={24} />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-xs text-muted-foreground flex items-center gap-1">
                    <Icon name="Calendar" size={12} />
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="ghost" size="sm" className={`text-${post.color}-600 hover:text-${post.color}-700 p-0 h-auto font-semibold`}>
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-indigo-300 hover:bg-indigo-50">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Все статьи блога
            </Button>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-pink-500 text-white">Фотографии</Badge>
            <h2 className="text-4xl font-bold mb-4">Галерея чихуахуа</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Очаровательные фотографии наших маленьких друзей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                src: "https://cdn.poehali.dev/projects/39aa8042-c6ec-41ab-a024-5ef1d5cb6cca/files/6cdde333-c644-414b-b72e-657105fef49e.jpg",
                title: "Портрет чихуахуа",
              },
              {
                src: "https://cdn.poehali.dev/projects/39aa8042-c6ec-41ab-a024-5ef1d5cb6cca/files/998e8994-d27e-4062-8dcd-4d9265257ddb.jpg",
                title: "Игривый момент",
              },
              {
                src: "https://cdn.poehali.dev/projects/39aa8042-c6ec-41ab-a024-5ef1d5cb6cca/files/2863b891-88a9-4b55-a508-b21f5108c244.jpg",
                title: "Милый щенок",
              },
            ].map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative group">
                  <img src={image.src} alt={image.title} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-semibold p-4 text-lg">{image.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-orange-500 text-white">Связь</Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground text-lg">
              Есть вопросы о чихуахуа? Мы всегда рады помочь!
            </p>
          </div>

          <Card className="shadow-2xl border-orange-200">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <Icon name="Mail" className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@chihuahua-world.ru</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                    <Icon name="Phone" className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Телефон</h4>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Icon name="MessageCircle" className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Социальные сети</h4>
                    <p className="text-muted-foreground">@chihuahua_world</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                  <Icon name="Send" size={20} className="mr-2" />
                  Написать нам
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-orange-900 to-pink-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">🐕</span>
            <h3 className="text-2xl font-bold">Мир Чихуахуа</h3>
          </div>
          <p className="text-orange-200 mb-6">Всё о ваших любимых питомцах</p>
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="sm" className="text-white hover:text-orange-200">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-orange-200">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-orange-200">
              <Icon name="Twitter" size={20} />
            </Button>
          </div>
          <p className="text-sm text-orange-300">© 2024 Мир Чихуахуа. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;