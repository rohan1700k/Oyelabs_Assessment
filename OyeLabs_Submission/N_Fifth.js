const request = require('request');

function getGoogleHomePage() {
  return new Promise((resolve, reject) => {
    request('http://www.google.com', function (error, response, body) {
      if (error) {
        console.error('error:', error);
        reject(error); // Reject the promise with the error
      } else {
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        resolve(body); // Resolve the promise with the response body
      }
    });
  });
}
getGoogleHomePage()
  .then((body) => {
    console.log('Success:', body);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
