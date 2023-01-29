import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../../images/logo1_black_nb.svg';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Container>
                        <LinkContainer to="/">
                            <Navbar.Brand href="/" id="homeLink">
                                <img
                                    alt=""
                                    src={logo}
                                    width="130"
                                    height="75"
                                    className="d-inline-block align-top App-logo"
                                />
                            </Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to="/blog">
                                    <Nav.Link href="/blog" className="link-menu">Blog</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/blog/category/google-tag-manager">
                                    <Nav.Link href="/blog/category/google-tag-manager"  className="link-menu">Google tag manager</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/blog/category/google-analytics-4">
                                    <Nav.Link href="/blog/category/google-analytics-4"  className="link-menu">Google Analytics 4</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Header;