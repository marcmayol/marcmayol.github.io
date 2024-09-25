import React from 'react'
import {ArrowRight, Mail, Linkedin, Github} from 'lucide-react'

export default function PersonalPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">

            <main className="container mx-auto px-6 py-16 max-w-4xl">
                <section id="about" className="mb-24 text-center">
                    <img
                        src="/perfil.png"
                        alt="Marc Mayol"
                        className="block mx-auto mb-4 w-40 h-45 rounded-full"
                    />
                    <h1 className="text-5xl font-bold mb-4 tracking-tight">Marc Mayol</h1>
                    <h2 className="text-2xl text-gray-500 mb-8">Gen AI Developer & Researcher</h2>
                    <p className="text-xl leading-relaxed text-gray-700 max-w-2xl mx-auto">
                        ¡Hola! Soy Marc, Tech Lead especializado en Inteligencia Artificial Generativa y un
                        entusiasta apasionado de este fascinante mundo. Con experiencia en el desarrollo de aplicaciones
                        de inteligencia artificial, me esfuerzo por crear sistemas inteligentes que puedan tener un
                        impacto positivo en nuestro mundo.
                    </p>
                </section>

                <section id="newsletter" className="mb-24">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Mantente al día</h2>
                    <div
                        className="bg-gray-100 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-6 md:mb-0">
                            <img
                                src="/samrtAI.png?height=300&width=400"
                                alt="Smart AI Developer Newsletter"
                                className="rounded-2xl shadow-lg"
                                width={400}
                                height={300}
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-10 text-center md:text-left">
                            <p className="mb-6 text-xl text-gray-700">
                                Suscríbete a mi newsletter en LinkedIn para estar al tanto de las últimas novedades en
                                desarrollo de IA, tendencias del sector y contenido exclusivo.
                            </p>
                            <a
                                href="https://www.linkedin.com/newsletters/7226589723593498624/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg"
                            >
                                Suscríbete en LinkedIn
                                <ArrowRight className="ml-2 h-5 w-5"/>
                            </a>
                        </div>
                    </div>
                </section>

                <section id="speaks" className="mb-24">
                    <h2 className="text-3xl font-semibold mb-10 text-center">Charlas y Conferencias</h2>
                    <div className="space-y-8 pb-10">
                        <p className="text-xl leading-relaxed text-gray-700  mx-auto mb-4 text-balance">

                            Estoy disponible para impartir charlas y conferencias sobre Inteligencia Artificial
                            Generativa, desarrollo de aplicaciones de IA y las últimas tendencias en el sector. Con
                            experiencia previa en eventos donde he compartido estos temas, me apasiona transmitir
                            conocimientos y experiencias a profesionales y entusiastas interesados en explorar el
                            fascinante mundo de la IA.
                        </p>
                    </div>
                    <div className="space-y-8">
                        {[
                            {
                                title: "La IA y el Programador Junior",
                                description: "Cómo utilizar correctamente la inteligencia artificial al iniciarse en el mundo de la programación profesional.",
                                audience: "Programadores noveles, estudiantes y personas que comienzan en el sector tecnológico"
                            },
                            {
                                title: "El Futuro de la IA",
                                description: "Una exploración sobre cómo la inteligencia artificial transformará diversos sectores y nuestra vida cotidiana.",
                                audience: "Profesionales interesados en IA, entusiastas de la tecnología y público general"
                            },
                            {
                                title: "La IA y el Trabajo",
                                description: "Análisis del impacto de la inteligencia artificial en el mundo laboral y cómo prepararse para los empleos del futuro.",
                                audience: "Líderes empresariales, profesionales de recursos humanos y orientadores laborales"
                            },
                            {
                                title: "Introducción a Hugging Face",
                                description: "Una guía para comenzar con Hugging Face y aprovechar sus herramientas en proyectos de IA.",
                                audience: "Desarrolladores, investigadores y estudiantes interesados en procesamiento de lenguaje natural"
                            },
                            {
                                title: "Prompting: Cómo Hablar con la Inteligencia Artificial",
                                description: "Técnicas y mejores prácticas para interactuar eficazmente con modelos de IA a través de prompts.",
                                audience: "Usuarios de IA, desarrolladores y cualquier persona interesada en comunicación hombre-máquina"
                            }
                        ]
                            .map((talk, index) => (
                            <div key={index}
                                 className="bg-gray-50 rounded-3xl p-8 transition-all duration-300 hover:shadow-lg">
                                <h3 className="text-2xl font-semibold mb-3">{talk.title}</h3>
                                <p className="mb-4 text-gray-700">{talk.description}</p>
                                <p className="text-sm text-gray-500">Recomendado para: {talk.audience}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact" className="mb-24 text-center">
                    <h2 className="text-3xl font-semibold mb-6">Ponte en contacto</h2>
                    <p className="mb-8 text-xl text-gray-700">
                        ¿Interesado en colaborar o en que participe como ponente en tu evento? ¡No dudes en contactarme!
                    </p>
                    <div className="flex justify-center space-x-6">
                        {[
                            {
                                icon: Mail,
                                label: 'Email',
                                href: 'mailto:marcmayolorell@gmail.com',
                                bgColor: 'bg-gray-200',
                                textColor: 'text-gray-800'
                            },
                            {
                                icon: Linkedin,
                                label: 'LinkedIn',
                                href: 'https://www.linkedin.com/in/marc-mayol-orell/',
                                bgColor: 'bg-blue-100',
                                textColor: 'text-blue-800'
                            },
                            {
                                icon: Github,
                                label: 'GitHub',
                                href: 'https://github.com/marcmayol',
                                bgColor: 'bg-gray-800',
                                textColor: 'text-white'
                            }
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center px-6 py-3 ${item.bgColor} ${item.textColor} rounded-full hover:opacity-80 transition-opacity duration-300`}
                            >
                                <item.icon className="mr-2 h-5 w-5"/>
                                {item.label}
                            </a>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="border-t py-8">
                <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Marc Mayol. All rights reserved.
                </div>
            </footer>
        </div>
    )
}
