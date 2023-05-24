import React, { Component } from "react";
import Header from "../../Components/Header";
import '../../CSS/App.css';
import Box2 from "../../Components/UI/Box/Box2";
import CardNew from "../../Components/UI/Elements/CardNew";


export default class New extends Component {
    render() {
        return (
            <div className="a">
                <Header />
                <div className="Articles">
                    <div className="boxs" style={{ marginLeft: '0' }}>
                        <div className="box">
                            <h1 style={{ color: '#15325c', font: 'italic normal normal 35px/35px PFDinTextCondPro-Italic' }}>Новости</h1>
                            <div id="leaders-list" style={{ marginLeft: '20px', marginTop: '30px', minHeight: '1024px', marginBottom: '30px' }}>
                                <CardNew />
                            </div>
                        </div>
                        <Box2 />
                    </div>
                </div>
            </div>
        )
    }
}