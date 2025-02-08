const BoardComponent: React.FC<BoardArgument>= ({characters}) => {
    const groupedRoles: GroupedRole[] = characters.reduce((acc: GroupedRole[], curr: Character) => {
        const existingGroup = acc.find(group => group.role_id === curr.role_id);

        if (existingGroup) {
            existingGroup.characters.push(curr);
        } else {
            acc.push({
                role_id: curr.role_id,
                roleName: curr.role,
                characters: [curr]
            });
        }

        return acc;
    }, []);
    return (
        <div className="bg-gray-400 rounded-lg shadow-lg p-6 m-10">
            {groupedRoles.map((group) => (
                <div key={group.role_id} className="grid grid-cols-3 gap-4 m-4">
                    <div className="flex flex-col items-center justify-center">
                        <img src={group.characters[0].image} className="bg-blue-200 rounded-lg w-48 h-48 flex items-center justify-center text-blue-600 font-bold" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="w-20 h-20 flex items-center text-center justify-center text-blue-600 font-bold">{group.roleName}</div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img src={group.characters[1].image} className="bg-blue-200 rounded-lg w-48 h-48 flex items-center justify-center text-blue-600 font-bold" />
                    </div>
                </div>
            ))}   
        </div>
    );
}


type GroupedRole= {
    role_id: number;
    roleName: string;
    characters: Character[];
}

type BoardArgument={
    characters: Character[]
}

export default BoardComponent;

