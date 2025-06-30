import "@testing-library/jest-dom";
import Home from "../Home";
import renderWithProviders from "@/testRender";

describe("Home", () => {
    it("should render the home page", () => {
        const { getByTestId } = renderWithProviders(<Home />);
        const homePage = getByTestId('home-page');
        expect(homePage).toBeInTheDocument();
    });
});