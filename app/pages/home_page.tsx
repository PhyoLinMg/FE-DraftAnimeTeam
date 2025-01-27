import type { Route } from "./+types/home_page";
import BoardComponent from "../components/board/board"


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Draft Anime Team" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <BoardComponent roles={
    [
      { image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Roronoa_Zoro.jpg", name: 'Captain' },
      { image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Roronoa_Zoro.jpg", name: 'Vice Captain' },
      { image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Roronoa_Zoro.jpg", name: 'Tank' },
      { image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Roronoa_Zoro.jpg", name: 'Healer' },
      { image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Roronoa_Zoro.jpg", name: 'Support' },
      { image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Roronoa_Zoro.jpg", name: 'Support' },
    ]
  }/>;
}
