import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";



const Tren = () => {

    const [comand, setComand] = useState(null);
    const [cat, setCat] = useState(null);


    useEffect(() => {
        axios

            .get('/api/v1/trener/')
            .then((response) => {
                setComand(response.data);

            })
            .catch((error) => { console.error(error) })
    }, [])


    useEffect(() => {
        axios
            .get('/api/v1/post/')
            .then((response) => {
                setCat(response.data);


            })
            .catch((error) => { console.error(error) })
    }, [])

    // console.log(cat)
    // console.log(comand)

    return (
        <div>
            <div>
                {
                    (comand !== null && cat !== null) ?
                        <>
                            {
                                comand.map((elem) => (
                                    <div class="item mix" style={{ display: 'inline-block' }}>
                                        <div class="item--img">
                                            <img src={elem.img} width='300px' height='300px' alt=" " />
                                        </div>
                                        <div class="item--status" style={{ color: 'white' }}><div>{cat[elem.Idpost - 1].post}</div></div>
                                        <div class="item--name"><div>{elem.surname} {elem.name}</div></div>
                                    </div>
                                ))
                            }
                        </> : <></>

                }

            </div>

        </div>
    )
}


export default Tren;