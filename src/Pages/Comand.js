import React, { Component, } from "react";
import Header from "../Components/Header";
import Exp from "../Components/Data";
import kor from '../Img/kor.jpg'
import kirill from '../Img/kirill.jpg'
import sofa from '../Img/sofa.jpg'
import sem from '../Img/sem.jpg'
import tema from '../Img/tema.jpg'
import kos from '../Img/kos.jpg'
import Com from "../Components/UI/Com";



export default class Comand extends Component {
    render() {
        
        return (
            <div className="a">
                <Header />
                <div className="guide">
                    <h1 style={{ textAlign: 'center', color: '#15325c', font: 'italic normal normal 35px/35px PFDinTextCondPro-Italic' }}>Игроки</h1>
                    <div id="leaders-list" style={{ marginLeft: '20px', minHeight: '1024px' }}>
                        <center>
                            <Com></Com>
                        </center>
                    </div>
                </div>
                

            </div>
        )
    }
}