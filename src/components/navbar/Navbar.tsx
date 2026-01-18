import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const pages: { [key: string]: string } = {
    Home: "/",
    String: "/string",
    Number: "/number",
    Array: "/array",
    Date: "/date",
    Math: "/math",
  };
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0b]/80 backdrop-blur-md border-b border-[#262626]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to={"/"} className="flex items-center gap-3 group">
            <div className="bg-[#f7df1e] text-black font-extrabold w-10 h-10 flex items-center justify-center rounded-lg group-hover:rotate-12 duration-300">
              JS
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block">
              Methods <span className="text-[#f7df1e]">Explorer</span>
            </span>
          </Link>

          <ul className="flex items-center gap-1 sm:gap-2">
            {Object.keys(pages).map((page) => (
              <li key={page}>
                <Link
                  to={pages[page]}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === pages[page]
                      ? "bg-[#f7df1e] text-black"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
