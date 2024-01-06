import { call } from "./http.service";


function login({ userName, password }) {
    return call({
        uri: "auth/login",
        method: "POST",
        body: { userName: userName, password: password },
    });
}

function register({ username, password }) {
    return call({
        uri: "auth",
        method: "POST",
        body: { username: username, password: password },
    });
}

function logOut() {
    return call({ uri: "auth", method: "DELETE" });
}

function getProfile() {
    return call({ uri: "profile", method: "GET" });
}


export { login, logOut, getProfile, register };
