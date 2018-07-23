import fetch from 'isomorphic-unfetch';

const apiBase = '/api/user'

export const userSignup = (userEmail, userType) => {
    return fetch(`${apiBase}/register/${userEmail}/${userType}`)
}


