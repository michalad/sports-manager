"use strict"
import React from "react";
import {ControlLabel, FormControl, FormGroup, HelpBlock, Table, Button} from "react-bootstrap";
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {loadSportEvents, createNewEvent} from '../../app/actions';


const card = {
    maxWidth: '400px',
    padding: 16,
    margin: 'auto',
    marginTop: '20px'

};

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
                <Grid container spacing={24}>
                    <Grid item xs>
                        <Paper style={card}>
                            <form onSubmit={this.handleSubmit}>
                                <FieldGroup id="formControlsText" type="text" label="Event name" placeholder="Enter text" value={this.state.value} onChange={this.handleChange}/>
                                <Button type="submit">Add</Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <Paper style={card}>
                            <EventsTable sportEvents={sportEvents}/>
                        </Paper>
                    </Grid>
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
