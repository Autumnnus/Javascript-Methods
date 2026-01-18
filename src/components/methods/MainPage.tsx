import { useLocation } from "react-router-dom";
import ArrayDetail from "./array-methods/ArrayDetail";
import DateDetail from "./date-methods/DateDetail";
import MathDetail from "./math-methods/MathDetail";
import NumberDetail from "./number-methods/NumberDetail";
import StringDetail from "./string-methods/StringDetail";

const MainPage = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  return (
    <div className="w-full">
      {pathname === "string" ? (
        <StringDetail />
      ) : pathname === "array" ? (
        <ArrayDetail />
      ) : pathname === "number" ? (
        <NumberDetail />
      ) : pathname === "date" ? (
        <DateDetail />
      ) : pathname === "math" ? (
        <MathDetail />
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
};

export default MainPage;
