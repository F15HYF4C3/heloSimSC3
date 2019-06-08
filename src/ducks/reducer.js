import {combineReducers} from 'redux'

const initialState = {
    users: {
        username: "",
        id: 0,
        prof_pic: ""
    }
}
const users = (state={initialState}, action) => {
    switch(action.type){
        case'users':
            return action.payload.users;
        default:
            return state;
    }
}

export default combineReducers({users})