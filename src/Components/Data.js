import axios from 'axios';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from "react";


const Exp = () => {


    const [comand, setComand] = useState([]);


    useEffect(() => {
        axios.get('/api/v1/hockey/')
            .then((response) => {
                setComand(response.data);
                
            })
    }, [])

    return (
        <div>{comand.map(comand => {
            return (
                <div>
                  <div>{comand.surname} {comand.name}</div>
                </div>)
        })}

        </div>
    )

}
export default Exp;