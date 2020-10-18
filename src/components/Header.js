import React from "react";
import {Nav, Navbar} from "react-bootstrap"
import { Route } from "react-router-dom";

class PageHeader extends React.Component {
    render(){
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">
                    Milosz G00376658
                </Navbar.Brand>

                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="/">Content</Nav.Link>
                        <Nav.Link href="/header">Content 2</Nav.Link>
                        <Nav.Link href="/footer">Footer</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default PageHeader;