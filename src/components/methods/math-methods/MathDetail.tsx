const MathDetail = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-white">
          Math{" "}
          <span className="text-[#f7df1e] text-2xl font-normal opacity-50 ml-2">
            // Namespace Object
          </span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
          The <span className="text-[#00e0ff] font-mono">Math</span> namespace
          object contains static properties and methods for mathematical
          constants and functions.
        </p>
      </div>

      <div className="js-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <div className="w-1 h-6 bg-[#f7df1e] rounded-full" />
          Characteristics
        </h2>
        <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
          <p>
            Math works with the{" "}
            <span className="text-[#f7df1e] font-mono">Number</span> type. It
            doesn't work with BigInt.
          </p>
          <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 text-blue-200 text-sm">
            <strong>Note:</strong> Math is not a constructor. You cannot use it
            with the <span className="font-mono">new</span> operator or invoke
            it as a function.
          </div>
          <p>
            All properties and methods of Math are static. You refer to the
            constant pi as{" "}
            <span className="text-[#f7df1e] font-mono">Math.PI</span> and you
            call the sine function as{" "}
            <span className="text-[#f7df1e] font-mono">Math.sin(x)</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MathDetail;
