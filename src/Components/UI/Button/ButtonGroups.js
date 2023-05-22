import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Nav, NavDropdown } from "react-bootstrap";
import './Button.css';



function ButtonGroups() {
  return (
    <Nav className="mr-auto">
      <ButtonGroup aria-label="Basic example">
        <Button href="/" className='group1' variant="secondary">

          <NavDropdown
            id="nav-dropdown-dark-example"
            title={"Клуб"}
            menuVariant="dark"
            style={{ color: 'white' }}
            inline
          >

            <NavDropdown.Item href="/sponsors"> Учередители и спонсоры </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/guide"> Руководство </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/contacts"> Контакты </NavDropdown.Item>



          </NavDropdown>
        </Button>

        <Button href="/comand" className='group1' variant="secondary">
          <NavDropdown
            id="nav-dropdown-dark-example"
            title={"Команда"}
            menuVariant="dark"
            style={{ color: 'white' }}
            inline
          >

            <NavDropdown.Item href="/comand"> Игроки </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/coachingstaff"> Тренерский состав </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/staff"> Персонал </NavDropdown.Item>


          </NavDropdown>

        </Button>



        <Button className='group1' variant="secondary"><Nav.Link href="/"> Билеты </Nav.Link></Button>
        <Button className='group1' variant="secondary"> <Nav.Link href="/"> Календарь </Nav.Link></Button>
        <Button className='group1' variant="secondary"> <Nav.Link href="/"> Статистика </Nav.Link></Button>
        <Button href="/new" className='group1' variant="secondary">

          <NavDropdown
            id="nav-dropdown-dark-example"
            title={"Пресса"}
            menuVariant="dark"
            style={{ color: 'white' }}
            inline
          >

            <NavDropdown.Item href="/new"> Новости </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/blog"> Статьи </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/news"> Пресс-служба </NavDropdown.Item>


          </NavDropdown>
        </Button>

      </ButtonGroup>
    </Nav >

  );
}

export default ButtonGroups;