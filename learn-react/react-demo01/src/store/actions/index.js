export const ADD_TODO = 'ADD_TODO'
export const CHANGE_TODO_TO_DOING = 'CHANGE_TODO_TO_DOING'
export const CHANGE_DOING_TO_DONE = 'CHANGE_DOING_TO_DONE'
export const CHANGE_DONE_TO_DOING = 'CHANGE_DONE_TO_DOING'
export const CHANGE_DOING_TO_TODO = 'CHANGE_DOING_TO_TODO'
export const SEARCH = 'SEARCH'
export const DELETE_TODO = 'DELETE_TODO'

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function search(text) {
  return {
    type: SEARCH,
    text
  }
}

export function changeTodoToDoing(index) {
  return {
    type: CHANGE_TODO_TO_DOING,
    index
  }
}

export function changeDoneToDoing(index) {
  return {
    type: CHANGE_DONE_TO_DOING,
    index
  }
}

export function changeDoingToTodo(index) {
  return {
    type: CHANGE_DOING_TO_TODO,
    index
  }
}

export function changeDoingToDone(index) {
  return {
    type: CHANGE_DOING_TO_DONE,
    index
  }
}

export function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    index
  }
}