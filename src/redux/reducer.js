//implement reducer function
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
};

// pure function. do immutable change and return new state.
// init state with initialState it'll be unitialized on-start.
export const Reducer = (state = initialState, action) => {
    return state;
};