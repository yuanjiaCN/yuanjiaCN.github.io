import {createStore} from 'redux'
import reducer from './component/example/Reducer'
const initValue = {
    incrementNumber:0
}
const store = createStore(reducer,initValue)
export default store