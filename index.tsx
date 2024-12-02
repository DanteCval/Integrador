'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Check, Zap, Shield, Cloud, Mail, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function SoftwareSolutions() {
  const [selectedPlan, setSelectedPlan] = useState('pro')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: 'Rápido y Eficiente', description: 'Optimiza tus procesos con nuestra solución de alta velocidad.' },
    { icon: <Shield className="w-6 h-6 text-green-500" />, title: 'Seguro y Confiable', description: 'Protección de datos de nivel empresarial para tu tranquilidad.' },
    { icon: <Cloud className="w-6 h-6 text-blue-500" />, title: 'Totalmente en la Nube', description: 'Accede a tus datos desde cualquier lugar, en cualquier momento.' },
  ]

  const plans = [
    { name: 'Básico', price: '9.99', features: ['5 usuarios', '10GB de almacenamiento', 'Soporte por email'] },
    { name: 'Pro', price: '19.99', features: ['Usuarios ilimitados', '100GB de almacenamiento', 'Soporte prioritario 24/7'] },
    { name: 'Empresa', price: '49.99', features: ['Usuarios ilimitados', 'Almacenamiento ilimitado', 'Soporte dedicado'] },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white font-sans">
      <header className="py-6 px-4 sm:px-6 lg:px-8 font-tech">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-indigo-600">SoftSolutions</div>
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost">Características</Button>
            <Button variant="ghost">Precios</Button>
            <Button variant="ghost">Contacto</Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-2"
          >
            <Button variant="ghost" className="w-full text-left">Características</Button>
            <Button variant="ghost" className="w-full text-left">Precios</Button>
            <Button variant="ghost" className="w-full text-left">Contacto</Button>
          </motion.div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-20 text-center bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <motion.h1 
            className="text-5xl font-bold text-white mb-4 font-display"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Soluciones de Software Innovadoras
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 mb-8 font-body"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Impulsa tu negocio con nuestra plataforma de última generación
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <Button size="lg" className="font-tech">
              Comienza Gratis <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Dashboard de SoftSolutions"
              width={600}
              height={400}
              className="rounded-lg shadow-xl mx-auto"
            />
          </motion.div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-display">Características Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold ml-2 font-tech">{feature.title}</h3>
                </div>
                <p className="text-gray-600 font-body">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-display">Planes y Precios</h2>
          <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`${selectedPlan === plan.name.toLowerCase() ? 'border-indigo-500' : ''}`}>
                <CardHeader>
                  <CardTitle className="font-tech">{plan.name}</CardTitle>
                  <CardDescription className="font-body">${plan.price}/mes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 font-body">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <RadioGroupItem value={plan.name.toLowerCase()} id={`plan-${plan.name.toLowerCase()}`} className="sr-only" />
                  <Label
                    htmlFor={`plan-${plan.name.toLowerCase()}`}
                    className="flex-grow"
                  >
                    <Button className="w-full font-tech" variant={selectedPlan === plan.name.toLowerCase() ? 'default' : 'outline'}>
                      Seleccionar Plan
                    </Button>
                  </Label>
                </CardFooter>
              </Card>
            ))}
          </RadioGroup>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-display">Contáctanos</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="max-w-lg mx-auto">
              <CardHeader>
                <CardTitle className="font-tech">Envíanos un mensaje</CardTitle>
                <CardDescription className="font-body">Estamos aquí para responder tus preguntas</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="font-tech">Nombre</Label>
                    <Input id="name" placeholder="Tu nombre" className="font-body" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-tech">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" className="font-body" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="font-tech">Mensaje</Label>
                    <textarea
                      id="message"
                      className="w-full min-h-[100px] p-2 border rounded-md font-body"
                      placeholder="Tu mensaje aquí..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full font-tech">
                    Enviar Mensaje <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Equipo de soporte"
                width={400}
                height={400}
                className="rounded-lg shadow-xl mx-auto"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 font-body">
          <p>&copy; 2023 SoftSolutions. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
