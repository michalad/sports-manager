"use strict";
import React from "react";
import {connect} from "react-redux";
import {Col, Row, Table} from "react-bootstrap";
import AddMatchResultForm from "./AddMatchResultForm";
import {loadMatches} from "../../app/actions"
import {Col, Table} from "react-bootstrap";
import {loadMatches, loadStandings} from '../../app/actions';

class SportEventDetailsPage extends React.Component {

    componentDidMount() {
        this.props.loadMatches(this.props.match.params.id);
    }


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
                <Col xs={8} md={4}>
                    <span>Matches:</span>
                    <MatchesTable matches={this.props.matches}/>
                </Col>
                <Col xs={8} md={4}>
                    <span>Standings:</span>
                    <StandingsTable standings={this.props.standings}/>
                </Col>
                <Row>
                    <Col xs={8} md={6}>
                        <AddMatchResultForm sportEventId={match.params.id}/>
                    </Col>
                </Row>
                <Row>

                    <Col xs={8} md={4}>
                        <MatchesTable matches={matches}/>
                    </Col>
                </Row>
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
            <td>{standing.points}</td>
            <td>{standing.played}</td>
            <td>{standing.won}</td>

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
    loadMatches: loadMatches
};


export default connect(mapStateToProps, mapDispatchToProps)(SportEventDetailsPage);


