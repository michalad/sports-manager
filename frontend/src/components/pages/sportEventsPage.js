"use strict"
import React from 'react';
import {ListGroup, Grid, Row, Col, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';

class SportEventsPage extends React.Component {
  render() {
    return (<div>
      <h1>LIST</h1>
      <Grid>
        <Row className="show-grid">
          <Col xs={8} md={4}>
            <ListGroup componentClass="ul">
              <li className="list-group-item">Custom Child 1
              </li>
              <li className="list-group-item">Custom Child 2
              </li>
              <li className="list-group-item">Custom Child 3
              </li>
            </ListGroup>
          </Col>
          <Col xs={8} md={4}>
            <form>
              <FieldGroup id="formControlsText" type="text" label="Text" placeholder="Enter text"/>
              <FieldGroup id="formControlsEmail" type="email" label="Email address" placeholder="Enter email"/>
              <FieldGroup id="formControlsPassword" label="Password" type="password"/>
            </form>
          </Col>
        </Row>
      </Grid>
    </div>)
  }
}

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default SportEventsPage;
