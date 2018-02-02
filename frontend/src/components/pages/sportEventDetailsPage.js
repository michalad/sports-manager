"use strict"
import React from 'react';

class SportEventDetailsPage extends React.Component {
    render() {
        return (<div>
            <h1>Sports Event Details Page</h1>
        </div>)
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps', state);
    return {
        matches: state.matches,
    }
};

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps)(SportEventDetailsPage);


