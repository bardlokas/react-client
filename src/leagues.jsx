import React, {useEffect, useState} from 'react';
import { Row, Col } from 'reactstrap';

function Leages() {
  const [leagues, setLeages] = useState(null);

  useEffect(() => {
    fetch("https://konkurranseapi.azurewebsites.net/api/league")
    .then(response => response.json())
    .then(json => setLeages(json));
  }, [])

  return (
    <div>
      <Row>
        <Col>Name</Col>
      </Row>
      {leagues && leagues.map(league => <Row key={league.id}><Col>{league.name}</Col></Row>)} 
    </div>
  );
}

export default Leages;
