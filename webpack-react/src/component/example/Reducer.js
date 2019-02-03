import * as ActionTypes from './ActionTypes.js';

export default (state, action) => {
    console.log("action",action)
    console.log("有我")
    const {whichNumber} = action;
    console.log('whichNumber',whichNumber,[whichNumber])
    switch (action.type) {
        case ActionTypes.INCREMENT:
            console.log("1")
            return {...state, [whichNumber]: state[whichNumber] + 1};
        default:
            console.log("2")
            return state
    }
}
