axios = require("axios")

axios.get('https://randomuser.me/api/?results=3')
  .then(function (response) {
    console.log(response.data.results[0]);
    return response.data.results
  })
  .catch(function (error) {
    console.log(error);
  });