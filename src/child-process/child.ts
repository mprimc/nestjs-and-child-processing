// tslint:disable:no-console
// this child could handle db connection and handle response data manipulation
let counter = 0;
process.on('message', msg => {
  counter = 0;
  console.log('Message from parent:', msg);
});

function sendResponse() {
  setTimeout(() => {
    if (counter <= 10) {
      process.send({ counter: counter++ });
      sendResponse();
    }
  }, 1000);
}

sendResponse();
