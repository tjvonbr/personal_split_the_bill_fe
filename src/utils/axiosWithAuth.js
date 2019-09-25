import axios from 'axios';


export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://split-the-bill-bw.herokuapp.com/api/user/',
    headers: {
      Authorization: token
    }
  });
};
