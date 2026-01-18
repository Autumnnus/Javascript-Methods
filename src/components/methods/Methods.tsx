import { useLocation, useNavigate } from "react-router-dom";

const Methods = ({ methods }: { methods: Record<string, string> }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClick = (method: string) => {
    navigate(`${location.pathname}${methods[method]}`);
  };

  const queryParam = location.search.split("=")[1];

  return (
    <div className="col-span-12 lg:col-span-2">
      <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 custom-scrollbar">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 px-2">
          Available Methods
        </h3>
        <ul className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
          {Object.keys(methods).map((method) => {
            const isActive =
              method &&
              queryParam &&
              method.toLowerCase() === queryParam.toLowerCase();
            return (
              <li
                key={method}
                className={`cursor-pointer whitespace-nowrap lg:whitespace-normal px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-[#f7df1e] border-[#f7df1e] text-black shadow-[0_0_15px_rgba(247,223,30,0.2)]"
                    : "bg-[#141416] border-[#262626] text-gray-400 hover:border-[#f7df1e]/50 hover:text-white"
                }`}
                onClick={() => handleOnClick(method)}
              >
                {method}()
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Methods;
