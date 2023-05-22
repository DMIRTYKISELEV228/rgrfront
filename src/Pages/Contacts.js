import React, { Component } from "react";
import Header from "../Components/Header";

export default class Contacts extends Component {
    render() {
        return (
            <div className="contacts">
                <Header />
                <div className="boxs">
                    <div className="box">

                        <div className="cont">
                            <h1>Контакты:</h1>
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
                                    <p>E-mail приёмной:  <a href="mailto:mashins123@gmail.com"> mashins123@gmail.com </a>
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="box2">
                        <div class="module module--banner">
                            <div className="mr">
                                <a class="banner" href="http://shop.hcsibir.ru/">
                                    <img src="https://hcsibir.ru/uploads/advert/image/1/forma.jpg" alt="Forma" />
                                </a>
                            </div>
                            <div className="mr">
                                <a class="banner" href="http://tickets.hcsibir.ru/">
                                    <img src="https://hcsibir.ru/uploads/advert/image/2/tickets.jpg" alt="Tickets" />
                                </a>
                            </div>
                            <div className="mr">
                                <a class="banner" href="https://hcsibir.ru/pages/new_arena">
                                    <img src="https://hcsibir.ru/uploads/advert/image/14/banner-abon-2022.png" alt="Banner abon 2022" />
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}