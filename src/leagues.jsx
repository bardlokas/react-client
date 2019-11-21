import React, {useEffect, useState} from 'react';
import { Row, Col } from 'reactstrap';
import CreateLeagueForm from './Components/CreateLeagueForm';

function Leages() {
  const [leagues, setLeages] = useState(null);

  useEffect(() => {
    fetch("https://konkurranseapi.azurewebsites.net/api/league")
    .then(response => response.json())
    .then(json => setLeages(json));
  }, [])

  return (
    <div>

      <CreateLeagueForm/>
      
      <Row>
        <Col>Name</Col>
      </Row>
      {leagues && leagues.map(league => <Row key={league.id}><Col>{league.name}</Col></Row>)} 
    </div>
  );
}

export default Leages;
