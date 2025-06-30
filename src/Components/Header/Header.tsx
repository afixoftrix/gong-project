import { HeaderContainer, HeaderTitle, HeaderActions, HeaderActionButton, UserInfo } from "./styles";
import type { User } from "@/Contexts/Auth/AuthContext";

export const Header = ({ loggedIn, user, setLogOut }: { loggedIn: boolean, user: User, setLogOut: () => void }) => {
    return (
        <HeaderContainer>
            <HeaderTitle>
                GONG App
            </HeaderTitle>
            <HeaderActions>

                {loggedIn && (
                    <>
                        <UserInfo>
                            <p>{user.firstName} {user.lastName}</p>
                        </UserInfo>
                        <HeaderActionButton onClick={setLogOut}>
                            Logout
                        </HeaderActionButton>
                    </>
                )}
            </HeaderActions>
        </HeaderContainer>
    )
}

export default Header;