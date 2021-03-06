import * as ActionTypes from './ActionTypes';

//reducer function as a exported const favorites
export const favorites = (state = [], action) => {
    //switch statement
    switch (action.type) {
        case ActionTypes.ADD_FAVORITE:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);

        case ActionTypes.DELETE_FAVORITE:
            return state.filter(favorite => favorite !== action.payload);

        default:
            return state;
    }
};
