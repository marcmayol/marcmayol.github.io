import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

class Header extends Component {
    render() {
        return (
            <div className="bg-white text-gray-900 font-sans antialiased">
                <header className="flex justify-center space-x-5 text-lg font-bold mt-5">
                    <a href="/" className="underline">Home</a>
                    <Link to="/blog" className="underline blog-link">Blog</Link>
                    <a href="https://www.linkedin.com/newsletters/7226589723593498624/"
                       className="underline newsletter-link">newsletter</a>
                    <HashLink smooth to="#contact" className="underline contact-link">Contacto</HashLink>
                </header>
            </div>
        )
    }
}
export default Header;