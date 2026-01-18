import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7df1e]/10 border border-[#f7df1e]/20 text-[#f7df1e] text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#f7df1e] animate-pulse" />
              Interactive JS Learning
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Master JavaScript <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7df1e] to-[#ffec61]">
                Methods with ease.
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Explore a comprehensive collection of JavaScript methods for
              Strings, Arrays, Numbers, Dates, and Math. Experiment in real-time
              with our interactive playground.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/array"
                className="js-button-primary shadow-[0_0_20px_rgba(247,223,30,0.3)]"
              >
                Start Exploring
              </Link>
              <Link
                to="https://github.com/VectortheGreat/Javascript-Methods"
                target="_blank"
                className="js-button-outline"
              >
                <AiFillGithub className="text-xl" />
                Source Code
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="js-card p-1 bg-gradient-to-br from-[#262626] to-[#0a0a0b]">
              <div className="bg-[#0a0a0b] rounded-lg p-6 font-mono text-sm space-y-4">
                <div className="flex gap-1.5 mb-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="space-y-2">
                  <p className="text-blue-400">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-yellow-200">jsMethods</span> = {`{`}
                  </p>
                  <p className="pl-4 text-gray-400">
                    category:{" "}
                    <span className="text-green-400">"Modern Web"</span>,
                  </p>
                  <p className="pl-4 text-gray-400">features: [</p>
                  <p className="pl-8 text-green-400">"Interactive Testing",</p>
                  <p className="pl-8 text-green-400">
                    "Detailed Explanations",
                  </p>
                  <p className="pl-8 text-green-400">"Real-world Examples"</p>
                  <p className="pl-4 text-gray-400">],</p>
                  <p className="pl-4 text-gray-400">
                    fun: <span className="text-purple-400">true</span>
                  </p>
                  <p className="text-blue-400">{`}`};</p>
                </div>
                <div className="pt-4 border-t border-[#262626]">
                  <p className="text-[#f7df1e]">Processing...</p>
                  <p className="text-green-400">✓ Ready to explore</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#f7df1e] opacity-10 blur-[80px]" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500 opacity-10 blur-[80px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
