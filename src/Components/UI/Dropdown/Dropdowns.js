import React from 'react';
import { NavDropdown } from "react-bootstrap";

function Dropdowns() {
    return (
        <NavDropdown
            id="nav-dropdown-dark-example"
            title="Клубы"
            menuVariant="dark"
            style={{ color: 'white' }}
            inline
        >
            <NavDropdown.Item href="https://mhl.hcvityaz.ru/"><img src="//www.khl.ru/nav/khl/img/teams/team_ic(1).png" width="30px" height="30px" alt=" " /> Витязь</NavDropdown.Item>
            <NavDropdown.Divider />

        </NavDropdown>

    );
}


export default Dropdowns;