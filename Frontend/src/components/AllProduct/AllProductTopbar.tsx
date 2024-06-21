import { Link } from "react-router-dom";

const AllProductTopbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 py-4">
      <div className="w-full md:w-1/2"></div>
      <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
        <Link
          to={"/add-product"}
          type="button"
          className="flex items-center justify-center text-white bg-[#6a119e] hover:bg-[#741081] focus:ring-4 focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
        >
          <svg
            className="h-3.5 w-3.5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            />
          </svg>
          Add product
        </Link>
      </div>
    </div>
  );
};

export default AllProductTopbar;
