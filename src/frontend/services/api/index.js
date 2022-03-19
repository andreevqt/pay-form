import axios from './axios';

export const bills = {
  submit: (data) => axios.post(`/bills`, data).then((response) => response.data)
};
