import React from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import kor from '../../Img/kor.jpg'


const Tren = () => {

    const [comand, setComand] = useState([]);
    const [cat, setCat] = useState([]);

    
    useEffect(() => {
        axios

            .get('/api/v1/trener/')
            .then((response) => {
                setComand(response.data);

            })
            .catch((error) => {console.error(error)})
    }, [])
    

    useEffect(() => {
        axios
            .get('/api/v1/post/', {timeout: 5000})
            .then((response) => {
                setCat(response.data);
                

            })
            .catch((error) => {console.error(error)})
    }, [])

    // console.log(cat)
    // console.log(comand)

    return (
        <div>
            <div>{comand.map(comand => {
                return (

                    <div class="item mix" style={{ display: 'inline-block' }}>
                        <div class="item--img">
                            <img src={comand.img} width='300px' height='300px' alt=" " />
                        </div>
                        <div class="item--status" style={{ color: 'white' }}><div>{cat[comand.Idpost].post}</div></div>
                        <div class="item--name"><div>{comand.surname} {comand.name}</div></div>
                    </div>)
            })}

            </div>

        </div>
    )
}


export default Tren;