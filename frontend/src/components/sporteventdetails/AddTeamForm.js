"use strict";
import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import Button from 'material-ui/Button';
import {addTeam} from "../../app/actions"

let AddTeamForm = ({...props}) => {
    const {handleSubmit, sportEventId, auth} = props;
    props.change('sportEventId', sportEventId);
    return (<form onSubmit={handleSubmit} inline>
        <Field name='name' component={(field) => {
            return (<input {...field.input} type="text" placeholder="Team Name" bsSize="small"/>);
        }}/>
        <Field name="sportEventId" component={(field) => (
            <input {...field.input} type="hidden"/>
        )}/>
        <Button type="submit" disabled={!auth.user.isAuthenticated}>Add</Button>
    </form>);
};

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {
    onSubmit: addTeam
};

AddTeamForm = reduxForm({
    form: 'addTeamForm'
})(AddTeamForm);

export default connect(mapStateToProps, mapDispatchToProps)(AddTeamForm);
