const BreadcrumbsPagination = ({ currentPage, totalPages }) => {
  return (
    <div className="w-full px-4 py-2 mb-4 text-sm text-gray-700 bg-gray-100 rounded-lg shadow-sm dark:bg-gray-800 dark:text-gray-300">
      <div className="flex items-center gap-1 mx-auto max-w-7xl">
        <span>📄</span>
        <span>
          Showing <span className="font-medium text-gray-900 dark:text-white">Page {currentPage}</span> of{" "}
          <span className="font-medium text-gray-900 dark:text-white">{totalPages.toLocaleString()}</span> pages
        </span>
      </div>
    </div>
  );
};
export default BreadcrumbsPagination;