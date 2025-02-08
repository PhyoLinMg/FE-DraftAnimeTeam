import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("pages/home_page.tsx")
    // route("board","pages/board_page.tsx"),
    // route("battle","pages/battle_page.tsx"),
    // route("queue","pages/queue_page.tsx")
] satisfies RouteConfig;
