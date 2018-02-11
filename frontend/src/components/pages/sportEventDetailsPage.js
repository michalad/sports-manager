"use strict";
import React from "react";
import {connect} from "react-redux";
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import AddMatchResultForm from "./AddMatchResultForm";
import AddTeamForm from './AddTeamForm'
import Typography from 'material-ui/Typography';
import {loadMatches, loadStandings, loadTeams} from '../../app/actions';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    grid: {
        marginTop: '10px'
    }
});

class SportEventDetailsPage extends React.Component {

    componentDidMount() {
        this.props.loadMatches(this.props.match.params.id);
        this.props.loadStandings(this.props.match.params.id);
        this.props.loadTeams(this.props.match.params.id);
    }

    render() {

        const {
            matches, teams, match, classes
        } = this.props;

        return (
            <div>
                <Grid className={classes.grid} container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <Typography color="primary" >
                                Matches
                            </Typography>
                            <MatchesTable matches={this.props.matches}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <AddMatchResultForm sportEventId={match.params.id} teams={teams}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <Typography color="primary" >
                                Standings
                            </Typography>
                            <StandingsTable standings={this.props.standings}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <AddTeamForm sportEventId={match.params.id}/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const MatchesTable = ({matches}) => (
    <Table>
        <TableBody>
            <MatchRows matches={matches}/>
        </TableBody>
    </Table>
);

const StandingsTable = ({standings}) => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Team</TableCell>
                <TableCell>Played</TableCell>
                <TableCell>Won</TableCell>
                <TableCell>Draw</TableCell>
                <TableCell>Loss</TableCell>
                <TableCell>Goals for</TableCell>
                <TableCell>Goals against</TableCell>
                <TableCell>Goals difference</TableCell>
                <TableCell>Points</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <StandingsRows standings={standings}/>
        </TableBody>
    </Table>
);

const MatchRows = ({matches}) => (
    matches.map(match => (
        <TableRow>
            <TableCell>{match.teamA.name}</TableCell>
            <TableCell>{`${match.teamA.result} - ${match.teamB.result}`}</TableCell>
            <TableCell>{match.teamB.name}</TableCell>
        </TableRow>
    ))

);


const StandingsRows = ({standings}) => (
    standings.map(standing => (
        <TableRow>
            <TableCell>{standing.team}</TableCell>
            <TableCell>{standing.played}</TableCell>
            <TableCell>{standing.won}</TableCell>
            <TableCell>{standing.draw}</TableCell>
            <TableCell>{standing.loss}</TableCell>
            <TableCell>{standing.goalsFor}</TableCell>
            <TableCell>{standing.goalsAgainst}</TableCell>
            <TableCell>{standing.goalDifference}</TableCell>
            <TableCell><b>{standing.points}</b></TableCell>

        </TableRow>
    ))

);

const mapStateToProps = state => {
    return {
        matches: state.matches,
        standings: state.standings
    }
};

const mapDispatchToProps = {
    loadMatches: loadMatches,
    loadStandings: loadStandings,
    loadTeams: loadTeams,
};


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SportEventDetailsPage));


