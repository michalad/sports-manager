"use strict"
import React from "react";
import {Col, ControlLabel, FormControl, FormGroup, Grid, HelpBlock, Row, Table, Button} from "react-bootstrap";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {loadSportEvents, createNewEvent} from '../../app/actions';

class SportEventsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.loadSportEvents();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createNewEvent({
            name: this.state.value,
            date: new Date()
        });
    }

    render() {
        const {
            sportEvents
        } = this.props;
        console.log('....', this.props);
        console.log(sportEvents);

        return (
            <div>
                <h1>LIST</h1>
                <Grid>
                    <Row>
                        <Col xs={8} md={4}>
                            <form onSubmit={this.handleSubmit}>
                                <FieldGroup id="formControlsText" type="text" label="Text" placeholder="Enter text" value={this.state.value} onChange={this.handleChange}/>
                                <Button type="submit">Add</Button>
                            </form>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={8} md={4}>
                            <EventsTable sportEvents={sportEvents}/>
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

const EventRows = ({sportEvents}) => sportEvents.map(sportEvent => (
        <EventRow key={sportEvent._id} sportEvent={sportEvent}/>
    )
);

const EventRow = ({sportEvent}) => (
    <tr>
        <td><Link to={`/sport-events/${sportEvent._id}`}>{sportEvent.date}</Link></td>
        <td><Link to={`/sport-events/${sportEvent._id}`}>{sportEvent.name}</Link></td>
    </tr>
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

const mapStateToProps = state => {
    console.log('mapStateToProps', state);
    return {
        sportEvents: state.sportEvents,
    }
};

const mapDispatchToProps = {
    loadSportEvents: loadSportEvents,
    createNewEvent:  createNewEvent
};


export default connect(mapStateToProps, mapDispatchToProps)(SportEventsPage);
