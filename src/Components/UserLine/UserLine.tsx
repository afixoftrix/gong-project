import type { UserWithHierarchy } from "@/utils";
import { useState } from "react";
import { ChildrenContainer, Expander, Initials, UserImage, UserLineContainer, Container } from "./styles";

export const UserLine = ({ user }: { user: UserWithHierarchy }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [imageError, setImageError] = useState(false);
    const initials = `${user.firstName[0]}${user.lastName[0]}`;

    return (
        <div>
            <UserLineContainer>
                {(user.children && user.children.length > 0) ? <Expander clickable={true} onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</Expander> : <Expander>-</Expander>}
                {user.photo && !imageError ? (
                    <UserImage
                        src={user.photo}
                        alt={initials}
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <Initials>{initials}</Initials>
                )}
                <p>{user.firstName} {user.lastName}</p>

            </UserLineContainer>
            <ChildrenContainer>
                {isOpen && user.children && user.children.map((child) => (
                    <UserLine key={child.id} user={child} />
                ))}
            </ChildrenContainer>
        </div>
    )
}