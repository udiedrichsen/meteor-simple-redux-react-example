import {registerRedux} from 'simple-react-redux'

function myCustomMiddleware() {
  console.log("myCustomMiddleware called");
}

registerRedux({
  // default options are overridable
  debug: false,                      // turns redux-devtools and logging on/off
  renderToElementId: 'react-root',
  disableLoggingMiddleware: false,
  disableDevTools: false,            // turns off redux-devtools middleware
  disableLogger: false,

  // pass in Routes component
  routes: require('./routes.jsx'),

  // router reducer is already included, add more as needed
  reducers: {
    app:   require('./reducers/app')
  }

  // optioally add your own middleware
  /*
  middleware: [
    myCustomMiddleware()
  ]
  */
});
