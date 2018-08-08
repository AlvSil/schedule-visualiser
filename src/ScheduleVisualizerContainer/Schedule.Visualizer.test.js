import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import { ScheduleVisualizer, ScheduleVisualizerError } from './ScheduleVisualizer';

const mockStore = configureStore();

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScheduleVisualizer store={mockStore()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ScheduleVisualizer displays EMPTY_MESSAGE("No schedules to be displayed") when no schedule data exists', () => {
  const scheduleVisualizer = shallow(<ScheduleVisualizer store={mockStore()} />);
  expect(scheduleVisualizer.text()).toEqual('No schedules to be displayed');
});

it('ScheduleVisualizerError displays ERROR_MESSAGE("Please provide all fields before submitting") when error prop has a VALIDATION error', () => {
  const scheduleVisualizerError = shallow(<ScheduleVisualizerError store={mockStore()} />).setProps({error: 'VALIDATION'});
  expect(scheduleVisualizerError.text()).toEqual('Please provide all fields before submitting');
});

