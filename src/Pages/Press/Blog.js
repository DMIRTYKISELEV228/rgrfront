import React, { Component } from "react";
import Header from "../../Components/Header";
import CardBlog from '../../Components/UI/Elements/CardBlog';
import Box2 from "../../Components/UI/Box/Box2";
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
                            <div id="leaders-list" style={{ marginLeft: '20px', marginTop: '30px', marginBottom: '30px', minHeight: '1024px' }}>
                                <center>
                                    <CardBlog />
                                </center>
                            </div>
                        </div>
                        <Box2 />
                    </div>
                </div>
            </div>


        )
    }
}