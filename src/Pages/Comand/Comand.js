import React, { Component, } from "react";
import Header from "../../Components/Header";
import Com from "../../Components/UI/Elements/Com";



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