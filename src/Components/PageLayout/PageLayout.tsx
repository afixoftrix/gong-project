import { Header } from "@/Components/Header/Header";
import { PageContent, PageLayoutContainer } from "./styles";
import { useAuthContext } from "@/Contexts/Auth/useAuthContext";

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    const { isAuthenticated } = useAuthContext();
    return (
        <PageLayoutContainer>
            <Header loggedIn={isAuthenticated} />
            <PageContent>
                {children}
            </PageContent>
        </PageLayoutContainer>
    )
}

export default PageLayout;