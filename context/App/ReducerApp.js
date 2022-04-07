import { DELETE_USER_TOKEN, USER_TOKEN } from './creators';

const ReducerApp = (state, action) => {
    switch (action.type) {
        case USER_TOKEN:
        return {
            ...state,
            user: action.payload
        }
        case DELETE_USER_TOKEN:
        return {
            ...state,
            user: false
        }
        default:
        return state
    }
}
export default ReducerApp