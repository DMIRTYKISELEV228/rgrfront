import React, { Component } from "react";
import Header from "../Components/Header";
import kor from '../Img/kor.jpg'
import kirill from '../Img/kirill.jpg'
import sofa from '../Img/sofa.jpg'
import sem from '../Img/sem.jpg'
import tema from '../Img/tema.jpg'
import kos from '../Img/kos.jpg'

export default class Guide extends Component {
    render() {
        return (
            <div >
                <Header />

                <div className="guide">
                    <h1 style={{ textAlign: 'center', color: '#15325c', font: 'italic normal normal 35px/35px PFDinTextCondPro-Italic' }}>Руководство клуба</h1>
                    <div id="leaders-list" style={{ marginLeft: '20px', minHeight: '1024px' }}>
                        <center>
                            <div class="item mix" style={{ display: 'inline-block' }}>
                                <div class="item--img">
                                    <img src={kor} width='300px' height='300px' alt="List list travnikov" />
                                </div>
                                <div class="item--status">Сутенёр</div>
                                <div class="item--name">Дмитрий Александрович</div>
                                <div class="corn"></div>

                            </div>
                            <div class="item mix" style={{ display: 'inline-block' }}>
                                <div class="item--img">
                                    <img src={kirill} width='300px' height='300px' alt="List list travnikov" />
                                </div>
                                <div class="item--status">Мастер по интимному обслужеванию</div>
                                <div class="item--name">Кирилл Алексеевич</div>
                                <div class="corn"></div>

                            </div>
                            <div class="item mix" style={{ display: 'inline-block' }}>
                                <div class="item--img">
                                    <img src={sofa} width='300px' height='300px' alt="List list travnikov" />
                                </div>
                                <div class="item--status">Девочка с трассы</div>
                                <div class="item--name">Софа Сергеевна</div>
                                <div class="corn"></div>

                            </div>
                            <div class="item mix" style={{ display: 'inline-block' }}>
                                <div class="item--img">
                                    <img src={tema} width='300px' height='300px' alt="List list travnikov" />
                                </div>
                                <div class="item--status">Любитель потных яиц</div>
                                <div class="item--name">Артем Алексеевич</div>
                                <div class="corn"></div>

                            </div>
                            <div class="item mix" style={{ display: 'inline-block' }}>
                                <div class="item--img">
                                    <img src={sem} width='300px' height='300px' alt="List list travnikov" />
                                </div>
                                <div class="item--status">Спермаглот</div>
                                <div class="item--name">сема</div>
                                <div class="corn"></div>

                            </div>
                            <div class="item mix" style={{ display: 'inline-block' }}>
                                <div class="item--img">
                                    <img src={kos} width='300px' height='300px' alt="List list travnikov" />
                                </div>
                                <div class="item--status">Сосатель трансов</div>
                                <div class="item--name">костя</div>
                                <div class="corn"></div>

                            </div>


                        </center>
                    </div>
                </div>
            </div>

        )
    }
}