import { NavLink } from "react-router";

const BoardComponent: React.FC<BoardArgument>= ({roles}) => {
    return (
        <div className="bg-gray-400 rounded-lg shadow-lg p-6 m-10">
            {roles.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 m-4">
                    <div className="flex flex-col items-center justify-center">
                        <img src={item.image} className="bg-blue-200 rounded-lg w-48 h-48 flex items-center justify-center text-blue-600 font-bold"/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-20 h-20 flex items-center text-center justify-center text-blue-600 font-bold">{item.name}</div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img src={item.image} className="bg-blue-200 rounded-lg w-48 h-48 flex items-center justify-center text-blue-600 font-bold" />
                    </div>
                </div>
            ))}   
        </div>
    );
}

type Role = {
    image:string,
    name: string
}

type BoardArgument={
    roles: Role[]
}

export default BoardComponent;

