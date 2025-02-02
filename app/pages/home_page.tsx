import { useEffect, useState } from "react";
import type { Route } from "./+types/home_page";
import {fetchBoard} from "../api/service";
import { AxiosError } from "axios";
import { CustomError } from "~/api/exception/CustomError";
import ListView from "~/components/utils/ListView";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Draft Anime Team" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [data,setData] = useState<Board[]>();
  const [error, setError] = useState<String | null>(null);
  const getBoard = async () => {
    try {
      const result = await fetchBoard();
      setData(result.data);
    } catch (error) {
        if(error instanceof CustomError){
          setError(error.message);
        }
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
      <ListView></ListView>
    </div>
  );
}
