// Modal.jsx
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

export default function SuperModal({ isOpen, setIsOpen }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Затенение с лёгким блеском */}
          <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70 backdrop-blur-md">
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            />
          </div>
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-400"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-3xl bg-white p-8 text-left align-middle shadow-[0_10px_30px_rgba(67,67,198,0.5)] transition-all">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="flex flex-col items-center gap-6"
                >
                  {/* Пульсирующая иконка */}
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="text-yellow-500"
                  >
                    <FaExclamationTriangle className="text-[50px] drop-shadow-lg" />
                  </motion.div>

                  {/* Заголовок с плавным появлением */}
                  <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-2xl font-extrabold text-gray-900 select-none"
                  >
                    Сначала зарегистрируйтесь
                  </motion.h3>

                  {/* Описание */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-sm text-gray-600 text-center select-text"
                  >
                    Чтобы продолжить, вам нужно зарегистрироваться. Мы обещаем — это быстро и бесплатно!
                  </motion.p>

                  {/* Кнопки с эффектами */}
                  <div className="mt-6 flex gap-4 w-full justify-center">
                    <Link to="/registration" className="w-full">
                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 0 12px rgba(67,67,198,0.8)' }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg transition"
                      >
                        Регистрация
                      </motion.button>
                    </Link>
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.05, backgroundColor: '#dc2626' }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-red-500 text-white font-semibold rounded-xl shadow-md hover:bg-red-600 transition"
                    >
                      Отмена
                    </motion.button>
                  </div>
                </motion.div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
