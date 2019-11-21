import React, {useEffect, useState} from 'react';
import { Row, Col } from 'reactstrap';
import Sport from "./sport";

function Sports() {
  const [sports, setSports] = useState(null);

  useEffect(() => {
    fetch("https://konkurranseapi.azurewebsites.net/api/sport")
    .then(response => response.json())
    .then(json => setSports(json));
  }, [])

  return (
    <div>
      <Row>
        <Col>Name</Col>
      </Row>
      {sports && sports.map(sport => <Row key={sport.id}><Col>{sport.name}</Col></Row>)} 
      <Sport></Sport>
    </div>
  );
}

export default Sports;
