import { USER_TOKEN, DELETE_USER_TOKEN } from './creators';

export const createToken = (user) => ({
    type: USER_TOKEN,
    payload: user
})
export const deleteToken = () => ({
    type: DELETE_USER_TOKEN
})