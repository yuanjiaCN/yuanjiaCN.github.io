import * as ActionTypes from './ActionTypes.js'

export const increment = () => {
    return {
        type: ActionTypes.INCREMENT,
        whichNumber: "incrementNumber"
    };
};