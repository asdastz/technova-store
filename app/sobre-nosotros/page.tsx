'use client'

import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiTrendingUp, FiHeart } from 'react-icons/fi'

export default function AboutPage() {
  const stats = [
    { icon: FiUsers, label: 'Clientes Satisfechos', value: '10,000+' },
    { icon: FiAward, label: 'Años de Experiencia', value: '15+' },
    { icon: FiTrendingUp, label: 'Proyectos Completados', value: '5,000+' },
    { icon: FiHeart, label: 'Calificación', value: '4.9/5' }
  ]

  const values = [
    {
      title: 'Calidad',
      description: 'Ofrecemos solo productos y servicios de la más alta calidad.',
      icon: FiAward
    },
    {
      title: 'Innovación',
      description: 'Nos mantenemos a la vanguardia de la tecnología.',
      icon: FiTrendingUp
    },
    {
      title: 'Compromiso',
      description: 'Tu satisfacción es nuestra prioridad número uno.',
      icon: FiHeart
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Sobre <span className="gradient-text">TechNova</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos una empresa líder en tecnología comprometida con ofrecer los mejores 
              productos y servicios para impulsar tu negocio hacia el futuro digital.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-3xl text-primary-600" />
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <p className="text-gray-600 mb-4">
                Fundada en 2008, TechNova nació con una visión clara: hacer la tecnología 
                accesible para todos. Lo que comenzó como una pequeña tienda local se ha 
                convertido en uno de los distribuidores de tecnología más confiables del país.
              </p>
              <p className="text-gray-600 mb-4">
                A lo largo de los años, hemos expandido nuestro catálogo para incluir no solo 
                los mejores productos tecnológicos, sino también servicios profesionales de TI 
                que ayudan a empresas de todos los tamaños a transformarse digitalmente.
              </p>
              <p className="text-gray-600">
                Hoy, servimos a más de 10,000 clientes satisfechos y seguimos creciendo, 
                siempre manteniendo nuestro compromiso con la calidad, la innovación y 
                el servicio excepcional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/team/800/600"
                alt="Team"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600">
              Los principios que guían cada decisión que tomamos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

