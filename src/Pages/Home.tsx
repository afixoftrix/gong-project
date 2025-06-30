import PageLayout from "../Components/PageLayout/PageLayout";
import { useAuthContext } from "@/Contexts/Auth/useAuthContext";
import { UserLine } from "@/Components/AccordionList/AccordionList";

const Home = () => {
    const { users } = useAuthContext();
    return (
        <PageLayout>
            <h1>Heirarchy Tree</h1>
            {users && users.map((user) => (
                <UserLine key={user.id} user={user} />
            ))}
        </PageLayout>
    )
}

export default Home;