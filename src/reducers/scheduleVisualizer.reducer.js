const initialState = {
    startDate: null,
    selectedDepartment: null,
    error: null,
    schedule: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_DEPARTMENT':
          return {
            ...state,
            selectedDepartment: action.payload.department
          };
        case 'CHANGE_DATE':
          return {
            ...state,
            startDate: action.payload.date
          };
        case 'GET_SCHEDULE':
          return {
            ...state
          };
        case 'SET_ERROR':
          return {
            ...state,
            error: action.payload.error,
            schedule: null
          };
        case 'UPDATE_SCHEDULE':
          return {
            ...state, 
            schedule: action.payload.schedule,
            error: null
          }
        default:
          return state;
    }
}