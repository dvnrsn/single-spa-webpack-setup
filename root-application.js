import {registerApplication, start} from 'single-spa';

// console.log('coolApp', coolApp)

// Register your first application with single-spa. More apps will be registered as you create them
registerApplication("cool-app", loadCoolApp, isCoolAppActive);

// Tell single-spa that you're ready for it to mount your application to the DOM
start();

// This is a "loading function"
function loadCoolApp() {
  // return Promise.resolve().then(() => {
  //   return coolApp
  // })
  
  // return Promise.resolve().then(() => {
  //   return require('./cool-app/cool.app.js')
  // })

  return import(/* webpackChunkName: "cool-app" */'./cool-app/cool.app.js').then(p => {
    console.log(p)
    return p
  })
  // return import("./cool-app/cool.app.js")
}

// This is an "activity function"
function isCoolAppActive() {
  return window.location.hash.startsWith("#/cool");
}