import React, { Component } from "react";
import Header from "../../Components/Header";

export default class Sponsors extends Component {
    render() {
        return (
            <div className="a">

                <Header />
                <div className="boxs">
                    <div className="box">
                        <div className="spons">
                            <h1>Учередители:</h1>
                            <div className="lis">

                                <div>
                                    <a href="http://www.nso.ru/"><img  src="https://hcsibir.ru/assets/founders/novosibirsk-999730914e18f9f6d457ea9188a1093af3c74ba19bee99694d7d82f3ba51a848.jpg" alt="Novosibirsk" /></a>
                                    
                                    <br />
                                    <div className="title">
                                        <h5>
                                            ПРАВИТЕЛЬСТВО
                                        </h5>
                                        <h5>
                                            НОВОСИБИРСКОЙ ОБЛАСТИ
                                        </h5>
                                    </div>
                                    

                                </div>
                                <div>
                                <a href="http://www.nso.ru/"><img src="https://hcsibir.ru/assets/founders/anthracite-70fc17927573e908e7c08a052dd66b2471baade17b09bf056cbd0efe08a1aa95.jpg" alt="Anthracite" /></a>
                                    
                                    <br />
                                    <div className="title">
                                        <h5>
                                            АО «Сибирский Антрацит»
                                        </h5>
                                    </div>
                                    
                                </div>
                            </div>




                            <h1>Спонсоры:</h1>
                            <div className="lis">
                                <div>
                                    <a href="http://winline.ru/?utm_source=sibir&utm_medium=site&utm_content=logo_footer&utm_campaign=logo">
                                        <img src="https://hcsibir.ru/uploads/team_sponsor/original_image/68/medium_Logo_Winline_RGB.png" alt="Medium logo winline rgb" />
                                    </a>
                                    <h5 style={{ textAlign: 'center' }}>Винлайн</h5>
                                    <p style={{ fontSize: '15px', width: '250px' }}>
                                        — Букмекерская компания Winline является одним из лидеров индустрии ставок на спорт на территории РФ.
                                        В конце 2021 года Winline была признана второй самой быстро растущей компанией страны по итогам последних трех лет (среди 300 крупнейших компаний России по версии издания РБК).
                                        Winline выступает партнером ведущих российских и международных турниров и клубов, среди которых Российская Премьер-лига, Евролига, ФК «Спартак», ФК и БК «Зенит», ПБК ЦСКА, ФК «Краснодар», БК УНИКС, киберспортивный луб VIRUS Pro и многие другие.
                                    </p>
                                </div>
                                <div>
                                    <a href="http://energoprom.ru/">
                                        <img src="https://hcsibir.ru/uploads/team_sponsor/original_image/32/medium_epm-color.png" alt="Medium epm color" />
                                    </a>
                                    <h5 style={{ textAlign: 'center' }}>
                                        Группа «ЭНЕРГОПРОМ»
                                    </h5>
                                    <p style={{ fontSize: '15px', width: '250px' }}>
                                        — является крупнейшим производителем углеграфитовой продукции на рынке России и активным участником мирового рынка.
                                        НОВОСИБИРСКИЙ ЭЛЕКТРОДНЫЙ ЗАВОД

                                    </p>
                                </div>
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