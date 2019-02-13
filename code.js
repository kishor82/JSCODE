const promise = new Promise(function(resolve, reject) {
  var result = 1;

  // This could also be a web request, or anything else either synchronous or asynchronous
  setTimeout(function() {
    result += 10;

    resolve(result);
  }, 1000);

  document.body.addEventListener("click", function clickHandler() {
    document.body.removeEventListener("click", clickHandler);

    reject("You clicked");
  });

  document.body.innerText =
    "Working... Click anywhere to reject the promise with an error.";
});

promise
  .then(function(value) {
    document.body.innerText =
      "Everything went fine! The Promise resolved with: " + value;
  })
  .catch(function(error) {
    document.body.innerText = "Something went wrong: " + error;
  });
