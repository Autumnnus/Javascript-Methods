const ArrayDetail = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-white">
          Array{" "}
          <span className="text-[#f7df1e] text-2xl font-normal opacity-50 ml-2">
            // Global Object
          </span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
          The <span className="text-[#00e0ff] font-mono">Array</span> object, as
          with arrays in other programming languages, enables storing a
          collection of multiple items under a single variable name, and has
          members for performing common array operations.
        </p>
      </div>

      <div className="js-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <div className="w-1 h-6 bg-[#f7df1e] rounded-full" />
          Description
        </h2>
        <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
          <p>
            In JavaScript, arrays are not primitives but are actually{" "}
            <span className="text-[#f7df1e] font-mono">Array</span> objects.
            They have some unique characteristics:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              JavaScript arrays are <strong>resizable</strong> and can contain a
              mix of different data types.
            </li>
            <li>
              JavaScript arrays are <strong>not associative arrays</strong>;
              elements must be accessed using integers as indexes.
            </li>
            <li>
              JavaScript arrays are <strong>zero-indexed</strong>: the first
              element is at index 0.
            </li>
            <li>
              JavaScript{" "}
              <strong>array-copy operations create shallow copies</strong>.
            </li>
          </ul>
          <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 text-blue-200 text-sm">
            <strong>Note:</strong> Array methods are used to perform operations
            on arrays. Some methods modify the original array (mutating), while
            others return a new array (non-mutating).
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrayDetail;
