const StringDetail = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-white">
          String{" "}
          <span className="text-[#f7df1e] text-2xl font-normal opacity-50 ml-2">
            // Global Object
          </span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
          The <span className="text-[#00e0ff] font-mono">String</span> object is
          used to represent and manipulate a sequence of characters. Strings are
          useful for holding data that can be represented in text form.
        </p>
      </div>

      <div className="js-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <div className="w-1 h-6 bg-[#f7df1e] rounded-full" />
          Characteristics
        </h2>
        <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
          <p>
            The <span className="text-[#f7df1e] font-mono">String</span> type is
            a sequence of 16-bit unsigned integer values.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Strings are <strong>immutable</strong>; once created, they cannot
              be changed.
            </li>
            <li>
              String methods usually return a new string rather than modifying
              the original.
            </li>
            <li>
              Can be enclosed in single quotes (''), double quotes (""), or
              backticks (``).
            </li>
          </ul>
          <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 text-blue-200 text-sm">
            <strong>Note:</strong> Template literals (backticks) allow for
            embedded expressions and multi-line strings.
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringDetail;
