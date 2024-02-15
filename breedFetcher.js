const request = require('request');

const id = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${id}`, (error, response, body) => {
  if (error) {
    console.error("Request error:", error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length > 0) {
    console.log(data[0].description);
  } else {
    console.log("Breed not found");
  }
});




