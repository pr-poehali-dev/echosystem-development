""

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { GodRays, MeshGradient } from "@paper-design/shaders-react"

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(true)
  }

  const handleClose = () => {
    setIsExpanded(false)
  }

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isExpanded])

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        {/* GodRays Background */}
        <div className="absolute inset-0">
          <GodRays
            colorBack="#00000000"
            colors={["#A8D5A2C0", "#6DBF67E0", "#4A9E4A", "#2D7A2D"]}
            colorBloom="#C8E6C4"
            offsetX={0.85}
            offsetY={-1}
            intensity={1}
            spotty={0.45}
            midSize={10}
            midIntensity={0}
            density={0.12}
            bloom={0.15}
            speed={1}
            scale={1.6}
            frame={3332042.8159981333}
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 text-center">
          <div className="text-xs sm:text-sm font-mono tracking-widest text-[#1a5c1a] uppercase mb-2 opacity-80">
            АВП Брокер
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[90%] tracking-[-0.03em] text-black mix-blend-exclusion max-w-2xl">
            Автокредит без лишних&nbsp;хлопот
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-[160%] text-black max-w-2xl px-4">
            Оформляем кредиты на новые автомобили и авто с пробегом. Быстро, прозрачно и на выгодных условиях — мы работаем с ведущими банками.
          </p>

          <AnimatePresence initial={false}>
            {!isExpanded && (
              <motion.div className="inline-block relative">
                <motion.div
                  style={{
                    borderRadius: "100px",
                  }}
                  layout
                  layoutId="cta-card"
                  className="absolute inset-0 bg-[#2d7a2d] items-center justify-center transform-gpu will-change-transform"
                ></motion.div>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  layout={false}
                  onClick={handleExpand}
                  className="h-15 px-6 sm:px-8 py-3 text-lg sm:text-xl font-regular text-white tracking-[-0.01em] relative"
                >
                  Получить консультацию
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-2">
            <motion.div
              layoutId="cta-card"
              transition={{ duration: 0.3 }}
              style={{
                borderRadius: "24px",
              }}
              layout
              className="relative flex h-full w-full overflow-y-auto bg-[#2d7a2d] transform-gpu will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                layout={false}
                transition={{ duration: 0.15, delay: 0.05 }}
                className="absolute h-full inset-0 overflow-hidden pointer-events-none"
                style={{
                  borderRadius: "24px",
                }}
              >
                <MeshGradient
                  speed={1}
                  colors={["#3a9e3a", "#1a5c1a", "#2d7a2d", "#145214"]}
                  distortion={0.8}
                  swirl={0.1}
                  grainMixer={0}
                  grainOverlay={0}
                  className="inset-0 sticky top-0"
                  style={{ height: "100%", width: "100%" }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-[1100px] mx-auto items-center p-6 sm:p-10 lg:p-16 gap-8 lg:gap-16"
              >
                <div className="flex-1 flex flex-col justify-center space-y-3 w-full">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-none tracking-[-0.03em]">
                    Оставьте заявку
                  </h2>

                  <div className="space-y-4 sm:space-y-6 pt-4">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm sm:text-base text-white leading-[150%]">
                          Подберём оптимальную программу кредитования под ваш бюджет — новые авто и авто с пробегом из салонов и частных объявлений.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm sm:text-base text-white leading-[150%]">
                          Решение по кредиту — от 1 часа. Работаем с 10+ банками-партнёрами для получения лучшей ставки.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/20">
                    <p className="text-lg sm:text-xl lg:text-2xl text-white leading-[150%] mb-4">
                      С АВП Брокер я получил автокредит за один день — без бумажной волокиты и с выгодной ставкой.
                    </p>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-medium text-lg">
                        А
                      </div>
                      <div>
                        <p className="text-base sm:text-lg lg:text-xl text-white">Алексей Морозов</p>
                        <p className="text-sm sm:text-base text-white/70">Клиент АВП Брокер</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <form className="space-y-4 sm:space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase"
                      >
                        ВАШЕ ИМЯ *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#1a5c1a] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm h-10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase"
                      >
                        ТЕЛЕФОН *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+7 (___) ___-__-__"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#1a5c1a] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm h-10"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <label
                          htmlFor="car-type"
                          className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase"
                        >
                          ТИП АВТОМОБИЛЯ
                        </label>
                        <select
                          id="car-type"
                          name="car-type"
                          className="w-full px-4 py-2.5 rounded-lg bg-[#1a5c1a] border-0 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all appearance-none cursor-pointer text-sm h-10"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 0.75rem center",
                            backgroundSize: "1rem",
                          }}
                        >
                          <option value="new">Новый авто</option>
                          <option value="used">С пробегом</option>
                          <option value="any">Ещё не решил</option>
                        </select>
                      </div>
                      <div className="sm:w-36 w-full">
                        <label
                          htmlFor="budget"
                          className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase"
                        >
                          БЮДЖЕТ
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          className="w-full px-4 py-2.5 rounded-lg bg-[#1a5c1a] border-0 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all appearance-none cursor-pointer text-sm h-10"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 0.75rem center",
                            backgroundSize: "1rem",
                          }}
                        >
                          <option value="500-1000">до 1 млн</option>
                          <option value="1000-2000">1–2 млн</option>
                          <option value="2000-3000">2–3 млн</option>
                          <option value="3000+">от 3 млн</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase"
                      >
                        КОММЕНТАРИЙ
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Марка и модель, пожелания по условиям..."
                        className="w-full px-4 py-3 rounded-lg bg-[#1a5c1a] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-2.5 rounded-full bg-white text-[#1a5c1a] font-medium hover:bg-white/90 transition-colors tracking-[-0.03em] h-10"
                    >
                      Отправить заявку
                    </button>
                  </form>
                </div>
              </motion.div>

              <motion.button
                onClick={handleClose}
                className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center text-white bg-transparent transition-colors hover:bg-white/10 rounded-full"
                aria-label="Закрыть"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
