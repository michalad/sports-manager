"use strict"
import React from "react";
import { Col, ControlLabel,FormControl, FormGroup, Grid, HelpBlock, Row, Table} from "react-bootstrap";
import {connect} from "react-redux";
import {loadSportEvents} from '../../app/actions';

class SportEventsPage extends React.Component {

    componentDidMount() {
        this.props.loadSportEvents();
    }
    render({...props}) {
        const {
            sportEvents
        } = this.props;
        console.log('....', this.props);
        console.log(sportEvents);
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
    }
}

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

const mapStateToProps = state =>{
    console.log('mapStateToProps', state)
    return {
        sportEvents: state.sportEvents,
    }
};

const mapDispatchToProps = {
    loadSportEvents: loadSportEvents
};


export default connect(mapStateToProps, mapDispatchToProps)(SportEventsPage);
