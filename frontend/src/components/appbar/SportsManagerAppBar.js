"use strict";
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {withStyles} from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Button from 'material-ui/Button';

import {Link} from 'react-router-dom';

import {logout} from '../login/loginActions'
import Notifications from "../notifications/Notifications";

const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class SportsManagerAppBar extends React.Component {

    logout() {
        this.props.logout()
    }

    render() {
        const {auth, classes} = this.props;

        let button = null;

        if (auth.user.isAuthenticated) {
            button = <Button onClick={this.logout.bind(this)} color="inherit">Logout</Button>
        } else {
            button = <Button component={Link} to="/login" color="inherit">Login</Button>
        }

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography type="title" color="inherit" className={classes.flex}>
                            Sports manager
                        </Typography>
                        {button}
                    </Toolbar>
                </AppBar>
                <Notifications/>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    auth: state.auth
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: logout
    }, dispatch);
}

SportsManagerAppBar = withStyles(styles)(SportsManagerAppBar);

export default connect(mapStateToProps, mapDispatchToProps)(SportsManagerAppBar);