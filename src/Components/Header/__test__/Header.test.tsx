import { Header } from "../Header";
import renderWithProviders from "@/testRender";
import type { User } from "@/Contexts/Auth/AuthContext";

describe("Header", () => {
    it("should render the header", () => {
        const { container } = renderWithProviders(<Header loggedIn={false} user={{} as User} setLogOut={() => { }} />);
        expect(container).toMatchSnapshot();
    });

    it("should render the header when logged in", () => {
        const { getByTestId } = renderWithProviders(<Header loggedIn={true} user={{
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            password: "password",
            photo: "https://example.com/photo.jpg",
            managerId: 1,
            createdAt: new Date(),
        } as User} setLogOut={() => { }} />);
        const userInfo = getByTestId('user-info');
        expect(userInfo).toBeInTheDocument();
        expect(userInfo).toHaveTextContent("John Doe");
    });

    it("should render the logout button when logged in", () => {
        const { getByTestId } = renderWithProviders(<Header loggedIn={true} user={{
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            password: "password",
            photo: "https://example.com/photo.jpg",
            managerId: 1,
            createdAt: new Date(),
        } as User} setLogOut={() => { }} />);
        const logoutButton = getByTestId('logout-button');
        expect(logoutButton).toBeInTheDocument();
        expect(logoutButton).toHaveTextContent("Logout");
    });
});