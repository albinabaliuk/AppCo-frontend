import './App.scss';
import Main from './Components/main/Main'
import Stats from './Components/stats/Stats'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import rootReducer from './state/rootReducer'
import saga from './state/saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import User from './Components/user/User'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(saga)

function App() {
  return (
   <Provider store={store}>
     <BrowserRouter>
       <Switch>
         <Route path='/main'>
            <Main/>
         </Route>
         <Route path='/stats'>
           <Stats/>
         </Route>
         <Route path='/user/:userId'>
          <User/>
         </Route>
       </Switch>
     </BrowserRouter>
   </Provider>
  );
}

export default App;
