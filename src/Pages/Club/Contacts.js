import React, { Component } from "react";
import Header from "../../Components/Header";
import Box2 from "../../Components/UI/Box/Box2";

export default class Contacts extends Component {
    render() {
        return (
            <div className="contacts">
                <Header />
                <div className="boxs">
                    <div className="box">

                        <div className="cont">
                            <h1 style={{ marginTop: '20px', textAlign: 'center', color: '#15325c', font: 'italic normal normal 35px/35px PFDinTextCondPro-Italic' }}>Контакты:</h1>
                            <div>

                                <h3>Киселев Дмитрий Александрович</h3>
                                <em>Генеральный директор</em>
                                <p>Телефон (приемная): (383) 276-34-96
                                    <p>E-mail приёмной:  <a href="mailto:mashins123@gmail.com"> mashins123@gmail.com </a>
                                    </p>
                                </p>
                            </div>
                            <div>

                                <h3>Киселев Дмитрий Александрович</h3>
                                <em>Генеральный директор</em>
                                <p>Телефон (приемная): (383) 276-34-96
                                    <p>E-mail приёмной:  <a href="mailto:mashins123@gmail.com"> mashins123@gmail.com </a>
                                    </p>
                                </p>
                            </div>
                            <div>

                                <h3>Киселев Дмитрий Александрович</h3>
                                <em>Генеральный директор</em>
                                <p>Телефон (приемная): (383) 276-34-96
                                    <p>E-mail приёмной:  <a href="mailto:mashins123@gmail.com"> mashins123@gmail.com </a>
                                    </p>
                                </p>
                            </div>
                            <div>

                                <h3>Киселев Дмитрий Александрович</h3>
                                <em>Генеральный директор</em>
                                <p>Телефон (приемная): (383) 276-34-96
                                    <p>E-mail приёмной:  <a href="mailto:mashins123@gmail.com"> mashins123@gmail.com </a> </p>
                                </p>
                            </div>
                        </div>
                    </div>

                   <Box2/>
                </div>
            </div>
        )
    }
}