import { useEffect, useState } from "react";
import type { Route } from "./+types/home_page";
import BattleListView from "~/components/utils/BattleListView";
import useChannelHook from "~/hook/useChannelHook";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Draft Anime Team" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const message= useChannelHook();
  
  return (
    <>
      <p>{message}</p>
      <h1>Data</h1>
      <BattleListView></BattleListView>
    </>
  );
}
