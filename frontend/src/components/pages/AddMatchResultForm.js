"use strict";
import React from "react";
import {connect} from "react-redux";
import {Button, Form, FormControl, FormGroup} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {addMatchResult} from "../../app/actions"

let AddMatchResultForm = ({...props}) => {
    const { handleSubmit, sportEventId } = props;
    props.change('sportEventId', sportEventId);
    return (<Form onSubmit={handleSubmit} inline>
        <FormGroup>
            <Field name='teamAName'  component={(field) => {
                return (<FormControl {...field.input} type="text" placeholder="Team A Name" bsSize="small"/>);
            }}/>
            <Field name='teamAResult'  component={(field) => (
                <FormControl  {...field.input} type="number" placeholder="Team A result" bsSize="small"/>
            )}/>
            -
            <Field name='teamBResult' component={(field) => (
                <FormControl  {...field.input} type="number" placeholder="Team B Result" bsSize="small"/>
            )}/>
            <Field name='teamBName' component={(field) => (
                <FormControl  {...field.input} type="text" placeholder="Team B Name" bsSize="small"/>
            )} />
            <Field  name="sportEventId" component={(field) =>(
                <input {...field.input} type="hidden" />
            )} />
            <Button type="submit">Add</Button>
        </FormGroup>
    </Form>);
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    onSubmit: addMatchResult
};

AddMatchResultForm = reduxForm({
    form: 'addMatchForm'
})(AddMatchResultForm);

export default connect(mapStateToProps, mapDispatchToProps)(AddMatchResultForm);
