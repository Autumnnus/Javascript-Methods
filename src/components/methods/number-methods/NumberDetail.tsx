const NumberDetail = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-white">
          Number{" "}
          <span className="text-[#f7df1e] text-2xl font-normal opacity-50 ml-2">
            // Global Object
          </span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
          The <span className="text-[#00e0ff] font-mono">Number</span> values
          represent floating-point numbers like{" "}
          <span className="font-mono">37</span> or{" "}
          <span className="font-mono">-9.25</span>. The Number constructor
          contains constants and methods for working with numbers.
        </p>
      </div>

      <div className="js-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <div className="w-1 h-6 bg-[#f7df1e] rounded-full" />
          Characteristics
        </h2>
        <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
          <p>
            The main primitive numeric type in JavaScript is{" "}
            <span className="text-[#f7df1e] font-mono">Number</span>, which is a
            64-bit binary format IEEE 754 value.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>It can represent both integers and floating-point numbers.</li>
            <li>
              Ranges from -(2<sup>53</sup> - 1) up to 2<sup>53</sup> - 1.
            </li>
            <li>
              Includes special values like `Infinity`, `-Infinity`, and `NaN`.
            </li>
          </ul>
          <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 text-blue-200 text-sm">
            <strong>Note:</strong> For very large integers, you should use the
            `BigInt` type instead.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberDetail;
