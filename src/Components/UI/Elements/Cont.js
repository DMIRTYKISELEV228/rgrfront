import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";



const Cont = () => {

    const [comand, setComand] = useState(null);
    const [cat, setCat] = useState(null);


    useEffect(() => {
        axios

            .get('/api/v1/pressservice/')
            .then((response) => {
                setComand(response.data);

            })
            .catch((error) => { console.error(error) })
    }, [])


    useEffect(() => {
        axios
            .get('/api/v1/profpress/')
            .then((response) => {
                setCat(response.data);


            })
            .catch((error) => { console.error(error) })
    }, [])



    return (
        <div>
            <div>
                {
                    (comand !== null && cat !== null) ?
                        <>
                            {
                                comand.map((elem) => (
                                    <div style={{ marginBottom: '10px' }}>
                                        <h3 style={{ color: '#15325c', font: 'italic normal normal 25px/25px PFDinTextCondPro-Italic' }}>{elem.name} {elem.surname}</h3>
                                        <em>{cat[elem.idprof - 1].type}</em>

                                    </div>
                                ))
                            }

                            <p>Телефон (приемная): (383) 276-34-96
                                <p style={{fontSize: '15px'}}>E-mail приёмной:  <a href="mailto:mashins123@gmail.com"> mashins123@gmail.com </a>
                                </p>
                            </p>
                        </> : <></>

                }

            </div>

        </div>
    )
}


export default Cont;