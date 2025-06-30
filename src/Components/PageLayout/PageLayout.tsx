import { Header } from "@/Components/Header/Header";
import { PageContent, PageLayoutContainer } from "./styles";
import { useAuthContext } from "@/Contexts/Auth/useAuthContext";

interface PageLayoutProps {
    children: React.ReactNode;
    centerAlign?: boolean;
}

const PageLayout = ({ centerAlign, children }: PageLayoutProps) => {
    const { isAuthenticated, user, setIsAuthenticated } = useAuthContext();
    return (
        <PageLayoutContainer>
            <Header user={user} loggedIn={isAuthenticated} setLogOut={() => { setIsAuthenticated(false); }} />
            <PageContent centerAlign={centerAlign}>
                {children}
            </PageContent>
        </PageLayoutContainer>
    )
}

export default PageLayout;