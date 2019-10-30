import {
  ADD_TODO,
  DELETE_TODO,
  CHANGE_DOING_TO_DONE,
  CHANGE_DONE_TO_DOING,
  CHANGE_TODO_TO_DOING,
  CHANGE_DOING_TO_TODO
} from '../actions'

let todos;
(function () {
  if (localStorage.todos) {
    todos = JSON.parse(localStorage.todos)
  } else {
    todos = []
  }
})()

function todolist(state = todos, action) {
  switch(action.type) {
    case ADD_TODO:
      let payload = [ ...state, { todo: action.text, istodo: true, doing: false, done: false}]
      localStorage.setItem('todos', JSON.stringify(payload))

      return payload
  }
}

