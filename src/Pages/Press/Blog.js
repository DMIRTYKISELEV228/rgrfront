import React, { Component } from "react";
import Header from "../../Components/Header";
import Cards from '../../Components/UI/Elements/Cards';

export default class Blog extends Component {
    render() {
        return (
            <div className="a">
                <Header />

                
                    <div className="box">

                        <h1 style={{ textAlign: 'center', color: '#15325c', font: 'italic normal normal 35px/35px PFDinTextCondPro-Italic' }}>Статьи</h1>
                        <div id="leaders-list" style={{ marginLeft: '20px', marginTop: '50px', minHeight: '1024px' }}>
                            <center>
                                <Cards />
                            </center>
                        </div>
                    </div>

                </div>
           

        )
    }
}