import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'
import ScheduleVisualizerForm from './ScheduleVisualizerForm';

const mockStore = configureStore();

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScheduleVisualizerForm store={mockStore()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});