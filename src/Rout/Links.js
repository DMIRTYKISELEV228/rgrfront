import React from 'react';
import { Navbar, Nav } from "react-bootstrap";

function Links() {


    return (

        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/"> Home </Nav.Link>
          <Nav.Link href="/about"> About </Nav.Link>
          <Nav.Link href="/contacts"> Contacts </Nav.Link>
          <Nav.Link href="/blog"> Blog </Nav.Link>
          <Nav.Link href="/registration"> Регистрация </Nav.Link>
          <Nav.Link href="/comand"> Команда </Nav.Link>
          <Nav.Link href="/sponsors"> Спонсоры </Nav.Link>
          <Nav.Link href="/guide"> Спонсоры </Nav.Link>
          <Nav.Link href="/coachingstaff"> Тренерский состав </Nav.Link>
          <Nav.Link href="/staff"> Персонал </Nav.Link>
          <Nav.Link href="/new"> Новости </Nav.Link>
          <Nav.Link href="/news"> Пресс-служба </Nav.Link>
        </Nav>
      </Navbar.Collapse>

    );
}


export default Links;