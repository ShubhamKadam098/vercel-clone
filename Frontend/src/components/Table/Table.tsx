import React, { useState } from "react";

const Table: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="inline-block min-w-full py-2 align-middle">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50 dark:bg-secondary-color border-b-2 dark:border-border-color border-solid">
              <tr className="dark:text-primary-font-color">
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-primary-font-color sm:pl-6"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-primary-font-color"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-primary-font-color"
                >
                  Repository
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-primary-font-color"
                >
                  Links
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 dark:text-primary-font-color"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="relative py-3.5 pl-3 pr-4 sm:pr-6 dark:text-primary-font-color"
                >
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="bg-card-color">
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6 dark:text-primary-font-color">
                  1
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-primary-font-color">
                  Movie Finder
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm  dark:text-primary-font-color">
                  <a
                    href="https://github.com/ShubhamKadam098/Movie-Finder"
                    target="_blank"
                    className="hover:text-blue-400 "
                  >
                    https://github.com/ShubhamKadam098/Movie-Finder
                  </a>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm  dark:text-primary-font-color">
                  <a
                    href="https://github.com/ShubhamKadam098/Movie-Finder"
                    target="_blank"
                    className="hover:text-blue-400 "
                  >
                    https://github.com/ShubhamKadam098/Movie-Finder
                  </a>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm  dark:text-primary-font-color">
                  <span className="flex justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Running
                  </span>
                </td>
                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <div className="inline-block text-left">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      type="button"
                      className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                      id="menu-button"
                      aria-expanded={isMenuOpen}
                      aria-haspopup="true"
                    >
                      <span className="sr-only"></span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                    {isMenuOpen && (
                      <div
                        className="origin-top-right absolute right-32 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex={-1}
                      >
                        <div className="" role="none">
                          <a
                            href="#"
                            className="text-gray-500 font-medium hover:text-gray-900 hover:bg-gray-50 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                          >
                            Detalle
                          </a>
                        </div>
                        <div className="" role="none">
                          <a
                            href="#"
                            className="text-gray-500 font-medium hover:text-gray-900 hover:bg-gray-50 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                          >
                            Editar
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
