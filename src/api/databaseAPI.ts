import encode from "./encoder";
import metaEnv from "../envs";

const login = async (email: string, password: string) => {
    const encodedPassword = encode(email, password);
    const response = await fetch(`${metaEnv.apiUrl}/secrets/${encodedPassword}/.json`, {
        method: "GET",
    });
    return response.json();
}

const getUsers = async () => {
    const response = await fetch(`${metaEnv.apiUrl}/users/.json`, {
        method: "GET",
    });
    return response.json();
}

export default { login, getUsers };