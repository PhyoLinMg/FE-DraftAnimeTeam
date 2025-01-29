import { useEffect, useState } from "react";
import type { Route } from "./+types/home_page";
import {fetchBoard} from "../api/service";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Draft Anime Team" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [data,setData] = useState<Board[]>();
  const getBoard = async () => {
    try {
      const result = await fetchBoard('boards');
      setData(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally");
    }
  }

  useEffect(()=>{
    getBoard();
  },[]);

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
