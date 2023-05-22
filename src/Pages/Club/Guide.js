import React, { Component } from "react";
import Header from "../../Components/Header";
import Spon from "../../Components/UI/Elements/Spon";

export default class Guide extends Component {
    render() {
        return (
            <div >
                <Header />

                <div className="guide">
                    <h1 style={{ textAlign: 'center', color: '#15325c', font: 'italic normal normal 35px/35px PFDinTextCondPro-Italic' }}>Руководство клуба</h1>
                    <div id="leaders-list" style={{ marginLeft: '20px', minHeight: '1024px' }}>
                        <center>
                            <Spon></Spon>
                        </center>
                    </div>
                </div>
            </div>

        )
    }
}