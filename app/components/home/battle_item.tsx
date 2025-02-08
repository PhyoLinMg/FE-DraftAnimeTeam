import BoardComponent from "../board/board";

const BattleItem: React.FC<BattleArgument> =({battle})=>{
    return (
        <>
            <p>{battle.players[0].name}</p>
            <BoardComponent characters={battle.characters}></BoardComponent>
            <p>{battle.players[1].name}</p>
        </>
    );   
}


type BattleArgument = {
    battle: Battle
}
export default BattleItem;