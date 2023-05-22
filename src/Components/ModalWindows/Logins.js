import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Registration from './Registration';

function Logins() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  variant="secondary" onClick={handleShow}>
        Войти
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'black' }}>Войти</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: 'black' }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'black' }}>Адрес электронной почты:</Form.Label>
            <Form.Control type="email" placeholder="Почта" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: 'black' }}>Пароль:</Form.Label>
            <Form.Control type="password" placeholder="Пароль" />
          </Form.Group>
          <Button variant="link">Вы забыли пароль?</Button>

        </Modal.Body>
        <Modal.Footer>


          <Registration/>
          
          <Button variant="secondary" type="submit" onClick={handleClose}>
            Войти
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}



export default Logins;
