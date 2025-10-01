const NoMovieFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] text-center px-4">
      <div className="w-100 aspect-video md:w-32 opacity-40">
        {/* Optional: icon/image placeholder */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 3.75v16.5m-9-16.5v16.5M3.75 6.75h16.5m-16.5 10.5h16.5"
          />
        </svg>
      </div>

      <h2 className="mt-6 text-lg font-semibold md:text-xl text-balance text-neutral-700 dark:text-neutral-200">
        No Movies Found
      </h2>
      <p className="max-w-md mt-2 text-sm md:text-base text-neutral-500 dark:text-neutral-400 text-pretty">
        We couldn’t find any movies matching your request. Try adjusting your filters or searching again.
      </p>
    </div>
  );
};
export default NoMovieFound;