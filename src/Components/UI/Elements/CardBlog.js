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
                  <Card style={{ width: '35rem', marginLeft: '10px', border: '1px solid black', borderRadius: '0', marginTop: '20px' }}>
                    <Card.Img variant="top" alt="" title="" src={elem.img} style={{borderRadius: '0'}}  />
                    <Card.Body>
                      <Card.Title style={{ fontSize: '18px' }}>
                        {elem.title}
                      </Card.Title>
                      <Card.Text>
                        <p style={{ fontSize: '13px' }}>{elem.content}</p>
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