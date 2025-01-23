import type { Route } from "./+types/home_page";
import { BoardComponent } from '../components/board/board';



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Draft Anime Team" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <BoardComponent />;
}
