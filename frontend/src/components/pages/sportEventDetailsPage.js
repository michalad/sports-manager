"use strict";
import React from "react";
import {connect} from "react-redux";
import {Table} from "react-bootstrap";
import AddMatchResultForm from "./AddMatchResultForm";
import AddTeamForm from './AddTeamForm'
import {loadMatches, loadStandings, loadTeams} from '../../app/actions';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const grid = {
    margin: '20px'

};

class SportEventDetailsPage extends React.Component {

    componentDidMount() {
        this.props.loadMatches(this.props.match.params.id);
        this.props.loadStandings(this.props.match.params.id);
        this.props.loadTeams(this.props.match.params.id);
    }

    render() {

        const {
            matches, teams, match
        } = this.props;

        return (
            <div>
                <Grid style={grid} container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <Paper><span>Matches:</span>
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
                            <span>Standings:</span>
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
    <Table striped bordered condensed hover>
        <tbody>
        <MatchRows matches={matches}/>
        </tbody>
    </Table>
);

const StandingsTable = ({standings}) => (
    <Table striped bordered condensed hover>
        <thead>
        <tr>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Draw</th>
            <th>Loss</th>
            <th>Goals for</th>
            <th>Goals against</th>
            <th>Goals difference</th>
            <th>Points</th>
        </tr>
        </thead>
        <tbody>
        <StandingsRows standings={standings}/>
        </tbody>
    </Table>
);

const MatchRows = ({matches}) => (
    matches.map(match => (
        <tr>
            <td>{match.teamA.name}</td>
            <td>{`${match.teamA.result} - ${match.teamB.result}`}</td>
            <td>{match.teamB.name}</td>
        </tr>
    ))

);


const StandingsRows = ({standings}) => (
    standings.map(standing => (
        <tr>
            <td>{standing.team}</td>
            <td>{standing.played}</td>
            <td>{standing.won}</td>
            <td>{standing.draw}</td>
            <td>{standing.loss}</td>
            <td>{standing.goalsFor}</td>
            <td>{standing.goalsAgainst}</td>
            <td>{standing.goalDifference}</td>
            <td><b>{standing.points}</b></td>

        </tr>
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


export default connect(mapStateToProps, mapDispatchToProps)(SportEventDetailsPage);


