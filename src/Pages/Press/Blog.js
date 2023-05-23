import React, { Component } from "react";
import Header from "../../Components/Header";
import Cards from '../../Components/UI/Elements/Cards';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default class Blog extends Component {
    render() {
      
        return (
            <div className="a">
                <Header />
                <div className="Articles">
                    <div className="boxs" style={{ marginLeft: '0' }}>
                        <div className="box">
                            <h1 style={{ textAlign: 'center', color: '#15325c', font: 'italic normal normal 35px/35px PFDinTextCondPro-Italic' }}>Статьи</h1>
                            <div id="leaders-list" style={{ marginLeft: '20px', marginTop: '50px', minHeight: '1024px' }}>
                                <center>
                                    <Cards />
                                </center>
                            </div>
                        </div>
                        <div className="box2">
                            <div class="module module--banner" style={{marginBottom: ' 30px'}}>
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
                            <Calendar/>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}