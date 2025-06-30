import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "../LoginForm";
import renderWithProviders from "@/testRender";

describe("LoginForm", () => {
    it("should render the login form", () => {
        const { container } = renderWithProviders(<LoginForm />);
        expect(container).toMatchSnapshot();
    });

    it("should render the login form", () => {
        const { getByTestId } = renderWithProviders(<LoginForm />);
        const emailInput = getByTestId('email-input');
        const passwordInput = getByTestId('password-input');
        const loginButton = getByTestId('login-button');
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
    });

    it("should disable the login button if email or password is empty", () => {
        const { getByTestId } = renderWithProviders(<LoginForm />);
        const loginButton = getByTestId('login-button');
        expect(loginButton).toBeDisabled();
    });

    it("should enable the login button if email and password are not empty", () => {
        const { getByTestId } = renderWithProviders(<LoginForm />);
        const emailInput = getByTestId('email-input');
        const passwordInput = getByTestId('password-input');
        const loginButton = getByTestId('login-button');
        fireEvent.change(emailInput, { target: { value: "test@test.com" } });
        fireEvent.change(passwordInput, { target: { value: "password" } });
        expect(loginButton).toBeEnabled();
    });
});