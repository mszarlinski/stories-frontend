import axios from "axios";

export const HttpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api",
  // timeout: 5000,
  // headers: {
  //     'X-Requested-With': 'XMLHttpRequest',
  //     'X-CSRFToken': Cookies.get('csrftoken'),
  // },
});
