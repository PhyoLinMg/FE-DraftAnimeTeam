import React, { useState, useEffect } from 'react';
import { fetchBattles } from '~/api/service';
import BoardComponent from '../board/board';


const BattleListView = () => {
    const [items, setItems] = useState<Battle[]>();
    const [totalPage, setTotalPage] = useState<number>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                // Simulate API call
                setIsLoading(true);
                const result = await fetchBattles(currentPage);
                console.log('page',currentPage);
                setIsLoading(false);

                setItems(result.data);

                setTotalPage(result.meta.last_page);
            } catch (error) {
                console.error('Error fetching items:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchItems();
    }, [currentPage]);
    

    const handlePageChange = (newPage:number) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="container mx-auto p-4">
            {isLoading ? (
                <div className="text-center py-8">Loading...</div>
            ) : (
                <>
                        <div className="space-y-4">
                            {items?.map((item, index) => (
                                <div key={index} className="p-4 border rounded">
                                    <h3 className="font-semibold">{item.board}</h3>
                                    <BoardComponent characters={item.characters}></BoardComponent>
                                </div>
                            ))}
                        </div>
                    

                    <div className="mt-6 flex justify-center gap-2 items-center">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'
                                }`}
                        >
                            Previous
                        </button>
                        <span className="text-gray-600 justify-center">Page {currentPage} of {totalPage}</span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPage}
                            className={`px-4 py-2 rounded ${currentPage === totalPage ? 'bg-gray-300' : 'bg-blue-500 text-white'
                                }`}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default BattleListView;