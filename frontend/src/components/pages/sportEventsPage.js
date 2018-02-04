"use strict"
import React from "react";
import {Table} from "react-bootstrap";
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {loadSportEvents, createNewEvent} from '../../app/actions';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';


const card = {
    maxWidth: '600px',
    padding: 16,
    margin: 'auto',
    marginTop: '20px',

};

class SportEventsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            date: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.loadSportEvents();
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            date: event.target.date
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createNewEvent({
            name: this.state.value,
            date: this.state.date
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
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="event-name">Event name</InputLabel>
                                    <Input id="event-name" value={this.state.value}
                                           onChange={this.handleChange}/>
                                </FormControl>
                                <FormControl fullWidth>
                                    <TextField
                                        id="date"
                                        label="Event date"
                                        type="date"
                                        value={this.state.date}
                                        onChange={this.handleChange}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </FormControl>
                                <FormControl margin='normal'>
                                    <Button type="submit" raised color="primary">
                                        Add
                                    </Button>
                                </FormControl>
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
    createNewEvent: createNewEvent
};


export default connect(mapStateToProps, mapDispatchToProps)(SportEventsPage);
