import Card from 'react-bootstrap/Card';
import '../../../CSS/App.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import React from "react";


function Cards() {

  const [comand, setComand] = useState(null);

  useEffect(() => {
    axios

      .get('/api/v1/articles/')
      .then((response) => {
        setComand(response.data);

      })
      .catch((error) => { console.error(error) })
  }, [])



  return (
    <div>

      {
        (comand !== null) ?
          <>
            <div className='cs'>
              {
                comand.map((elem) => (
                  <Card style={{ width: '25rem', marginLeft: '10px' }}>
                    <Card.Img variant="top" alt="" title="" src={elem.img} />
                    <Card.Body>
                      <Card.Title style={{ fontSize: '20px' }}>
                        {elem.title}
                      </Card.Title>
                      <Card.Text>

                        <p style={{ fontSize: '12.5px' }}>{elem.content}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))
              }
            </div>
          </> : <></>

      }

    </div>
  );
}

export default Cards;