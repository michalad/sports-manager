"use strict"
import React from "react";
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {loadSportEvents, createNewEvent} from '../../app/actions';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl} from 'material-ui/Form';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Moment from 'moment';


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
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.loadSportEvents();
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleChangeDate(event) {
        this.setState({
            date: event.target.value
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
            sportEvents, auth
        } = this.props;

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
                                        onChange={this.handleChangeDate}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </FormControl>
                                <FormControl margin='normal'>
                                    <Button type="submit" raised color="primary" disabled={!auth.user.isAuthenticated}>
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
    <TableRow key={sportEvent.id}>
        <TableCell><Link to={`/sport-events/${sportEvent._id}`}>{Moment(sportEvent.date).format('MMMM Do YYYY')}</Link></TableCell>
        <TableCell><Link to={`/sport-events/${sportEvent._id}`}>{sportEvent.name}</Link></TableCell>
    </TableRow>
);

const EventsTable = ({sportEvents}) => (
    <Table >
        <TableHead>
            <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <EventRows sportEvents={sportEvents}/>
        </TableBody>
    </Table>

);

const mapStateToProps = state => {
    return {
        sportEvents: state.sportEvents,
        auth: state.auth,
    }
};

const mapDispatchToProps = {
    loadSportEvents: loadSportEvents,
    createNewEvent: createNewEvent
};


export default connect(mapStateToProps, mapDispatchToProps)(SportEventsPage);
