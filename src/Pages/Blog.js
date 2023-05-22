import React, { Component } from "react";
import Header from "../Components/Header";
import Cards from '../Components/Cards';

export default class Blog extends Component {
    render() {
        return (
            <div className="a">
                <Header />
                <div className='d'> Статьи </div>
                <Cards />
            </div>
        )
    }
}