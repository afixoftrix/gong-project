import type { User } from "./Contexts/Auth/AuthContext";

export interface UserWithHierarchy extends User {
    children?: UserWithHierarchy[] | null | undefined;
}

export const sortUsersIntoHeirarchy = (users: UserWithHierarchy[]): UserWithHierarchy[] => {
    const userMap = new Map<number, UserWithHierarchy>();
    users.forEach(user => {
        userMap.set(user.id, { ...user, children: [] });
    });

    const hierarchy: UserWithHierarchy[] = [];

    users.forEach(user => {
        if (!user.managerId) {
            const rootUser = userMap.get(user.id);
            if (rootUser) {
                hierarchy.push(rootUser);
            }
        }
    });

    const buildHierarchy = (parentId: number): UserWithHierarchy[] => {
        const children: UserWithHierarchy[] = [];

        users.forEach(user => {
            if (user.managerId === parentId) {
                const childUser = userMap.get(user.id);
                if (childUser) {
                    childUser.children = buildHierarchy(user.id);
                    children.push(childUser);
                }
            }
        });

        return children;
    };

    hierarchy.forEach(rootUser => {
        rootUser.children = buildHierarchy(rootUser.id);
    });

    return hierarchy;
}
