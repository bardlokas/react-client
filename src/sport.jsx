import React, {useEffect, useState} from 'react';
import { Row, Col, Input, Button } from 'reactstrap';

function Sport() {
  const [sport, setSport] = useState({name: ""});

  function updateName(event) {
    const updatedSport = {...sport};
    updatedSport.name = event.target.value;
    setSport(updatedSport);
  }
  function saveSport() {
    fetch("https://konkurranseapi.azurewebsites.net/api/sport", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sport) 
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }

  return (
    <div>
      <Row>   
        <Col>
          <Input value={sport.name} onChange={name => updateName(name)}></Input></Col>
        <Col>
          <Button onClick={() => saveSport()}>Save</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Sport;
