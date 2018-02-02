"use strict";
import React from "react";
import {connect} from "react-redux";
import {Col, Table} from "react-bootstrap";
import {connect} from "react-redux";

class SportEventDetailsPage extends React.Component {
    render() {

        const {
            matches
        } = this.props;

        return (
            <div>
                <Col xs={8} md={4}>
                    <MatchesTable matches={matches}/>
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

const MatchRows = ({matches}) => (
    matches.map(match => (
        <tr>
            <td>{match.teamA.name}</td>
            <td>{`${match.teamA.result} - ${match.teamB.result}`}</td>
            <td>{match.teamB.name}</td>
        </tr>
    ))

);

const mapStateToProps = state => {
    console.log('mapStateToProps', state);
    return {
        matches: state.matches,
    }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SportEventDetailsPage);


