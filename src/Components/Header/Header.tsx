import { HeaderContainer, HeaderTitle, HeaderActions, HeaderActionButton, UserInfo } from "./styles";
import type { User } from "@/Contexts/Auth/AuthContext";

export const Header = ({ loggedIn, user, setLogOut }: { loggedIn: boolean, user: User | null, setLogOut: () => void }) => {
    return (
        <HeaderContainer>
            <HeaderTitle>
                GONG App
            </HeaderTitle>
            <HeaderActions>

                {loggedIn && user && (
                    <>
                        <UserInfo data-testid="user-info">
                            <p>{user.firstName} {user.lastName}</p>
                        </UserInfo>
                        <HeaderActionButton onClick={setLogOut} data-testid="logout-button">
                            Logout
                        </HeaderActionButton>
                    </>
                )}
            </HeaderActions>
        </HeaderContainer>
    )
}

export default Header;