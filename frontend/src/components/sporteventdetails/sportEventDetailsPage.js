"use strict";
import React from "react";
import { connect } from "react-redux";
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import MatchResultDialog from "../matchResultDialog/MatchResultDialog";
import AddTeamForm from './AddTeamForm'
import Typography from 'material-ui/Typography';
import { loadMatches, loadStandings, loadTeams } from '../../app/actions';
import { openMatchResultDialog } from '../matchResultDialog/matchResultDialogActions'
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { Button, Hidden, Slide } from "material-ui";
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    grid: {
        marginTop: '10px'
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
});

class SportEventDetailsPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadMatches(this.props.match.params.id);
        this.props.loadStandings(this.props.match.params.id);
        this.props.loadTeams(this.props.match.params.id);
    }

    render() {

        const {
            matches, teams, match, classes, auth
        } = this.props;

        return (
            <div>
                <Grid className={classes.grid} container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <Typography color="primary">
                                Matches
                            </Typography>
                            <MatchesTable matches={this.props.matches} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <Typography color="primary">
                                Standings
                            </Typography>
                            <StandingsTable standings={this.props.standings} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <AddTeamForm sportEventId={match.params.id} />
                        </Paper>
                    </Grid>
                </Grid>
                <Button variant="fab"
                    onClick={this.props.openMatchResultDialog}
                    className={classes.fab}
                    color="primary"
                    disabled={!auth.user.isAuthenticated}>
                    <AddIcon />
                </Button>
                <MatchResultDialog sportEventId={match.params.id} teams={teams} />
            </div>
        );
    }
}

const MatchesTable = ({ matches }) => (
    <Table>
        <TableBody>
            <MatchRows matches={matches} />
        </TableBody>
    </Table>
);

const StandingsTable = ({ standings }) => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Team</TableCell>
                <TableCell padding="dense">Played</TableCell>
                <TableCell padding="dense">Won</TableCell>
                <Hidden only={['xs', 'sm']}>
                    <TableCell padding="dense">Draw</TableCell>
                    <TableCell padding="dense">Loss</TableCell>
                    <TableCell padding="dense">Goals for</TableCell>
                    <TableCell padding="dense">Goals against</TableCell>
                    <TableCell padding="dense">Goals difference</TableCell>
                </Hidden>
                <TableCell>Points</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <StandingsRows standings={standings} />
        </TableBody>
    </Table>
);

const MatchRows = ({ matches }) => (
    matches.map(match => (
        <TableRow>
            <TableCell>{match.teamA.name}</TableCell>
            <TableCell>{`${match.teamA.result} - ${match.teamB.result}`}</TableCell>
            <TableCell>{match.teamB.name}</TableCell>
        </TableRow>
    ))

);


const StandingsRows = ({ standings }) => (
    standings.map(standing => (
        <TableRow>
            <TableCell>{standing.team}</TableCell>
            <TableCell padding="dense">{standing.played}</TableCell>
            <TableCell padding="dense">{standing.won}</TableCell>
            <Hidden only={['xs', 'sm']}>
                <TableCell padding="dense">{standing.draw}</TableCell>
                <TableCell padding="dense">{standing.loss}</TableCell>
                <TableCell padding="dense">{standing.goalsFor}</TableCell>
                <TableCell padding="dense">{standing.goalsAgainst}</TableCell>
                <TableCell padding="dense">{standing.goalDifference}</TableCell>
            </Hidden>
            <TableCell><b>{standing.points}</b></TableCell>

        </TableRow>
    ))

);

const mapStateToProps = state => {
    return {
        matches: state.matches,
        standings: state.standings,
        auth: state.auth
    }
};

const mapDispatchToProps = {
    loadMatches: loadMatches,
    loadStandings: loadStandings,
    loadTeams: loadTeams,
    openMatchResultDialog: openMatchResultDialog
};


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SportEventDetailsPage));


