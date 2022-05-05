import sendRequest from './send-request'

const BASE_URL = 'http://localhost:3000/api/users';

export function signUp(userData){
    return sendRequest(BASE_URL, 'POST', userData)
}

export function login(authorization){
    return sendRequest(`${BASE_URL}/login`, 'POST', authorization)
}