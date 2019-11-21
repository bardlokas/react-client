import React, {useEffect, useState} from 'react';
import { Row, Col } from 'reactstrap';

function Teams() {
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    fetch("https://konkurranseapi.azurewebsites.net/api/team")
    .then(response => response.json())
    .then(json => setTeams(json));
  }, [])

  return (
    <div>
      <Row>
        <Col>Name</Col>
      </Row>
      {teams && teams.map(team => <Row key={team.id}><Col>{team.name}</Col></Row>)} 
      
    </div>
  );
}

export default Teams;
