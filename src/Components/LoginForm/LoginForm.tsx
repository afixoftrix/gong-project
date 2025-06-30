import { useState } from "react";
import { LoginFormButton, LoginFormInput, LoginFormContainer, FormLabel, InputGroup, FormError, Form } from "./styles"
import { BeatLoader } from "react-spinners";
import databaseAPI from "@/api/databaseAPI";
import { useAuthContext } from "@/Contexts/Auth/useAuthContext";
import { useNavigate } from "react-router";
import { sortUsersIntoHeirarchy } from "@/utils";


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { setUser, setIsAuthenticated, setUsers } = useAuthContext();
    const navigate = useNavigate();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
        const value = e.target.value;
        setter(value);
        if (setter === setEmail) {
            setValidEmail(value.includes("@") && value.includes(".")); // basic validation.. can be improved
        } else {
            setValidPassword(value.length > 0);
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false);
        setLoading(true);
        const getId = await databaseAPI.login(email, password);
        const getUsers = await databaseAPI.getUsers();
        setLoading(false);

        if (getId?.error || getId === null) {
            setError(true);
        } else {
            const sortedUsers = sortUsersIntoHeirarchy(getUsers);
            const user = getUsers.find((user: { id: number }) => user.id === getId);
            if (user.error || user === null) {
                setError(true);
            } else {
                setUser(user);
                setUsers(sortedUsers);
                setIsAuthenticated(true);
                navigate("/home");
            }
        }
    }

    return (
        <LoginFormContainer data-testid="login-form">
            <h1>Please Login</h1>
            {error && <FormError>Invalid email or password</FormError>}
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <FormLabel>email address:</FormLabel>
                    <LoginFormInput data-testid="email-input" type="email" placeholder="Email" value={email} onChange={(e) => handleChange(e, setEmail)} required />
                </InputGroup>
                <InputGroup>
                    <FormLabel>password:</FormLabel>
                    <LoginFormInput data-testid="password-input" type="password" placeholder="Password" value={password} onChange={(e) => handleChange(e, setPassword)} required />
                </InputGroup>
                <InputGroup isCentered={true}>
                    <LoginFormButton data-testid="login-button" type="submit" disabled={!validEmail || !validPassword}>{loading ? <BeatLoader color="#fff" size={10} /> : 'Login'}</LoginFormButton>
                </InputGroup>
            </Form>
        </LoginFormContainer>
    )
}

export default LoginForm;