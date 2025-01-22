import type { Route } from "./+types/board_page";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Board" },
        { name: "description", content: "Board" },
    ];
}

export default function Home() {
    return <h1>Testing Board</h1>;
}
