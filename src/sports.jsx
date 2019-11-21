import React, {useEffect, useState} from 'react';
import { Row, Col } from 'reactstrap';
import CreateSport from "./create-sport";

function Sports() {
  const [sports, setSports] = useState(null);

  function getSports() {
    fetch("https://konkurranseapi.azurewebsites.net/api/sport")
    .then(response => response.json())
    .then(json => setSports(json));
  }

  function addSportToList(sport) {
    const sportsList = sports;
    sportsList.push(sport);
    setSports([...sportsList]);
  }

  useEffect(() => {
   getSports();
  }, [])

  return (
    <div>
      <Row>
        <Col>Name</Col>
      </Row>
      {sports && sports.map(sport => <Row key={sport.id}><Col>{sport.name}</Col></Row>)} 
      <CreateSport addSportToList={addSportToList}></CreateSport>
    </div>
  );
}

export default Sports;
