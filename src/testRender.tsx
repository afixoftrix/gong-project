import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { AuthContext, type AuthContextType } from "./Contexts/Auth/AuthContext";

const defaultAuthContext: AuthContextType = {
    isAuthenticated: true,
    setIsAuthenticated: jest.fn(),
    user: null,
    setUser: jest.fn(),
    users: null,
    setUsers: jest.fn(),
};

const renderWithProviders = (component: React.ReactNode, authContext?: AuthContextType) => {
    return render(
        <AuthContext.Provider value={{ ...defaultAuthContext, ...authContext }}>
            <MemoryRouter>
                {component}
            </MemoryRouter>
        </AuthContext.Provider>
    );
};

export default renderWithProviders;