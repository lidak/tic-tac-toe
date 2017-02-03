import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import './main.css'


const store = createStore(reducer)

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
