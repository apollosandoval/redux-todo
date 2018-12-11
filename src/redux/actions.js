/*
    Actions are payloads of information that send ata from your application to your store. They are the only source of information for the store. Yout send them to the store using store.dispatch()
*/
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
    Action creators are functions that create 'action' objects. Their sole functionality is to accept some data and return an action object.
*/
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}