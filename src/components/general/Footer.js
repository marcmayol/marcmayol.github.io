import React, {Component} from 'react';


class Footer extends Component {
    render() {
        return (
            <>
                <footer className="w-100 d-flex justify-content-center">
                    <ul className="footer_nav">
                        <li>
                            <a href="https://www.linkedin.com/in/marc-mayol-orell-759a36170/" rel="noopener noreferrer" target="_blank" className="socialLink" data-social="LinkedIn"
                               rel="noreferrer">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@SrMarcMayol" target="_blank" rel="noopener noreferrer"  className="socialLink" data-social="youtube"
                               rel="noreferrer">
                                <i className="bi bi-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/natzx94" target="_blank" rel="noopener noreferrer"  className="socialLink" data-social="twitter"
                               rel="noreferrer">
                                <i className="bi bi-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/natzx94/" target="_blank" rel="noopener noreferrer"  className="socialLink" data-social="instagram"
                               rel="noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                        </li>
                    </ul>
                </footer>
            </>
        );
    }
}

export default Footer;