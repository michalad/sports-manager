"use strict";
import React from "react";
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import {connect} from "react-redux";
import {createNewEvent, loadSportEvents} from './sportsEventsActions';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl} from 'material-ui/Form';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import {List, ListItem, ListItemIcon, ListItemText} from "material-ui";
import InboxIcon from 'material-ui-icons/Event';
import Moment from "moment/moment";
import {Link} from "react-router-dom";


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
                                <FormControl fullWidth required>
                                    <InputLabel htmlFor="event-name">Event name</InputLabel>
                                    <Input id="event-name" value={this.state.value}
                                           onChange={this.handleChange}/>
                                </FormControl>
                                <FormControl fullWidth>
                                    <TextField
                                        id="date"
                                        label="Event date"
                                        type="date"
                                        required
                                        value={this.state.date}
                                        onChange={this.handleChangeDate}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </FormControl>
                                <FormControl margin='normal'>
                                    <Button type="submit" variant="raised" color="primary"
                                            disabled={!auth.user.isAuthenticated}>
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
                            <div>
                                <List component="nav">
                                    <EventList sportEvents={sportEvents}/>
                                </List>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const EventList = ({sportEvents}) => sportEvents.map(sportEvent => (
        <ListItem key={sportEvent._id}
                  component={Link}
                  to={`/sport-events/${sportEvent._id}`}
                  button>
            <ListItemIcon>
                <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary={sportEvent.name} secondary={Moment(sportEvent.date).format('MMMM Do YYYY')}/>
        </ListItem>
    )
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
