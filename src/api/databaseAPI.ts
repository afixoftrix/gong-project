import encode from "./encoder";

const login = async (email: string, password: string) => {
    console.log(import.meta.env.VITE_APP_BASE_URL)
    const encodedPassword = encode(email, password);
    const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/secrets/${encodedPassword}/.json`, {
        method: "GET",
    });
    return response.json();
}

const getUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/users/.json`, {
        method: "GET",
    });
    return response.json();
}

export default { login, getUsers };