import React from 'react';
import ReactDom from 'react-dom'
import App from './components/App'
import store from './store/store'
import * as serviceWorker from './serviceWorker';




import { Provider } from 'react-redux'

const Apps = ()=>{
    return(
        <div>
            <Provider store={store}>
                <App />
            </Provider>
        </div>
    )
}

ReactDom.render(<Apps />,document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
