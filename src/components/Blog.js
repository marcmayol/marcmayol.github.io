import React, {Component} from 'react';
import {Helmet} from "react-helmet";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true};
    }
    componentDidMount() {
        this.loadMediumPosts();
    }

    async loadMediumPosts() {
        const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@marcmayolorell&_=${new Date().getTime()}`; // Reemplaza con tu usuario
        const response = await fetch(rssUrl);
        const data = await response.json();
        const container = document.getElementById("medium");
        container.innerHTML = ""; // Limpiar antes de agregar
        const uniqueLinks = new Set(); // Evitar duplicados
        this.setState({loading: false});
        let title_listado = document.createElement("h2");
        title_listado.classList.add("text-2xl", "text-gray-500", "mb-8");
        title_listado.innerText = "Listado de artículos";
        container.appendChild(title_listado);
        data.items.forEach(item => {
            console.log(item)
            if (!uniqueLinks.has(item.link)) {
                uniqueLinks.add(item.link);
                let post = document.createElement("div");
                post.classList.add("bg-gray-50", "rounded-3xl", "p-8", "transition-all", "duration-300", "hover:shadow-lg", "flex", "items-center", "mb-6", "border-b", "pb-4");
                post.innerHTML = `
                    <div class="flex-1">
                        <h3 class='text-2xl font-semibold mb-3'><a href="${item.link}" target="_blank" class='text-blue-600 hover:underline'>${item.title}</a></h3>
                        <p class='mb-4 text-gray-700'>${item.description.substring(0, 100)}...</p>
                        <p class='text-sm text-gray-500'>Recomendado para: ${item.categories ? item.categories.join(', ') : 'General'}</p>
                        <div class="flex items-center justify-end w-3/3 pt-3">
                            ${item.thumbnail ? `<img src="${item.thumbnail}" alt="Imagen del artículo" class="w-24 h-auto rounded-lg mr-4">` : ''}
                            <a href="${item.link}" target="_blank" class="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
                                Saber más →
                            </a>
                        </div>
                    </div>
                    ${item.thumbnail ? `<img src="${item.thumbnail}" alt="Imagen del artículo" class="w-24 h-auto rounded-lg ml-4">` : ''}
                `;
                container.appendChild(post);
            }
        });

    }
    render() {
        return (
            <>
                <Helmet>
                    <title>Marc Mayol | Blog</title>
                    <meta name="description"
                          content="Blog donde comparto conocimientos sobre IA Generativa, productos de Google y desarrollo de inteligencia artificial"/>
                    <link rel="canonical" href="https://marcmayol.com/blog/"/>
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
                                "vertexai",
                                "OpenAi",
                                "Prompt Engineering",
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
                                ¡Hola! Soy Marc, Tech Lead especializado en <strong>Inteligencia Artificial
                                Generativa</strong> y un entusiasta apasionado de este fascinante mundo. Con experiencia en el desarrollo de
                                aplicaciones de <strong>inteligencia artificial</strong>, me esfuerzo por crear sistemas inteligentes que puedan tener un  impacto positivo en nuestro mundo.
                            </p>
                            <p className="text-xl leading-relaxed text-gray-700 max-w-2xl mx-auto">
                                En este blog comparto conocimientos sobre <strong>IA Generativa productos de Google y desarrollo de inteligencia artificial</strong>. ¡Espero que disfrutes de la lectura! Está hecho en Medium, que no reasume la redirección.
                            </p>
                        </section>
                        {this.state.loading ? (
                            <div className="flex justify-center py-6">
                                <div
                                    className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        ) : (<></>

                        )}
                        <section id="medium" className="mb-24"></section>
                    </main>
                </div>

            </>
        );
    }
}

export default Blog;