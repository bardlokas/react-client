import React, {useEffect, useState} from 'react';
import { Row, Col } from 'reactstrap';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Select from 'react-select';

function SportsDropdown() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
    fetch("https://konkurranseapi.azurewebsites.net/api/sport")
        .then(response => response.json())
        .then(json => setCategories(json));
    }, [])
        const opts = categories.map(x => ({ value: x.id, label: x.name })); 
    return(
        <div>
            <Select options={opts} isClearable isMulti/>
        </div>
    );
}

function CreateLeagueForm(){

    return (
        <div>
            <Row>
                <Col xs={6}>
                    Name:
                </Col>
                <Col xs={6}>
                    <input type="text" width="100%"></input>
                </Col>
            </Row>
            <Row>
                 <Col xs={6}>
                    Sport Category:
                </Col>
                <Col xs={6}>
                    <SportsDropdown/>
                </Col>
            </Row>
            
        </div>  
    )   
}


export default CreateLeagueForm;