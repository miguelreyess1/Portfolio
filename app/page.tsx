"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Code, ExternalLink, Github, Linkedin, Mail, Menu, Moon, Sun, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Page() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between py-4">
            <div className="flex items-center gap-2 font-bold">
              <Code className="h-5 w-5 text-primary" />
              <span className="gradient-text">Miguel Reyes Gomez</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#inicio" className="text-sm font-medium hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link href="#sobre-mi" className="text-sm font-medium hover:text-primary transition-colors">
                Sobre Mí
              </Link>
              <Link href="#habilidades" className="text-sm font-medium hover:text-primary transition-colors">
                Habilidades
              </Link>
              <Link href="#proyectos" className="text-sm font-medium hover:text-primary transition-colors">
                Proyectos
              </Link>
              <Link href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
                Contacto
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col gap-4 mt-8">
                    <Link href="#inicio" className="text-lg font-medium hover:text-primary transition-colors">
                      Inicio
                    </Link>
                    <Link href="#sobre-mi" className="text-lg font-medium hover:text-primary transition-colors">
                      Sobre Mí
                    </Link>
                    <Link href="#habilidades" className="text-lg font-medium hover:text-primary transition-colors">
                      Habilidades
                    </Link>
                    <Link href="#proyectos" className="text-lg font-medium hover:text-primary transition-colors">
                      Proyectos
                    </Link>
                    <Link href="#contacto" className="text-lg font-medium hover:text-primary transition-colors">
                      Contacto
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        <main className="container py-8 md:py-12 space-y-12">
          {/* Hero Section - keep existing gradient-bg */}
          <section id="inicio" className="py-12 md:py-24 lg:py-32 gradient-bg rounded-3xl mb-12">
            <div className="mx-auto max-w-[58rem] space-y-6 text-center text-white p-8">
              <h1 className="text-3xl font-bold leading-tigsht tracking-tighter md:text-5xl lg:text-6xl animate-fade-up">
                Miguel Reyes Gómez
              </h1>
              <p className="text-lg md:text-xl opacity-90 animate-fade-up delay-150">
                Estudiante de Programación
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
                <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-white/90">
                  <Link href="#proyectos">
                    Ver Proyectos <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-blue-600 hover:bg-blue-950 hover:text-white border-white text-white"
                  asChild
                >
                  <Link href="#contacto">Contacto</Link>
                </Button>
              </div>
            </div>
          </section>
          
          {/* Skills Section */}
          <section id="habilidades" className="py-12 md:py-24 lg:py-32 gradient-bg-secondary rounded-3xl">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Mis Habilidades</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="gradient-border">
                  <CardHeader>
                    <CardTitle className="text-primary">Desarrollo Frontend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        HTML5 & CSS3
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        JavaScript / TypeScript
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        React.js 
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        Next.js
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="gradient-border">
                  <CardHeader>
                    <CardTitle className="text-secondary">Desarrollo Backend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                        Node.js
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                        Express.js
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                        SQL / NoSQL
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                        MongoDB
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="gradient-border">
                  <CardHeader>
                    <CardTitle className="text-accent">Herramientas & Otros</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                        Git & GitHub
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                        VS Code
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="proyectos" className="py-12 md:py-24 lg:py-32 gradient-bg-accent rounded-3xl">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Mis Proyectos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project 1 */}
                <Card className="overflow-hidden hover:shadow-lg transition-shadow gradient-border">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Proyecto 1"
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-primary">Aplicación Web de Tres en Raya Futbolero</CardTitle>
                    <CardDescription>Javasript, Node.js, MySql, React</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Una aplicación web para jugar al tres en raya con una temática futbolística, donde los usuarios deben conectar clubes y nacionalidades a través de jugadores reales.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com/miguelreyess1/FutbolEnRaya" className="flex items-center">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="#" className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 2 */}
                <Card className="overflow-hidden hover:shadow-lg transition-shadow gradient-border">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Proyecto 2"
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-secondary">Portfolio</CardTitle>
                    <CardDescription>React, Node.js</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Portfolio personal - Miguel Reyes Gómez </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com/miguelreyess1/Portfolio-MiguelReyes" className="flex items-center">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="https://miguelreyes.vercel.app/" className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 3 */}
                <Card className="overflow-hidden hover:shadow-lg transition-shadow gradient-border">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Proyecto 3"
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-accent">TFG - Grado Superior DAM</CardTitle>
                    <CardDescription>Jetpack Compose, MySql</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Aplicación móvil para Android con funcionalidad para gestionar el ahorro personal
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com/miguelreyess1/TFG-GS-DAM" className="flex items-center">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>

          <section id="contacto" className="py-12 bg-muted/50 rounded-3xl">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-8 gradient-text">Contacto</h2>
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>miguel.reyesgomez1@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+34 611 450 893</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link 
                    href="https://github.com/miguelreyess1" 
                    className="flex items-center justify-center px-4 py-2 border border-primary rounded hover:bg-primary hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="https://www.linkedin.com/in/miguel-reyes-g%C3%B3mez-66a170293/" 
                    className="flex items-center justify-center px-4 py-2 border border-primary rounded hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
                <p>
                  Actualmente estoy disponible para nuevos proyectos y oportunidades de aprendizaje.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t py-6 md:py-8">
          <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-2 font-bold">
              <Code className="h-5 w-5 text-primary" />
              <span className="gradient-text">Miguel Reyes Gomez</span>
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Miguel Reyes Gomez. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://github.com/miguelreyess1" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/miguel-reyes-g%C3%B3mez-66a170293/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

