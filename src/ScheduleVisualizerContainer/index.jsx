import React from 'react';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react';
import { changeDepartment, changeDate, getSchedule, setError } from '../actions/scheduleVisualizer.actions';
import ScheduleVisualizerForm from './ScheduleVisualizerForm';
import { ScheduleVisualizer, ScheduleVisualizerError } from './ScheduleVisualizer';

class ScheduleVisualizerContainer extends React.Component {
    handleDateChange = (startDate) => {
        this.props.dispatch(changeDate(startDate));
    };
    handleSubmit = (event) => {
        const fieldsToValidate =  [
            this.props.startDate, 
            this.props.selectedDepartment
        ];
        const isFormValid = () => {
            let formChecks = fieldsToValidate.map((field) => field !== null);
            return formChecks.includes(false) ? false : true;
        }
        const formData = {startDate: this.props.startDate, selectedDepartment: this.props.selectedDepartment}
        isFormValid() ? this.props.dispatch(getSchedule(formData)) : this.props.dispatch(setError('VALIDATION'));
        event.preventDefault();
    };
    handleDepartmentChange = (department) => {
        this.props.dispatch(changeDepartment(department));
    };
    render() {
        return (
        <Grid divided="vertically" padded="horizontally">
            <Grid.Row>
                <Grid.Column phone={6} tablet={4} computer={3}>
                    <ScheduleVisualizerForm handleDateChange={this.handleDateChange} handleSubmit={this.handleSubmit} handleDepartmentChange={this.handleDepartmentChange}/>
                </Grid.Column>
                <Grid.Column phone={6} tablet={8} computer={9}>
                    {this.props.error !== null ? <ScheduleVisualizerError error={this.props.error}/> : <ScheduleVisualizer schedule={this.props.schedule}/>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
        );
    };
}
function mapStateToProps(state) {
    return {
        startDate: state.startDate,
        selectedDepartment: state.selectedDepartment,
        schedule: state.schedule,
        error: state.error
    };
}

export default connect(mapStateToProps)(ScheduleVisualizerContainer);