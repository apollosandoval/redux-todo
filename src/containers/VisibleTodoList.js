import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../redux/actions';

const getVisibleTodos = (todos, filter) => {
    console.log("Todos: " + todos, " Filter: " + filter);
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Incorrect FIlter: ' + filter);
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        todos: getVisibleTodos(state.todos, state.visiblityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;