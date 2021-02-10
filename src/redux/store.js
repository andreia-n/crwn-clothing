import {createStore, applyMiddleware} from 'redux';

import logger from 'redux-logger';
import rootReducer from './root-reducer';

const miidlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...miidlewares))


export default store;
