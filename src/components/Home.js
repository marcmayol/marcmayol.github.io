import React, {Component} from 'react';
import jumbotron from '../images/jumbotron.png';
import Image from 'react-bootstrap/Image';
import {Helmet} from "react-helmet";
import {Person} from 'schema-dts';
import { helmetJsonLdProp } from "react-schemaorg";
import yo from '../images/yo.png';
import googleTagManager from '../images/google-tag-manager-v.png';
import ga4 from '../images/Ga4-header-image.webp';

class Home extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Marc Mayol</title>
                    <link rel="canonical" href="https://marcmayol.com/"/>
                    script={[
                    helmetJsonLdProp<Person>({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Marc Mayol",
                        alternateName: "Marc Mayol Orell",
                        knowsAbout: ["google tag manger", "google analytics", "google analytics 4", "javascript","web development"],
                    }),
                ]}
                </Helmet>
                <main className="container">
                    <section className="row">
                        <section className="col-12 jumbotron p-0 mt-md-5 border"
                                 style={{background: 'url(' + jumbotron + ') center/cover no-repeat'}}>
                            <div className="pt-5 pb-5 text-center">
                                <h1 className="pt-3 pt-md-5 mt-md-5 mt-lg-5">Marc Mayol</h1>
                                <h2 className="pt-3 pt-md-5 pb-md-5 mb-md-5 mb-lg-5">Analítica digital y vida
                                    digital</h2>
                                <a id="cta_home_principal" className="btn-principal" href="/blog" title="blog">
                                    <span className="new">Ver</span>
                                    <span className="old">Blog</span>
                                </a>
                            </div>
                        </section>
                    </section>
                    <section className="row mt-3 mt-md-5 section_home">
                        <section className="col-12 col-md-8 p-5 ">
                            <p className="p-3">
                                ¡Bienvenido a mi blog! Mi nombre es <strong>Marc Mayol</strong> y he creado este espacio
                                para compartir mis
                                conocimientos y experiencias en la vida digital. Aquí, voy a mostrar cómo intento vivir
                                de
                                Internet por mi cuenta, a través de mi trabajo en YouTube, SEO y marketing digital.</p>
                            <p className="p-3">
                                Sin embargo, el tema principal de mi blog será la analítica digital, enfocándome
                                especialmente
                                en <strong>Google Analytics 4</strong> y <strong>Google Tag Manager</strong>. Estos
                                herramientas son fundamentales para
                                entender cómo los usuarios interactúan con tu sitio web y cómo puedes mejorar su
                                experiencia. Si estás interesado en aprender cómo sacar el máximo provecho de estas
                                herramientas y cómo aplicarlas en tu negocio, <strong>¡este es el lugar perfecto para
                                ti!</strong>
                            </p>
                        </section>
                        <section className="col-12 col-md-4 p-5 pt-0 pt-md-5">
                            <Image fluid="true" style={{borderRadius: '50%'}} src={yo}/>
                            <small className="caption w-100 text-center">
                                <p className="w-100">¡si! ¡adoro los Goldens!</p>
                            </small>
                        </section>
                    </section>
                    <section className="row mt-3 mt-md-5 section_home">
                        <section className="col-12 col-md-8 p-5 pt-md-0 pb-0 pb-md-5">
                            <h2 className="text-center text-md-start p-3  h1">Google Tag Manager</h2>
                            <p className="p-3">
                                <strong>Google Tag Manager</strong> es una herramienta esencial para cualquier
                                profesional del
                                marketing digital o del desarrollo web. Con <strong>Google Tag Manager</strong>, puedes
                                administrar todas tus etiquetas
                                y píxeles de seguimiento en un solo lugar, lo que facilita el seguimiento y la medición
                                de datos de tu sitio web. Además, <strong>Google Tag Manager</strong> te permite
                                implementar etiquetas de forma rápida y
                                sencilla sin tener que modificar el código de tu sitio web.</p>
                            <p className="text-center px-md-5 mx-md-5">
                                <a id="cta_home_gtm" className="btn-secundario p-md-4 mx-md-5"
                                   href="/blog/category/google-tag-manager" title="enlace a la categoría gtm">
                                    <span className="new ">Vamos!!</span>
                                    <span className="old">Ver Artículos sobre GTM</span>
                                </a>
                            </p>
                            <p className="p-3">
                                En mi blog, te brindaré una guía completa sobre cómo usar <strong>Google Tag
                                Manager</strong> para maximizar su
                                potencial y obtener los mejores resultados. A través de mis artículos, aprenderás cómo
                                configurar y usar <strong>Google Tag Manager</strong>, cómo crear etiquetas
                                personalizadas y cómo analizar los datos
                                recopilados para mejorar tu sitio web. Te recomiendo que eches un vistazo a mis
                                publicaciones para obtener más información y consejos valiosos
                            </p>
                        </section>
                        <section className="col-12 col-md-4 p-5 pt-0 pt-md-5  pb-md-5 d-flex justify-content-around">
                            <Image src={googleTagManager} className="d-none d-md-flex p-5"
                                   alt="google tag manger en una pantalla" title="google tag manger en una pantalla"/>
                            <Image fluid="true" src={googleTagManager} className="d-md-none"
                                   alt="google tag manger en una pantalla mobiel"
                                   title="google tag manger en una pantalla v mobile"/>
                        </section>
                    </section>
                    <section className="row mt-3 mt-md-5 section_home">
                        <section className="col-12 col-md-8 p-5 pt-md-0 pb-0 pb-md-5">
                            <h2 className="text-center text-md-start p-3 h1">Google Analytics 4</h2>
                            <p className="p-3">
                                <strong>Google Analytics 4</strong> es la última versión de la plataforma de análisis de
                                Google, con una
                                gran cantidad de características y mejoras que te permiten obtener una comprensión más
                                profunda de cómo tus usuarios interactúan con tu sitio web. Con <strong>Google Analytics
                                4</strong>, puedes rastrear
                                eventos personalizados, obtener una visión de 360 grados de tus usuarios y utilizar
                                análisis predictivo para tomar decisiones informadas.</p>
                            <p className="text-center px-md-5 mx-md-5">
                                <a id="cta_home_gtm" className="btn-secundario p-md-4 mx-md-5"
                                   href="/blog/category/google-analytics-4" title="enlace a la categoría ga4">
                                    <span className="new ">Vamos!!</span>
                                    <span className="old">Ver Artículos sobre GA4</span>
                                </a>
                            </p>
                            <p className="p-3">
                                En mi blog, te brindaré una guía completa sobre cómo usar <strong>Google Analytics
                                4</strong> para maximizar su
                                potencial y obtener los mejores resultados. A través de mis artículos, aprenderás cómo
                                configurar y usar <strong>Google Analytics 4</strong>, cómo crear informes
                                personalizados y cómo analizar los datos
                                recopilados para mejorar tu sitio web. Te recomiendo que eches un vistazo a mis
                                publicaciones para obtener más información y consejos valiosos.
                            </p>
                        </section>
                        <section className="col-12 col-md-4 p-5 pt-0 pt-md-5  pb-md-5 d-flex justify-content-around">
                            <Image src={ga4} className="d-none d-md-flex p-5"
                                   alt="google tag manger en una pantalla" title="google tag manger en una pantalla"/>
                            <Image fluid="true" src={ga4} className="d-md-none"
                                   alt="google tag manger en una pantalla mobiel"
                                   title="google tag manger en una pantalla v mobile"/>
                        </section>
                    </section>

                </main>
            </>

        );
    }

}

export default Home;