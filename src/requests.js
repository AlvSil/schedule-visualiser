import moment from 'moment';
import axios from 'axios';

export function getSchedule({formData}) {
    const request = axios.get(`http://localhost:3001/schedule-repo/api/v1/schedule?department=${formData.selectedDepartment}&date=${moment(formData.startDate).format("YYYY-MM-DD")}`);
    return request
}