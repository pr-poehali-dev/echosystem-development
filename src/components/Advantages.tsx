import Icon from "@/components/ui/icon"

const advantages = [
  {
    icon: "BadgePercent",
    title: "Низкая ставка",
    description: "Подбираем лучшие условия среди 10+ банков-партнёров. Ставка от 3.9% годовых.",
  },
  {
    icon: "Clock",
    title: "Решение за 1 час",
    description: "Быстрое рассмотрение заявки без лишних документов и походов в банк.",
  },
  {
    icon: "Car",
    title: "Любой автомобиль",
    description: "Новые авто, авто с пробегом из салонов и от частных лиц — оформим кредит на любой.",
  },
  {
    icon: "ShieldCheck",
    title: "Без скрытых платежей",
    description: "Прозрачные условия, честная стоимость. Никаких сюрпризов после подписания.",
  },
  {
    icon: "Handshake",
    title: "Персональный менеджер",
    description: "Ваш личный брокер сопровождает сделку от подачи заявки до получения ключей.",
  },
  {
    icon: "FileCheck",
    title: "Минимум документов",
    description: "Паспорт и водительское удостоверение — часто этого достаточно для одобрения.",
  },
]

export default function Advantages() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-mono tracking-widest text-[#1a5c1a] uppercase mb-3 opacity-80">
            Почему мы
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-black">
            Преимущества АВП Брокер
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#2d7a2d]/30 hover:bg-[#f0f9f0] transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-[#2d7a2d]/10 flex items-center justify-center mb-4">
                <Icon name={item.icon} size={22} className="text-[#2d7a2d]" />
              </div>
              <h3 className="text-lg font-medium text-black mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-[160%]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
