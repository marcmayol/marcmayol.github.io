import React from 'react'
import {ArrowRight} from 'lucide-react'
import {Helmet} from "react-helmet";


export default function PersonalPage() {
    return (
        <>
            <Helmet>
                <title>Marc Mayol</title>
                <meta name="description"
                      content="Marc Mayol Gen AI Developer & Researcher conocimientos sobre IA Generativa, productos de Google y desarrollo de inteligencia artificial"/>
                <link rel="canonical" href="https://marcmayol.com/"/>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Marc Mayol",
                        "alternateName": "Marc Mayol Orell",
                        "knowsAbout": [
                            "python",
                            "google products",
                            "Generative AI",
                            "javascript",
                            "vertexai"
                        ]
                    })}
                </script>
            </Helmet>
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
                                src="/newslleter.png"
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
                <section id="blog" className="mb-24">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Aprende e infórmate</h2>
                    <div
                        className="bg-gray-100 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-6 md:mb-0">
                            <img
                                src="/mediumlogo.png"
                                alt="medium logo"
                                className="rounded-2xl shadow-lg"
                                width={400}
                                height={300}
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-10 text-center md:text-left">
                            <p className="mb-6 text-xl text-gray-700">
                                Tampoco te pierdas mi blog en medium donde comparto mis conocimientos sobre IA
                                Generativa, productos de Google y desarrollo de inteligencia artificial.
                            </p>
                            <a
                                href="/blog"
                                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg"
                            >
                                Ver atículos
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
                            Aqui una lsita de posibles temas que te podrian interesar:
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
            </main>
        </div>
        </>
    )
}
