"use strict";
import React from "react";
import {connect} from "react-redux";
import {Button, Form, FormControl, FormGroup} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {addTeam} from "../../app/actions"

let AddTeamForm = ({...props}) => {
    const { handleSubmit, sportEventId } = props;
    props.change('sportEventId', sportEventId);
    return (<Form onSubmit={handleSubmit} inline>
        <FormGroup>
            <Field name='name'  component={(field) => {
                return (<FormControl {...field.input} type="text" placeholder="Team Name" bsSize="small"/>);
            }}/>
            <Field  name="sportEventId" component={(field) =>(
                <input {...field.input} type="hidden" />
            )} />
            <Button type="submit">Add</Button>
        </FormGroup>
    </Form>);
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    onSubmit: addTeam
};

AddTeamForm = reduxForm({
    form: 'addTeamForm'
})(AddTeamForm);

export default connect(mapStateToProps, mapDispatchToProps)(AddTeamForm);
