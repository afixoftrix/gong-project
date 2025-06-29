import { HeaderContainer, HeaderTitle, HeaderActions, HeaderActionButton } from "./styles";

export const Header = ({ loggedIn }: { loggedIn: boolean }) => {
    return (
        <HeaderContainer>
            <HeaderTitle>
                GONG App
            </HeaderTitle>
            <HeaderActions>
                {loggedIn ? (
                    <HeaderActionButton onClick={() => { }}>
                        Logout
                    </HeaderActionButton>
                ) : (
                    <HeaderActionButton onClick={() => { }}>
                        Login
                    </HeaderActionButton>
                )}
            </HeaderActions>
        </HeaderContainer>
    )
}

export default Header;