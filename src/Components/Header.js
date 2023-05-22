import React, { Component } from "react";
import { Container, Navbar, } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ButtonGroups from "./UI/Button/ButtonGroups";
import Logins from "./ModalWindows/Logins";
import '../CSS/Registration.css';
import '../CSS/Headers.css';



export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="https://www.khl.ru/?_ga=2.231121567.1002045244.1682053746-159708321.1682053746">
                            <img src="https://www.khl.ru/nav/khl/img/khll.svg" width="35px" height="35px" alt=" " />
                        </Navbar.Brand>
                        <Navbar.Brand href="https://mhl.khl.ru/">
                            <img src="https://www.khl.ru/nav/khl/img/MKhL.svg" width="30px" height="30px" alt=" " />
                        </Navbar.Brand>
                        <Navbar.Brand href="https://whl.khl.ru/">
                            <img src="https://www.khl.ru/nav/khl/img/WhKhL.svg" width="30px" height="30px" alt=" " />
                        </Navbar.Brand>
                        <Navbar.Brand href="https://www.vhlru.ru/">
                            <img src="	https://www.khl.ru/nav/khl/img/vkhl.svg" width="30px" height="30px" alt=" " />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                       
                    
                        <Navbar.Collapse id="responsive-navbar-nav" />
                        {['bottom'].map((placement) => (
                            <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        КХЛ в ВК.
                                    </Tooltip>
                                    
                                }
                            >
                                <Navbar.Brand href="https://vk.com/khl">
                                    <img src="https://www.khl.ru/nav/khl/img/vk.svg" width="25px" height="25px" alt=" " />
                                </Navbar.Brand>
                            </OverlayTrigger>
                        ))}
                        {['bottom'].map((placement) => (
                            <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        КХЛ в Однокласниках.
                                    </Tooltip>
                                }
                            >
                                <Navbar.Brand href="https://ok.ru/khl">
                                    <img src="https://www.khl.ru/nav/khl/img/ok.svg" width="25px" height="25px" alt=" " />
                                </Navbar.Brand>
                            </OverlayTrigger>
                        ))}
                        {['bottom'].map((placement) => (
                            <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        КХЛ в youtube.
                                    </Tooltip>
                                }
                            >
                                <Navbar.Brand href="https://www.youtube.com/khl">
                                    <img src="https://www.khl.ru/nav/khl/img/youtube.png" width="25px" height="25px" alt=" " />
                                </Navbar.Brand>
                            </OverlayTrigger>
                        ))}
                    </Container>
                </Navbar>
                <Navbar sticky="top1" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src="favicon.ico"
                                height={55}
                                width={55}
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <ButtonGroups />
                        </Navbar.Collapse>
                        <Logins></Logins>
                    </Container>
                </Navbar>
            </div>
        )
    }
}