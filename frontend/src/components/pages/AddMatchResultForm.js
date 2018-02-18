"use strict";
import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {addMatchResult} from "../../app/actions"
import Input, {InputLabel} from 'material-ui/Input';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 80,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class AddMatchResultForm extends React.Component {

    componentDidMount() {
        const {sportEventId} = this.props;
        this.props.change('sportEventId', sportEventId);
    }

    render() {
        const {handleSubmit, sportEventId, teams, classes, auth} = this.props;

        return (
            <form onSubmit={handleSubmit} className={classes.container} inline>

                <TeamSelect name='teamAName' label='Team' teams={teams} classes={classes}/>
                <ResultField name='teamAResult' label="Result" placeholder="Result" classes={classes}/>
                <ResultField name='teamBResult' label="Result" placeholder="Result" classes={classes}/>
                <TeamSelect name='teamBName' label='Team' teams={teams} classes={classes}/>
                <Field name="sportEventId" component={(field) => (
                    <input {...field.input} type="hidden"/>
                )}/>
                <FormControl margin='normal'>
                    <Button type="submit" raised color="primary" disabled={!auth.user.isAuthenticated}>Add</Button>
                </FormControl>
            </form>
        );
    }
};

const TeamSelect = ({name, label, teams, classes}) => (
    <Field name={name}
           component={(field) => (
               <FormControl className={classes.formControl}>
                   <InputLabel forHtml={field.input.name}>{label}</InputLabel>
                   <Select
                       value={field.input.value}
                       onChange={field.input.onChange}
                       inputProps={{
                           name: field.input.name
                       }}
                       children={field.children}
                   >

                   </Select>
               </FormControl>
           )
           }>
        {teams.map((team) => (
            <MenuItem value={team.name} key={team.name}>{team.name}</MenuItem>
        ))}
    </Field>
);

const ResultField = ({name, label, placeholder, classes}) => (
    <Field name={name} component={(field) => (
        <FormControl className={classes.formControl}>
            <InputLabel forHtml={field.input.name}>{label}</InputLabel>
            <Input {...field.input} type="number" placeholder={placeholder}/>
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
