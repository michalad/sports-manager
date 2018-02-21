"use strict";
import React from "react";
import {connect} from "react-redux";
import {login} from "./loginActions";
import {Field, reduxForm} from "redux-form";

import {FormControl} from 'material-ui/Form';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import Input, {InputLabel} from 'material-ui/Input';
import Grid from "material-ui/es/Grid/Grid";
import { Redirect } from 'react-router'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class LoginForm extends React.Component {

    render() {
        const {handleSubmit, classes, auth} = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit} className={classes.container}>
                    <Grid container spacing={24} direction="column">
                        <Grid item>
                            <Field name="username" component={(field) => (
                                <FormControl fullWidth required>
                                    <InputLabel>Login</InputLabel>
                                    <Input {...field.input} type="string" placeholder="login"/>
                                </FormControl>
                            )}/>
                        </Grid>
                        <Grid item>
                            <Field name="password" component={(field) => (
                                <FormControl fullWidth required>
                                    <InputLabel>Password</InputLabel>
                                    <Input {...field.input} type="password" placeholder="password"/>
                                </FormControl>
                            )}/>
                        </Grid>
                        <Grid item>
                            <Button type="submit" variant="raised" color="primary">Login</Button>
                        </Grid>
                    </Grid>
                </form>
                {auth.user.isAuthenticated && (
                    <Redirect to={'/'}/>
                )}
            </div>
        );
    }

}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {
    onSubmit: login
};

LoginForm = withStyles(styles)(LoginForm);

LoginForm = reduxForm({
    form: 'LoginForm'
})(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);