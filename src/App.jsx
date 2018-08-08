import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas/scheduleVisualizer.sagas'
import scheduleVisualizer from './reducers/scheduleVisualizer.reducer'
import ScheduleVisualizerContainer from './ScheduleVisualizerContainer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(scheduleVisualizer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-employee">Department schedule</h1>
        </header>
        <div className="App-intro">
        <Provider store={store}>
          <ScheduleVisualizerContainer />
        </Provider>
        </div>
      </div>
    );
  }
}

export default App;
