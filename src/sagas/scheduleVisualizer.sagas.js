import { call, put, takeLatest } from 'redux-saga/effects';
import { getSchedule } from '../requests';
import { setError, updateSchedule } from '../actions/scheduleVisualizer.actions';

export function* fetchSchedule({payload}) {
  
  try {
    const request = yield call(getSchedule, payload);
    yield put(updateSchedule(request.data[0]));
  } catch(exception) {
    yield put(setError('DATA'));
  }
}

export default function* sagas() {
    yield takeLatest("GET_SCHEDULE", fetchSchedule);
}
