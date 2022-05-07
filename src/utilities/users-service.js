
import * as usersAPI from './users-api'

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData);

    localStorage.setItem('token', token);
    return getUser();
}

export async function login(authorization){
    const token = await usersAPI.login(authorization);

    localStorage.setItem('token', token);
    return getUser();
}

export async function deleteProfile(userid){
    const deletion = await usersAPI.deleteProfile(userid)
    return deletion
}

export async function getProfile(userid){
    const result = await usersAPI.getProfile(userid)
    return result
}

export async function updateProfile(userid, payload){
    console.log(payload)
    const result = await usersAPI.updateProfile(userid, payload)
    return result
}

export function getToken(){
    const token = localStorage.getItem('token');

    if (!token) return null;
    const payload = JSON.parse(window.atob(token.split('.')[1]))
    if (payload.exp<Date.now()/1000){
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

export function getUser(){
    const token = getToken();
    return token ? JSON.parse(window.atob(token.split('.')[1])).user : null;
}

export function logOut() {
    localStorage.removeItem('token');
  }