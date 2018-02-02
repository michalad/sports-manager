"use strict"
import React from "react";
import {Col, ControlLabel, FormControl, FormGroup, Grid, HelpBlock, Row, Table} from "react-bootstrap";
import {connect} from "react-redux";

const SportEventsPage = ({...props}) => {
    const {
        sportEvents,
    } = props;
    return (
        <div>
            <h1>LIST</h1>
            <Grid>
                <Row className="show-grid">
                    <Col xs={8} md={4}>
                        <EventsTable sportEvents={sportEvents}/>
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


const FieldGroup = ({id, label, help, ...props}) => (
    <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
);

const EventRows = ({sportEvents}) => (
    sportEvents.map(sportEvent => (
            <tr>
                <td>{sportEvent.date}</td>
                <td>{sportEvent.name}</td>
            </tr>
        )
    )
);

const EventsTable = ({sportEvents}) => (
    <Table striped bordered condensed hover>
        <thead>
        <tr>
            <th>Date</th>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        <EventRows sportEvents={sportEvents}/>
        </tbody>
    </Table>
);

const mapStateToProps = state => (
    {
        sportEvents: state.sportEvents,
    });

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps)(SportEventsPage);
