interface Role {
    id: number;
    name: string;
}

interface Board {
    roles: Role[];
    name: string;
}

type BoardsData = {
    data: Board[];
};