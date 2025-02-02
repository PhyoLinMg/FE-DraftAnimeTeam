import React, { useState, useEffect } from 'react';


interface Test{
    id:number,
    name:String,
}

const mockData = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
    // ... add more items as needed
];

const ListView = () => {
    const [items, setItems] = useState<Test[]>();
    const [totalPage, setTotalPage] = useState<number>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                // Simulate API call
                setIsLoading(true);
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log('page',currentPage);
                setIsLoading(false);

                setItems(mockData);

                setTotalPage(10);
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
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <button
                                        onClick={() => {}}
                                        className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => {}}
                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    

                    <div className="mt-6 flex justify-center gap-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'
                                }`}
                        >
                            Previous
                        </button>
                        <span className="text-gray-600">Page {currentPage} of {totalPage}</span>
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

export default ListView;