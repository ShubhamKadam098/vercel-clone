import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-primary-color border-b border-solid dark:border-border-color relative min-h-18">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 76 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-primary-font-color">
            Vercel
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Logo;
