import { ADD_TODO, DEL_TODO } from '../actions/actionTypes'

// action = {type: 'ADD_TODO', text: text}
// ex. state = ['買牛奶', '學redux']
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.value, ...state]
    case DEL_TODO:
      return state.filter((v) => v !== action.value)
    default:
      return state
  }
}

export default todos
