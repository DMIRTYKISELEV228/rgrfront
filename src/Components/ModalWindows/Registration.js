import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import '../../CSS/Registration.css';

function Registration() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='registration'>

                <Button variant="link" onClick={handleShow}> Регистрация </Button>

                <Modal size='lg' show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: 'black' }}>Регистрация</Modal.Title>
                    </Modal.Header>
                    <Form style={{ color: 'black' }}>
                        <Modal.Body style={{ color: 'black' }}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label >Электронная почта: </Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword1">
                                <Form.Label >Пароль:</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword2">
                                <Form.Label >Подтверждение пароля:</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicText1">
                                <Form.Label >Фамилия:</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicText2">
                                <Form.Label >Имя:</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicText3">
                                <Form.Label >Отчество:</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicTel">
                                <Form.Label >Телефон:</Form.Label>
                                <Form.Control type="tel" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                                <Form.Check type="checkbox" label="Я хочу получать информационную рассылку" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox2">
                                <Form.Check type="checkbox" label="Я принимаю условия обработки персональных данных ХК «Сибирь»" />
                            </Form.Group>



                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" type="submit">
                                Зарегистрироваться
                            </Button>
                            {/* <Button variant="secondary" type="submit" onClick={handleClose}>
                                Войти
                            </Button> */}
                        </Modal.Footer>
                    </Form>


                </Modal>





            </div>
        </>
    );
}

export default Registration;