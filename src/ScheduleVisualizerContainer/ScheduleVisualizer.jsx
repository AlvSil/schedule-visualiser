import React from 'react';
import { Table } from 'semantic-ui-react';

import { SCHEDULE_VISUALIZER } from '../constants';

export const ScheduleVisualizer = (props) => {
    const {START_TIME, END_TIME, EMPLOYEE_NAME} = SCHEDULE_VISUALIZER;
    const {schedule} = props;
    const createHeaderRow = (
    <Table.Row>
        <Table.HeaderCell>{START_TIME.value}</Table.HeaderCell>
        <Table.HeaderCell>{END_TIME.value}</Table.HeaderCell>
        <Table.HeaderCell>{EMPLOYEE_NAME.value}</Table.HeaderCell>
    </Table.Row>
    );
    const createBodyRow = (slot) => (
        <Table.Row key={slot[START_TIME.key]}>
            <Table.Cell>{slot[START_TIME.key]}</Table.Cell>
            <Table.Cell>{slot[END_TIME.key]}</Table.Cell>
            <Table.Cell>{slot[EMPLOYEE_NAME.key]}</Table.Cell>
        </Table.Row>
    );
    return (<div>
                {schedule ?
                <Table ui padded basic='very' inverted color={'blue'}>
                    <Table.Header>
                        {createHeaderRow}
                    </Table.Header>
                    <Table.Body>
                        {schedule.slots.map(createBodyRow)}
                    </Table.Body>
                </Table>
                : SCHEDULE_VISUALIZER.NO_SCHEDULES}
            </div>);
};

export const ScheduleVisualizerError = (props) => (
    <div>{SCHEDULE_VISUALIZER.ERROR[props.error]}</div>
);
