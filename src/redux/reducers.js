import { combineReducers } from 'redux';
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions';

const { SHOW_ALL } = VisibilityFilters;
// Set initial state, Redux will call our reducers with an undefined state for the first time. This is our chance to return the initial state of our app.

// todos reducer
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            };
        case TOGGLE_TODO:
            return state.reduce((acc, todo, index) => {
                if (index === action.index) {
                    todo.completed = !todo.completed;
                }
                return [...acc, todo]
            },[]);
        default:
            return state;
    }
}

// visbilityFilter reducer
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

// combineReducers generates a function that calls your reducers with the slices of state selected according to their keys, and combines their results into a single obect again. It allows us to write reducers where the state parameter is different for every reducer, and corresponds to the part of the state that it manages.
const todoApp = combineReducers({
    // Visibility Filter is a boolean variable
    visibilityFilter,
    // todos is an array of objects with the shape of {text: , completed: }
    todos
})

/* 
const initialStore = {
    visibilityFilter: "SHOW_ALL",
    todos: []
}
*/

export default todoApp;