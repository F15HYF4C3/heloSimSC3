import {combineReducers} from 'redux'

const users = (state={}, action) => {
    switch(action.type){
        case'users':
            return action.payload.users;
        default:
            return state;
    }
}

export default combineReducers({users})