// single-spa will import this file and call the exported lifecyle functions

console.log("Cool App Loaded");

let user = {
  name: 'Justin'
};

export function bootstrap() {
  // return fetch('/api/users/0')
  //   .then(response => response.json())
  //   .then(json => user = json);
  return Promise.resolve()
}

export function mount() {
  /* This is normally where you would have your framework-specific code like
   * ReactDOM.render or angular.bootstrap(). The fact that you can put *anything*
   * into this function is what makes single-spa so powerful -- any framework
   * can implement a "mount" and "unmount" to become a single-spa application.
   */
  return Promise.resolve()
    .then(() => {
      console.log('Updating DOM');
      document.getElementById("cool-app").innerHTML = `
        <div>
          Hello ${user.name}!
        <div>
      `
    })
}

export function unmount() {
  /* Real world use cases would be something like ReactDOM.unmountComponentAtNode()
   * or vue.$destroy()
   */
  return Promise.resolve()
    .then(() => {
      document.getElementById("cool-app").innerHTML = '';
    })
}