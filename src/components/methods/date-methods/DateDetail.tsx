const DateDetail = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-white">
          Date{" "}
          <span className="text-[#f7df1e] text-2xl font-normal opacity-50 ml-2">
            // Global Object
          </span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
          JavaScript <span className="text-[#00e0ff] font-mono">Date</span>{" "}
          objects represent a single moment in time in a platform-independent
          format. Date objects encapsulate an integral number that represents
          milliseconds since the midnight at the beginning of January 1, 1970,
          UTC.
        </p>
      </div>

      <div className="js-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <div className="w-1 h-6 bg-[#f7df1e] rounded-full" />
          Characteristics
        </h2>
        <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
          <p>
            The <span className="text-[#f7df1e] font-mono">Date</span> object is
            a built-in object in JavaScript that stores the date and time.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>It provides methods for managing dates and times.</li>
            <li>
              Times are measured in milliseconds since the Unix Epoch (January
              1, 1970).
            </li>
            <li>Date objects are created with `new Date()`.</li>
          </ul>
          <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 text-blue-200 text-sm">
            <strong>Note:</strong> JavaScript handles dates from 100,000,000
            days before the Epoch to 100,000,000 days after.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateDetail;
