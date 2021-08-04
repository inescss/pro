  
import {combineReducers} from 'redux'
import ReducerAuth from './ReducerAuth'
import ReducerEmployee from './ReducerEmployee'

const rootReducer = combineReducers({
    ReducerAuth,
    ReducerEmployee,
   });
   
   export default rootReducer;