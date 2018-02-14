"use strict";
import React from "react";
import LoginForm from "./LoginForm";
import {Grid, Paper} from "material-ui";
import {withStyles} from "material-ui/styles/index";

const styles = theme => ({
    grid: {
        marginTop: '40px'
    },
    paper: {
        padding: '30px',
        minWidth: '300px'
    }
});

class LoginPage extends React.Component {


    render() {

        const {classes} = this.props;

        return (
            <div>
                <Grid className={classes.grid} container spacing={24} justify="center">
                    <Grid item >
                        <Paper className={classes.paper}>
                            <LoginForm/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default withStyles(styles)(LoginPage);