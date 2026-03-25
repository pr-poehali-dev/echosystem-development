import { useState, useMemo } from "react"
import Icon from "@/components/ui/icon"

const LOAN_TERM_OPTIONS = [12, 24, 36, 48, 60, 72, 84]

function calcMonthlyPayment(amount: number, ratePercent: number, months: number) {
  const r = ratePercent / 100 / 12
  if (r === 0) return amount / months
  return (amount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
}

export default function LoanCalculator() {
  const [carPrice, setCarPrice] = useState(1500000)
  const [downPayment, setDownPayment] = useState(300000)
  const [term, setTerm] = useState(60)
  const [rate, setRate] = useState(14.9)

  const loanAmount = Math.max(0, carPrice - downPayment)
  const downPercent = carPrice > 0 ? Math.round((downPayment / carPrice) * 100) : 0

  const monthly = useMemo(
    () => (loanAmount > 0 ? calcMonthlyPayment(loanAmount, rate, term) : 0),
    [loanAmount, rate, term]
  )
  const totalPay = monthly * term
  const overpay = totalPay - loanAmount

  const fmt = (n: number) =>
    Math.round(n).toLocaleString("ru-RU") + " ₽"

  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-mono tracking-widest text-[#1a5c1a] uppercase mb-3 opacity-80">
            Примерный расчёт
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-black">
            Кредитный калькулятор
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Расчёт ориентировочный. Точные условия подберёт менеджер под ваш профиль.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Слайдеры */}
          <div className="space-y-8 bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">
            {/* Стоимость авто */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">Стоимость автомобиля</label>
                <span className="text-base font-semibold text-black">{fmt(carPrice)}</span>
              </div>
              <input
                type="range"
                min={300000}
                max={10000000}
                step={50000}
                value={carPrice}
                onChange={(e) => {
                  const val = Number(e.target.value)
                  setCarPrice(val)
                  if (downPayment > val * 0.9) setDownPayment(Math.round(val * 0.2))
                }}
                className="w-full accent-[#2d7a2d] h-2 rounded-full cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>300 000 ₽</span>
                <span>10 000 000 ₽</span>
              </div>
            </div>

            {/* Первоначальный взнос */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">Первоначальный взнос</label>
                <span className="text-base font-semibold text-black">
                  {fmt(downPayment)}{" "}
                  <span className="text-sm font-normal text-gray-400">({downPercent}%)</span>
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={Math.round(carPrice * 0.9)}
                step={10000}
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full accent-[#2d7a2d] h-2 rounded-full cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>0 ₽</span>
                <span>{fmt(carPrice * 0.9)}</span>
              </div>
            </div>

            {/* Ставка */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">Процентная ставка</label>
                <span className="text-base font-semibold text-black">{rate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min={3.9}
                max={29}
                step={0.1}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full accent-[#2d7a2d] h-2 rounded-full cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>3.9%</span>
                <span>29%</span>
              </div>
            </div>

            {/* Срок */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">Срок кредита</label>
                <span className="text-base font-semibold text-black">{term} мес.</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {LOAN_TERM_OPTIONS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTerm(t)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      term === t
                        ? "bg-[#2d7a2d] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {t} мес.
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Результат */}
          <div className="flex flex-col gap-5">
            <div className="bg-[#2d7a2d] rounded-2xl p-6 sm:p-8 text-white flex flex-col gap-2">
              <p className="text-white/70 text-sm">Ежемесячный платёж</p>
              <p className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em]">
                {fmt(monthly)}
              </p>
              <p className="text-white/60 text-sm mt-1">в месяц на {term} месяцев</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Wallet" size={16} className="text-[#2d7a2d]" />
                  <p className="text-xs text-gray-500">Сумма кредита</p>
                </div>
                <p className="text-xl font-semibold text-black">{fmt(loanAmount)}</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="TrendingUp" size={16} className="text-[#2d7a2d]" />
                  <p className="text-xs text-gray-500">Переплата</p>
                </div>
                <p className="text-xl font-semibold text-black">{fmt(overpay)}</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100 col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Receipt" size={16} className="text-[#2d7a2d]" />
                  <p className="text-xs text-gray-500">Общая сумма выплат</p>
                </div>
                <p className="text-xl font-semibold text-black">{fmt(totalPay)}</p>
              </div>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-full py-4 rounded-2xl bg-[#1a5c1a] text-white font-medium text-base hover:bg-[#2d7a2d] transition-colors flex items-center justify-center gap-2"
            >
              <Icon name="PhoneCall" size={18} />
              Получить точный расчёт
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
