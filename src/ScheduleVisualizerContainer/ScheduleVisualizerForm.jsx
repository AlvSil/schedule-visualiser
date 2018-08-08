import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker';
import { Form, Dropdown, Button } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import departmentOptions from '../Shared/departments';

import { SCHEDULE_VISUALIZER } from '../constants'

function mapStateToProps(state) {
    return {
        startDate: state.startDate,
        selectedDepartment: state.selectedDepartment
    };
}
const ScheduleVisualizerForm = (props) => {

    // creates updatedList due to duplicated keys issue coming up in Dropdown if the original departmentOptions are used
    const updateDepartmentOptionsKeys = (departmentOptions) => departmentOptions.map(departmentOption => ({...departmentOption, key: departmentOption.text, value: departmentOption.text}));
    
    const {DEPARTMENT, SELECT_DEPARTMENT, SCHEDULE_DATE, VIEW_SCHEDULE} = SCHEDULE_VISUALIZER.FORM;
    const {startDate, selectedDepartment, handleDepartmentChange, handleDateChange, handleSubmit} = props;

    return (<Form>
        <Form.Field>
            <label>{DEPARTMENT}</label>
            <Dropdown placeholder={SELECT_DEPARTMENT} compact search selection options={updateDepartmentOptionsKeys(departmentOptions)} onChange={(e, {value}) => handleDepartmentChange(value)} text={selectedDepartment}/>
        </Form.Field>
        <Form.Field>
            <label>{SCHEDULE_DATE}</label>
            <DatePicker
                dateFormat="DD/MM/YYYY"
                customInput= {
                    <InputMask mask="99/99/9999"/>
                }
                onChange={(date) => handleDateChange(date)}
                selected={startDate}
            />
        </Form.Field>
        <Button primary type='submit' onClick={(event) => handleSubmit(event)}>{VIEW_SCHEDULE}</Button>
    </Form>)
}

export default connect(mapStateToProps)(ScheduleVisualizerForm);
