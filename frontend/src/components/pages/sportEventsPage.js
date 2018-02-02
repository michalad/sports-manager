"use strict"
import React from 'react';
import {ListGroup, ListGroupItem,  Grid, Row, Col, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import {connect} from 'react-redux';

const SportEventsPage = ({...props}) => {
    const {
        sportEvents,
    } = props;

    console.log('....');
    console.log(sportEvents);
    return (
        <div>
            <h1>LIST</h1>
            <Grid>
                <Row className="show-grid">
                    <Col xs={8} md={4}>
                        <ListGroup componentClass="ul">
                            <ListItems sportEvents={sportEvents}/>
                        </ListGroup>
                    </Col>
                    <Col xs={8} md={4}>
                        <form>
                            <FieldGroup id="formControlsText" type="text" label="Text" placeholder="Enter text"/>
                        </form>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
};


const FieldGroup = ({id, label, help, ...props}) => {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
};

const ListItems = ({sportEvents}) => sportEvents.map((sportEvent) =>
    (<ListGroupItem>{sportEvent.name}</ListGroupItem>)
);

const mapStateToProps = state => (
    {
        sportEvents: state.sportEvents,
    });

const mapDispatchToProps = {
};


export default connect(mapStateToProps, mapDispatchToProps)(SportEventsPage);
