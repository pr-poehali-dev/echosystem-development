import Icon from "@/components/ui/icon"

export default function Contacts() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#1a5c1a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-mono tracking-widest text-[#a8d5a2] uppercase mb-3 opacity-80">
            Свяжитесь с нами
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-white">
            Контакты
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <a
            href="tel:+79999999999"
            className="flex items-center gap-4 p-6 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Phone" size={22} className="text-white" />
            </div>
            <div>
              <p className="text-white/60 text-sm mb-1">Телефон</p>
              <p className="text-white text-lg font-medium group-hover:underline">+7 (999) 999-99-99</p>
            </div>
          </a>

          <a
            href="mailto:avpbroker@mail.ru"
            className="flex items-center gap-4 p-6 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Mail" size={22} className="text-white" />
            </div>
            <div>
              <p className="text-white/60 text-sm mb-1">Email</p>
              <p className="text-white text-lg font-medium group-hover:underline">avpbroker@mail.ru</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/10">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Clock" size={22} className="text-white" />
            </div>
            <div>
              <p className="text-white/60 text-sm mb-1">Режим работы</p>
              <p className="text-white text-lg font-medium">Пн–Сб, 9:00–20:00</p>
            </div>
          </div>
        </div>

        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-1">
              Готовы помочь прямо сейчас
            </p>
            <p className="text-white/60 text-sm sm:text-base">
              Оставьте заявку — перезвоним в течение 15 минут
            </p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex-shrink-0 px-7 py-3 rounded-full bg-white text-[#1a5c1a] font-medium text-base hover:bg-[#e8f5e8] transition-colors"
          >
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  )
}
