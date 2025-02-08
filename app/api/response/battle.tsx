interface Character {
    role: string;
    role_id: number;
    character_id: number;
    image: string;
}

interface Battle {
    players: Player[];
    characters: Character[];
    board: string;
}

interface Player {
    id: number;
    player_type: "player_one" | "player_two";
    name: string;
    created_at: string;
    updated_at: string;
}

interface Meta {
    current_page: number;
    from: number;
    //last_page is equal to the total page
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

interface BattleResponse {
    data: Battle[];

    meta: Meta;
}