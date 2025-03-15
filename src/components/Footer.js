import React, {Component} from 'react'
import {Github, Linkedin, Mail} from 'lucide-react'

class Footer extends Component {
    render() {
        return (


            <div className="bg-white text-gray-900 font-sans antialiased">
                <main>
                    <section id="contact" className="mb-24 text-center">
                        <h2 className="text-3xl font-semibold mb-6">Ponte en contacto</h2>
                        <p className="mb-8 text-xl text-gray-700">
                            ¿Interesado en colaborar o en que participe como ponente en tu evento? ¡No dudes en
                            contactarme!
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
                                    className={`inline-flex items-center px-6 py-3 ${item.bgColor} ${item.textColor} rounded-full hover:opacity-80 transition-opacity duration-300 social-link`}
                                >
                                    <item.icon className="mr-2 h-5 w-5 social-link"/>
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
}
export default Footer;