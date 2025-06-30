import "@testing-library/jest-dom";
import Login from "../Login";
import renderWithProviders from "@/testRender";

describe("Login", () => {
    it("should render the login page", () => {
        const { container } = renderWithProviders(<Login />);
        expect(container).toMatchSnapshot();
    });

    it("should render the login form", async () => {
        const { getByTestId } = renderWithProviders(<Login />);
        const loginForm = getByTestId('login-form');
        expect(loginForm).toBeInTheDocument();
    });
}); 