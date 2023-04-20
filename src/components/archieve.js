import React, { useState } from 'react';
import { Container, InputGroup, FormControl, Button, Row, Col , ListGroup} from 'react-bootstrap';

export default function Archieve(){
    const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchText);
    // Perform search logic here
  };
  const indianStates = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
  ];
  return (
    <>
    <Row className="search">
        <Col>
    <Container className="my-4">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for evidences"
          aria-label="Search for evidences"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>
          Go
        </Button>
      </InputGroup>
      {/* Rest of your page content here */}
    </Container>
    </Col>
    </Row>
    <Row className="state-list">
    <Container className="my-4">
        <h2 style={{color:"white"}}>Indian States</h2>
      <ListGroup>
        {indianStates.map((state) => (
          <ListGroup.Item key={state}>
            {state}
            <Button className="mx-2" variant="outline-secondary">
              &rarr;
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
    </Row>
    </>
  );
}