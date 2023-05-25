import React, { Component } from "react";
import Header from "../../Components/Header";
import Logins from "../../Components/ModalWindows/Logins";


export default class TSO extends Component {
    render() {
    
        return (
            <div className="a">
                <Header />
                <div className="tso">
                    <h1 style={{ textAlign: 'center', color: '#15325c', font: 'italic normal normal 35px/35px PFDinTextCondPro-Italic' }}> Продажа Билетов Онлайн </h1>
                    
                    <div id="leaders-list" style={{ marginLeft: '', }}>
                        
                        <table style={{ marginTop: '30px', border: '1px solid black', borderRadius: '15px' }} class="tickets__list restyling">
                            <thead>
                                <tr style={{ border: '1px solid black', borderRadius: '15px' }}>
                                    <th >Матч</th>
                                    <th >Дата проведения</th>
                                    <th style={{textAlign: 'right'}}><Logins></Logins></th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr class="no-events">

                                    <td class="empty" colspan="4">
                                        <center style={{ minHeight: '50px', marginTop: '5%', marginBottom: '25px' }}>
                                            <h3>Мероприятий не запланировано</h3>
                                        </center>
                                    </td>

                                </tr>
                            </tbody>
                        </table>

                        <div style={{ border: '1px solid black', fontSize: '15px', marginTop: '0.4px' }} >

                            <div style={{ display: 'inline-block', marginLeft: '10px', marginTop: '7px' }} >
                                <img src="https://tickets.hcsibir.ru/static/tickets/img/icon/nav_1.png" width='50px' alt="ico" /><br />
                                <a href="/" > <span  style={{marginTop: '5px'}}> Правила покупки <br /> билетов </span> </a>
                              
                            </div>

                            <div style={{ display: 'inline-block', marginLeft: '10px', marginTop: '7px' }}>

                                <img src="https://tickets.hcsibir.ru/static/tickets/img/icon/nav_2.png" width='50px' alt="ico" /><br />
                                <a href="/" ><span style={{ marginTop: '5px' }}>Продажа билетов  в <br /> кассе ЛДС </span></a>
                            </div>

                            <div style={{ display: 'inline-block', marginLeft: '10px', marginTop: '7px' }}>
                                <img src="https://tickets.hcsibir.ru/static/tickets/img/icon/nav_3.png" width='50px' alt="ico" /><br />
                                <a href="/seasontickets" ><span style={{ marginTop: '5px' }}>Схема арены <br /> и цены</span></a>
                            </div>

                            <div style={{ display: 'inline-block', marginLeft: '10px', marginTop: '7px' }}>
                                <img src="https://tickets.hcsibir.ru/static/tickets/img/icon/nav_4.png" width='50px' alt="ico" /><br />
                                <a href="/" ><span style={{ marginTop: '5px' }}>Выездные <br /> матчи</span></a>
                            </div >

                            <div style={{ display: 'inline-block', marginLeft: '10px', marginTop: '12px' }}>
                                <img src="https://tickets.hcsibir.ru/static/tickets/img/icon/nav_5.png" width='50px' alt="ico" /><br />
                                <a href="/" ><span style={{ marginTop: '5px' }}>Расписание <br /> матчей</span></a>
                            </div>

                            <div style={{ display: 'inline-block', marginLeft: '150px', marginBottom: '20px', fontSize: '20px' }}>
                                <span>Способы оплаты:</span>
                                <br />
                                <img src="https://tickets.hcsibir.ru/static/tickets/img/icon/cards.png" width='150px' alt="ico" /><br />
                            </div>

                        </div >
                    </div >
                </div >

            </div >

        )
    }
}