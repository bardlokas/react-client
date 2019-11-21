import React, {useEffect, useState} from 'react';
import { Row, Col, Input, Button } from 'reactstrap';

function CreateSport({addSportToList}) {
  const [sport, setSport] = useState({name: ""});

  function updateName(value) {
    const updatedSport = {...sport};
    updatedSport.name = value;
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
    .then(json => {
      addSportToList(json);
      updateName("");
    })
  }

  return (
    <div>
      <Row>   
        <Col>
          <Input value={sport.name} onChange={event => updateName(event.target.value)}></Input></Col>
        <Col>
          <Button onClick={() => saveSport()}>Save</Button>
        </Col>
      </Row>
    </div>
  );
}

export default CreateSport;
