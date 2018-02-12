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
        const {handleSubmit, classes} = this.props;

        return (
            <form onSubmit={handleSubmit} className={classes.container}>
                <Grid container spacing={24} direction="column">
                    <Grid item>
                        <Field name="username" component={(field) => (
                            <FormControl fullWidth>
                                <InputLabel>Login</InputLabel>
                                <Input {...field.input} type="string" placeholder="login"/>
                            </FormControl>
                        )}/>
                    </Grid>
                    <Grid item>
                        <Field name="password" component={(field) => (
                            <FormControl fullWidth>
                                <InputLabel>Password</InputLabel>
                                <Input {...field.input} type="string" placeholder="password"/>
                            </FormControl>
                        )}/>
                    </Grid>
                    <Grid item>
                        <Button type="submit" raised color="primary">Login</Button>
                    </Grid>
                </Grid>
            </form>
        );
    }

}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    onSubmit: login
};

LoginForm = withStyles(styles)(LoginForm);

LoginForm = reduxForm({
    form: 'LoginForm'
})(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);