import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import {helmetJsonLdProp} from "react-schemaorg";
import {Person} from "schema-dts";


class Blog extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Marc Mayol | Blog</title>
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
                <p>Blog</p>
            </>
        );
    }
}

export default Blog;