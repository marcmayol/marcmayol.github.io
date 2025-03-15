import React, {Component} from 'react'


class Header extends Component {
    render() {
        return (
            <div className="bg-white text-gray-900 font-sans antialiased">
                <header className="flex justify-center space-x-5 text-lg font-bold mt-5">
                    <a href="/" className="underline">Home</a>
                    <a href="/blog" className="underline">Blog</a>
                    <a href="/#newsletter" className="underline">newsletter</a>
                    <a href="/#contact" className="underline">Contacto</a>
                </header>
            </div>
        )
    }
}
export default Header;