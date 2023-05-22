import React, { Component } from "react";
import Header from "../../Components/Header";
import Tren from "../../Components/UI/Elements/Tren";

export default class CoachingStaff extends Component {
    render() {
        return (
            <div className="a">
                <Header />
                <div className="guide">
                    <h1 style={{ marginLeft: '30px', color: '#15325c', font: 'italic normal normal 35px/35px PFDinTextCondPro-Italic' }}>Тренерский состав</h1>
                    <div id="leaders-list" style={{ marginLeft: '-20px', minHeight: '1024px' }}>
                        <center>
                            <Tren></Tren>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}