const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null; // Don't render if only 1 page

    const getPageNumbers = () => {
        const maxPagesToShow = 10;
        const half = Math.floor(maxPagesToShow / 2);
        let start = Math.max(currentPage - half, 1);
        let end = Math.min(start + maxPagesToShow - 1, totalPages);

        if (end - start < maxPagesToShow - 1) {
            start = Math.max(end - maxPagesToShow + 1, 1);
        }

        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        
        
        return pages;
    };

    const pages = getPageNumbers();

    return (
        <nav className="flex flex-wrap items-center justify-center gap-2 mt-6 mb-3 text-sm">
            {/* Prev Button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1.5 rounded-md border transition cursor-pointer ${currentPage === 1
                        ? 'text-gray-400 border-gray-300 cursor-not-allowed'
                        : 'text-blue-600 border-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900'
                    }`}
            >
                Prev
            </button>

            {/* Page Numbers */}
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1.5 rounded-md border transition cursor-pointer ${page === currentPage
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'text-gray-700 dark:text-gray-300 border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1.5 rounded-md border transition cursor-pointer ${currentPage === totalPages
                        ? 'text-gray-400 border-gray-300 cursor-not-allowed'
                        : 'text-blue-600 border-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900'
                    }`}
            >
                Next
            </button>
        </nav>
    );
};
export default Pagination;