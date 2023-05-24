import React, { Component } from "react";
import Header from "../../Components/Header";
import Box2 from "../../Components/UI/Box/Box2";
import Cont from "../../Components/UI/Elements/Cont";

export default class News extends Component {
    render() {
        return (
            <div className="contacts">
                <Header />
                <div className="boxs">
                    <div className="box">

                        <div className="cont">
                            <h1 style={{ marginTop: '20px', textAlign: 'center', color: '#15325c', font: 'italic normal normal 35px/35px PFDinTextCondPro-Italic' }}>ПРЕСС-СЛУЖБА КЛУБА</h1>
                            <div style={{ marginTop: '20px', fontSize: '20px'}}>
                                <Cont />
                            </div>

                        </div>
                    </div>

                    <Box2 />
                </div>
            </div>
        )
    }
}