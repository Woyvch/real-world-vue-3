import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getEvents() {
    return apiClient.get('/events'); // this string will be added to our baseURL
  },
  getEvent(id) {
    return apiClient.get('/events/' + id);
  }
};