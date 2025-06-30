import PageLayout from "../Components/PageLayout/PageLayout";
import { useAuthContext } from "@/Contexts/Auth/useAuthContext";
import { UserLine } from "@/Components/UserLine/UserLine";

const Home = () => {
    const { users } = useAuthContext();
    return (
        <PageLayout>
            <main data-testid="home-page" style={{ paddingLeft: "24px" }}>
                <h1>Heirarchy Tree</h1>
                {users && users.map((user) => (
                    <UserLine key={user.id} user={user} />
                ))}
            </main>
        </PageLayout>
    )
}

export default Home;