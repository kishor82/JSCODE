// const promise = new Promise(function(resolve, reject) {
//   var result = 1;

//   // This could also be a web request, or anything else either synchronous or asynchronous
//   setTimeout(function() {
//     result += 10;

//     resolve(result);
//   }, 1000);

//   document.body.addEventListener("click", function clickHandler() {
//     document.body.removeEventListener("click", clickHandler);

//     reject("You clicked");
//   });

//   document.body.innerText =
//     "Working... Click anywhere to reject the promise with an error.";
// });

// promise
//   .then(function(value) {
//     document.body.innerText =
//       "Everything went fine! The Promise resolved with: " + value;
//   })
//   .catch(function(error) {
//     document.body.innerText = "Something went wrong: " + error;
//   });


//   

//CallBacks 

//waits a given number of milliseconds and then call a function  

// setTimeout( () => console.log( "tick"),5000);

// function loadScript(src , callback){
//   let script =  document.createElement('script');
//   script.src = src ;
//   script.onload = () => callback(script);
//   document.head.append(script);
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',script =>{
//   alert(`cool , the ${script.src} is loaded`);
//   alert(_);
// });


// let promise = new Promise((resolve,reject) => {
//         setTimeout(() => reject(new Error("done!")),1000);
// });

// promise.then(
//   result => alert(result),
//   error => alert(error)
//   );

// const executor = resolve => resolve("done!");

// const promise =  new Promise(executor);

// promse.then(alert);

// loadScript = (src , callback) => {
//   let script = document.createElement('script');

//   script.src = src ;

//   script.onload = () => callback(null,script);
//   script.onerror = () => callback(new Error(`script load error` +src));
//   document.head.append(script);
// }

// loadScript = src => {
//   return new Promise((resolve,reject) => {
//     let   script = document.createElement('script');
//     script.src = src ;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error("script load error:" +src));
//     document.head.append(script);
//   });
// }

// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js");
// promise.then(
//   script => alert(`${script.src} is loaded`),
//   e => alert(`Error: ${e.message}`)
//   );


// promise.then(script => alert('One more handler to do Something else!'));

// let promise = new Promise((resolve,reject) => {
//   resolve(1);

//   setTimeout(() => resolve(2) ,1000);
// });

// promise.then(alert);

// delay = ms => {
//   return new Promise(resolve => setTimeout(resolve,ms));

// }

// delay(3000).then(() => alert('runs after 3 seconds'));

// new Promise((resolve,reject) => {
//   setTimeout(() => resolve(1),1000);
// }).then(result => {
//   alert(result);
//   return result * 2;
// })

// new Promise((resolve,reject) => {
//   setTimeout(() => resolve(1),1000);
// }).then(result => {
//   alert(result);

//   return new Promise((resolve,reject) => {
//     setTimeout(() => resolve(result * 2),1000);
//   });
// }).then(result => {
//   alert(result);
//    return new Promise((resolve,reject) => {
//     setTimeout(() => resolve(result * 2),1000);
//    });
// }).then(result => {
//   alert(result);
// });

// class Thenable {
//   constructor(num){
//     this.num = num ;
//   }
//   then(resolve,reject){
//     alert(resolve);
//     setTimeout(() => resolve(this.num * 2),1000);
//   }
// }

// new Promise(resolve => resolve(1))
//   .then(result => {
//     return new Thenable(result);
//   })
//   .then(alert);

fetch ('https://javascript.info/article/promise-chaining/user.json')
.then(response => response.json())
//Make a request to github 
.then(user =>{
 user.name = 'kishor82';
 return user.name ;
 
} )
.then(user => fetch(`https://api.github.com/users/${user}`))
.then(response => response.json())
.then(githubUser => {
  let img = document.createElement('img');
  img.src = githubUser.avatar_url ;
  img.className = "promise-avatar-example";
  document.body.append(img);
});