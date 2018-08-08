export const CHANGE_DEPARTMENT = 'CHANGE_DEPARTMENT';
export const CHANGE_DATE = 'CHANGE_DATE';
export const GET_SCHEDULE = 'GET_SCHEDULE';
export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
export const SET_ERROR = 'SET_ERROR';

export function changeDepartment(department) {
    const payload = {department};
    return { type: CHANGE_DEPARTMENT, payload };
}

export function changeDate(date) {
    const payload = {date};
    return { type: CHANGE_DATE, payload };
}

export function getSchedule(formData) {
    const payload = {formData};
    return { type: GET_SCHEDULE, payload };
}

export function setError(error) {
    const payload = {error};
    return { type: SET_ERROR, payload };
}

export function updateSchedule(schedule) {
    const payload = {schedule};
    return { type: UPDATE_SCHEDULE, payload };
}