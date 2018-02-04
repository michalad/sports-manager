"use strict";
import React from "react";
import {connect} from "react-redux";
import {Col, Row, Table} from "react-bootstrap";
import AddMatchResultForm from "./AddMatchResultForm";
import {loadMatches, loadStandings} from '../../app/actions';

class SportEventDetailsPage extends React.Component {

    componentDidMount() {
        this.props.loadMatches(this.props.match.params.id);
        this.props.loadStandings(this.props.match.params.id);
    }

    render() {

        const {
            matches, match
        } = this.props;

        return (
            <div>
                <Row>
                    <Col xs={8} md={6}>
                        <AddMatchResultForm sportEventId={match.params.id}/>
                    </Col>
                </Row>
                <Col xs={8} md={4}>
                    <span>Matches:</span>
                    <MatchesTable matches={this.props.matches}/>
                </Col>
                <Col xs={8} md={4}>
                    <span>Standings:</span>
                    <StandingsTable standings={this.props.standings}/>
                </Col>
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
};


export default connect(mapStateToProps, mapDispatchToProps)(SportEventDetailsPage);


