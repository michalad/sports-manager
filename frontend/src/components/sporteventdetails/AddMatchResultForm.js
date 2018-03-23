"use strict";
import React, {Fragment} from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {addMatchResult} from "../../app/actions"
import {FormControl} from 'material-ui/Form';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import Tabs from "material-ui/es/Tabs/Tabs";
import Tab from "material-ui/es/Tabs/Tab";
import {DialogContent, DialogContentText, DialogTitle} from "material-ui";

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
            <Fragment>
                <DialogTitle id="form-dialog-title">Add match result</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} className={classes.container} inline>
                        <DialogContentText>Team A</DialogContentText>
                        <TeamSelect name='teamAName' teams={teams} classes={classes}/>
                        <ResultField name='teamAResult' placeholder="Result" classes={classes}/>

                        <DialogContentText>Team B</DialogContentText>
                        <TeamSelect name='teamBName' teams={teams} classes={classes}/>
                        <ResultField name='teamBResult' placeholder="Result" classes={classes}/>
                        <Field name="sportEventId" component={(field) => (
                            <input {...field.input} type="hidden"/>
                        )}/>
                        <FormControl margin='normal'>
                            <Button type="submit" variant="raised" color="primary" disabled={!auth.user.isAuthenticated}>Add</Button>
                        </FormControl>
                    </form>
                </DialogContent>
            </Fragment>
        );
    }
};

const TeamSelect = ({name, teams, classes}) => (
    <Field name={name}
           component={(field) => (
               <FormControl className={classes.formControl}>
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

const ResultField = ({name, placeholder, classes}) => (
    <Field name={name} component={(field) => (
        <FormControl className={classes.formControl}>
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
