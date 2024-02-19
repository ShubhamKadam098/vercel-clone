import React from "react";
import Table from "../../Table/Table";
import projectIcon from "../../../assets/projectIcon.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="w-[90vw] mx-auto my-6 px-6 py-8 ">
        <div className="flex items-center justify-between mb-8 border-b border-border-color border-solid pb-6">
          <h2 className="text-white font-semibold text-2xl ">Your Projects</h2>
          <Link
            to="/project"
            className="flex items-center gap-2 py-2.5 px-8 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
          dark:text-primary-color dark:bg-primary-font-color dark:hover:bg-gray-300 dark:focus:ring-white dark:ring-1 hover:scale-105 transition-all ease-in"
          >
            <svg
              width="14px"
              height="14px"
              viewBox="0 0 14 14"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Icons"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Rounded"
                  transform="translate(-411.000000, -1487.000000)"
                >
                  <g
                    id="Content"
                    transform="translate(100.000000, 1428.000000)"
                  >
                    <g
                      id="-Round-/-Content-/-add"
                      transform="translate(306.000000, 54.000000)"
                    >
                      <g transform="translate(0.000000, 0.000000)">
                        <polygon
                          id="Path"
                          points="0 0 24 0 24 24 0 24"
                        ></polygon>
                        <path
                          d="M18,13 L13,13 L13,18 C13,18.55 12.55,19 12,19 C11.45,19 11,18.55 11,18 L11,13 L6,13 C5.45,13 5,12.55 5,12 C5,11.45 5.45,11 6,11 L11,11 L11,6 C11,5.45 11.45,5 12,5 C12.55,5 13,5.45 13,6 L13,11 L18,11 C18.55,11 19,11.45 19,12 C19,12.55 18.55,13 18,13 Z"
                          id="🔹Icon-Color"
                          fill="#1D1D1D"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            Add New...
            <span className="sr-only">Search</span>
          </Link>
        </div>
        {/* Search Bar */}
        <form className="flex items-center max-w-screen-xl mx-auto mb-6">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img src={projectIcon} alt="" className="w-1/2 pr-2" />
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-card-color dark:border-border-color border-solid dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search project name..."
              required
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 py-2.5 px-8 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            Search
            <span className="sr-only">Search</span>
          </button>
        </form>
        <Table />
      </div>
    </>
  );
};

export default Dashboard;
