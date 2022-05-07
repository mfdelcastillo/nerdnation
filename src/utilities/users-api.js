import sendRequest from './send-request'
const BASE_URL = 'http://localhost:3000/api/users';

export function signUp(userData){
    return sendRequest(BASE_URL, 'POST', userData)
}

export function login(authorization){
    return sendRequest(`${BASE_URL}/login`, 'POST', authorization)
}

export async function deleteProfile(userid){
    const deleteNow = await sendRequest(`${BASE_URL}/${userid}`, 'DELETE')
    return deleteNow
}

export async function getProfile(userid){
    const result = await sendRequest(`${BASE_URL}/${userid}`,'GET')
    return result
}

export function updateProfile(userid, payload){
    const result = sendRequest(`${BASE_URL}/${userid}`,'PUT', payload)
    return result
}