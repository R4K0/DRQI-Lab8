import React from "react";
import {Nav, Navbar} from "react-bootstrap"

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
                        <Nav.Link href="/read">Read</Nav.Link>
                        <Nav.Link href="/create">Create</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default PageHeader;