const fetch = require('node-fetch');

const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';
const headers = new fetch.Headers({
  Authorization: API_TOKEN,
  'Content-type': 'application/json',
});

const body = JSON.stringify({
  name: 'Lucas',
  email: 'luc@trybe.com',
  password: 1234,
})

fetch('https://postman-echo.com/post?param1=teste', { headers, method: 'POST', body })
.then((response) => {
  if(!response.ok) return Promise.reject(response);
  return response.json();
})
.then((data) => console.log(data))
.catch((error) => {
  if(error.status) return console.error(`Resquest failed. Status: ${error.status}`);
  console.error(error);
});
