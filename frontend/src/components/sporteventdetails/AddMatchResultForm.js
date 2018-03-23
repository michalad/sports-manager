"use strict";
import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {addMatchResult} from "../../app/actions"
import {InputLabel} from 'material-ui/Input';
import {FormControl} from 'material-ui/Form';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import Tabs from "material-ui/es/Tabs/Tabs";
import Tab from "material-ui/es/Tabs/Tab";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: '300px'
    },
    button: {
        margin: theme.spacing.unit
    },
    formControl: {
        margin: theme.spacing.unit,
        width: '90%'
    },
    formControlResult: {
        margin: theme.spacing.unit,
        width: '100px'
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class AddMatchResultForm extends React.Component {

    componentDidMount() {
        const {sportEventId} = this.props;
        this.props.change('sportEventId', sportEventId);
        this.props.change('teamAResult', 0);
        this.props.change('teamBResult', 0);
    }

    render() {
        const {handleSubmit, teams, classes, auth} = this.props;

        return (
            <form onSubmit={handleSubmit} className={classes.container} inline>
                <Grid container direction='column' spacing={0}>
                    <Grid item>
                        <TeamSelect name='teamAName' label='Team A' teams={teams} classes={classes}/>
                    </Grid>
                    <Grid item>
                        <ResultField name='teamAResult' label="Result A" placeholder="Result" classes={classes}/>
                    </Grid>
                    <Grid item>
                        <ResultField name='teamBResult' label="Result B" placeholder="Result" classes={classes}/>
                    </Grid>
                    <Grid item>
                        <TeamSelect name='teamBName' label='Team B' teams={teams} classes={classes}/>
                    </Grid>
                    <Field name="sportEventId" component={(field) => (
                        <input {...field.input} type="hidden"/>
                    )}/>
                    <Grid item>
                        <FormControl margin='normal'>
                            <Button type="submit" variant="raised" color="primary" disabled={!auth.user.isAuthenticated}>Add</Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
        );
    }
};

const TeamSelect = ({name, label, teams, classes}) => (
    <Field name={name}
           component={(field) => (
               <FormControl className={classes.formControl}>
                   <InputLabel shrink="true" forHtml={field.input.name}>{label}</InputLabel>
                   <Tabs
                       value={field.input.value}
                       onChange={(event, value) => {
                           field.input.onChange(value)
                       }}
                       indicatorColor="primary"
                       textColor="primary"
                       centered
                       scrollable
                       scrollButtons="auto"
                   >
                       {teams.map((team) => (
                           <Tab value={team.name} label={team.name}/>
                       ))}
                   </Tabs>
               </FormControl>
           )
           }>
    </Field>
);

const ResultField = ({name, label, placeholder, classes}) => (
    <Field name={name} component={(field) => (
        <FormControl className={classes.formControl}>
            <InputLabel shrink="true" forHtml={field.input.name}>{label}</InputLabel>
            <Tabs
                value={field.input.value}
                onChange={(event, value) => {
                    field.input.onChange(value)
                }}
                indicatorColor="primary"
                textColor="primary"
                scrollable
                scrollButtons="auto"
            >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                    <Tab value={score} label={score}/>
                ))}
            </Tabs>
        </FormControl>
    )}/>
);

const mapStateToProps = state => ({
    teams: state.teams,
    auth: state.auth
});

const mapDispatchToProps = {
    onSubmit: addMatchResult
};

AddMatchResultForm = withStyles(styles)(AddMatchResultForm);

AddMatchResultForm = reduxForm({
    form: 'addMatchForm'
})(AddMatchResultForm);

export default connect(mapStateToProps, mapDispatchToProps)(AddMatchResultForm);
