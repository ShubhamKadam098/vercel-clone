import React, { useState } from "react";

const Project = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <>
      <div className="w-[80vw] mx-auto my-6 dark:bg-card-color px-6 py-8 border dark:border-border-color border-slate-800 rounded-lg border-solid">
        <h2 className="text-white font-semibold text-2xl mb-8 border-b border-border-color border-solid">
          Project Configuration
        </h2>
        <div className=" my-4">
          <form>
            <div className="grid gap-6 mb-6 ">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-primary-font-color"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="example"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  GitHub URL
                </label>
                <input
                  type="url"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="https://github.com/abc/repo.git"
                  required
                />
              </div>
            </div>
            <h2 id="accordion-arrow-icon-heading-3 ">
              <button
                type="button"
                className="flex items-center rounded-xl justify-between w-full p-3 font-sm rtl:text-right border-solid text-slate-500 border border-slate-200 focus:ring focus:ring-slate-200 dark:focus:ring-border-color dark:border-border-color dark:text-slate-400  gap-3"
                onClick={toggleAccordion}
                aria-expanded={isAccordionOpen}
                aria-controls="accordion-arrow-icon-body-3"
              >
                <span>Environment Variables</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 rotate-180 shrink-0 ${
                    isAccordionOpen ? "rotate-0" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-arrow-icon-body-3"
              className={`border border-t-0 border-gray-200 dark:border-gray-700 overflow-hidden transition-max-height duration-500 ease-in-out ${
                isAccordionOpen ? "max-h-[500px]" : "max-h-0"
              }`}
              aria-labelledby="accordion-arrow-icon-heading-3"
            >
              <div className="p-5 border border-solid  border-border-color rounded-xl">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="key"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-secondary-font-color"
                    >
                      Key
                    </label>
                    <input
                      type="text"
                      id="key"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="key"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="value"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-secondary-font-color"
                    >
                      Value
                    </label>
                    <input
                      type="text"
                      id="value"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="value"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-12">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-1/3"
              >
                Deploy
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Deployment */}
      <div className="w-[80vw] mx-auto my-6 dark:bg-card-color px-6 py-8 border dark:border-border-color border-slate-800 rounded-lg border-solid">
        <h2 className="text-white font-semibold text-2xl mb-8 border-b border-border-color border-solid">
          Deploy
        </h2>
        <div className=" my-4 px-8">
          <div className="flex  justify-center gap-6 flex-wrap">
            {/* Left */}
            <ol className="relative max-w-[30%] text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Initialize</h3>
                <p className="text-sm">Verifying project</p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Upload</h3>
                <p className="text-sm">Fetching files from repository</p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Build</h3>
                <p className="text-sm">Building project </p>
              </li>
              <li className="ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Done</h3>
                <p className="text-sm break-words">Deployment successful</p>
              </li>
            </ol>
            {/*Right  */}
            <div className=" flex-1 h-full  text-primary-font-color align-top justify-start">
              <h6 className="mb-2">Logs</h6>
              <pre className="p-2 min-h-40 max-h-60 overflow-auto dark:bg-card-color w-full grow border flex-wrap text-wrap max-w-full border-solid rounded-xl flex-1 dark:border-border-color dark:text-secondary-font-color">
                Loading...
              </pre>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-12 ">
          <button
            type="submit"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 w-1/4 mr-6"
          >
            Cancle Deployment
          </button>
        </div>
      </div>
    </>
  );
};

export default Project;
