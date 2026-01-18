/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import CodeEditor from "@uiw/react-textarea-code-editor";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  arrayInputRandomizer,
  arrayParameterRandomizer,
} from "../../helpers/arrayRandomizer";
import {
  dateInputRandomizer,
  dateParameterRandomizer,
} from "../../helpers/dateRandomizer";
import {
  mathInputRandomizer,
  mathParameterRandomizer,
} from "../../helpers/mathRandomizer";
import {
  numberInputRandomizer,
  numberParameterRandomizer,
} from "../../helpers/numberRandomizer";
import { printCode } from "../../helpers/printCode";
import {
  stringInputRandomizer,
  stringParameterRandomizer,
} from "../../helpers/stringRandomizer";
import {
  getInput,
  getInputArray,
  getOutput,
  getParameter1,
  getParameter2,
  getParameter3,
  setMethodDescription,
  updateCodeResult,
} from "../../redux/ValueSlice";

type HideInputs = {
  hideParameter1: boolean;
  hideParameter2: boolean;
  hideParameter3: boolean;
};
type optionalParameters = {
  optionalParameter1: boolean;
  optionalParameter2: boolean;
  optionalParameter3: boolean;
};
type parameterDescriptions = {
  parameterDescriptions1: string;
  parameterDescriptions2: string;
  parameterDescriptions3: string;
};

const FormComp = () => {
  const dispatch = useDispatch();
  const output = useSelector(
    (state: { value: { output: any } }) => state.value.output,
  );
  const input = useSelector(
    (state: { value: { input: any } }) => state.value.input,
  );
  const inputArray = useSelector(
    (state: { value: { inputArray: any } }) => state.value.inputArray,
  );
  const parameter1 = useSelector(
    (state: { value: { parameter1: any } }) => state.value.parameter1,
  );
  const parameter2 = useSelector(
    (state: { value: { parameter2: any } }) => state.value.parameter2,
  );
  const parameter3 = useSelector(
    (state: { value: { parameter3: any } }) => state.value.parameter3,
  );
  const methodDescription = useSelector(
    (state: { value: { methodDescription: string } }) =>
      state.value.methodDescription,
  );

  const queryParam = useSelector(
    (state: { value: { queryParam: string } }) => state.value.queryParam,
  );
  const hideInputs: HideInputs = useSelector(
    (state: { value: { hideInputs: HideInputs } }) => state.value.hideInputs,
  );
  const optionalParameters: optionalParameters = useSelector(
    (state: { value: { optionalParameters: optionalParameters } }) =>
      state.value.optionalParameters,
  );
  const parameterDescriptions: parameterDescriptions = useSelector(
    (state: { value: { parameterDescriptions: parameterDescriptions } }) =>
      state.value.parameterDescriptions,
  );
  const [placeholderText, setPlaceholderText] = useState("Input");
  useEffect(() => {
    dispatch(setMethodDescription(""));
    dispatch(getInput(""));
    dispatch(getParameter1(""));
    dispatch(getParameter2(""));
    dispatch(getParameter3(""));
    if (pathname === "math") {
      if (queryParam === "random") {
        setPlaceholderText("Parameter 1 (Optional) - Max Value");
      } else {
        setPlaceholderText("Parameter 1 (Required) - Value");
      }
    } else {
      setPlaceholderText("Input");
    }
  }, [queryParam]);

  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  useEffect(() => {
    const printedCode = printCode(
      pathname,
      queryParam,
      pathname === "array" ? inputArray : input,
      parameter1,
      parameter2,
      parameter3,
    );
    dispatch(updateCodeResult(printedCode ?? ""));
  }, [
    pathname,
    queryParam,
    input,
    parameter1,
    parameter2,
    parameter3,
    inputArray,
  ]);

  const randomizerFunc = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    const randomNumber2 = Math.floor(Math.random() * 5);
    const randomNumber3 = Math.floor(Math.random() * 5);
    const value =
      pathname === "string"
        ? stringInputRandomizer[
            queryParam as keyof typeof stringInputRandomizer
          ][randomNumber]
        : pathname === "array"
          ? arrayInputRandomizer[
              queryParam as keyof typeof arrayInputRandomizer
            ][randomNumber]
          : pathname === "number"
            ? numberInputRandomizer[
                queryParam as keyof typeof numberInputRandomizer
              ][randomNumber]
            : pathname === "date"
              ? dateInputRandomizer[
                  queryParam as keyof typeof dateInputRandomizer
                ][randomNumber]
              : pathname === "math"
                ? mathInputRandomizer[
                    queryParam as keyof typeof mathInputRandomizer
                  ][randomNumber]
                : null;
    const parameterValue =
      pathname === "string"
        ? stringParameterRandomizer[
            queryParam as keyof typeof stringParameterRandomizer
          ][randomNumber2]
        : pathname === "array"
          ? arrayParameterRandomizer[
              queryParam as keyof typeof arrayParameterRandomizer
            ][randomNumber2]
          : pathname === "number"
            ? numberParameterRandomizer[
                queryParam as keyof typeof numberParameterRandomizer
              ][randomNumber2]
            : pathname === "date"
              ? dateParameterRandomizer[
                  queryParam as keyof typeof dateParameterRandomizer
                ][randomNumber2]
              : pathname === "math"
                ? mathParameterRandomizer[
                    queryParam as keyof typeof mathParameterRandomizer
                  ][randomNumber2]
                : null;
    const parameterValue2 =
      pathname === "string"
        ? stringParameterRandomizer[
            queryParam as keyof typeof stringParameterRandomizer
          ][randomNumber3]
        : pathname === "array"
          ? arrayParameterRandomizer[
              queryParam as keyof typeof arrayParameterRandomizer
            ][randomNumber3]
          : null;
    if (pathname === "string") {
      switch (queryParam) {
        case "charat":
          dispatch(getInput(value));
          dispatch(getParameter1(randomNumber));
          break;
        case "concat":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "endsWith":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "includes":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "indexOf":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "lastIndexOf":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "padEnd":
          dispatch(getInput(value));
          dispatch(
            getParameter1(Math.floor(Math.random() * (60 - 30 + 1) + 30)),
          );
          dispatch(getParameter2(parameterValue));
          break;
        case "padStart":
          dispatch(getInput(value));
          dispatch(
            getParameter1(Math.floor(Math.random() * (60 - 30 + 1) + 30)),
          );
          dispatch(getParameter2(parameterValue));
          break;
        case "repeat":
          dispatch(getInput(value));
          dispatch(getParameter1(Math.floor(Math.random() * (60 - 5 + 1) + 5)));
          break;
        case "replace":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          dispatch(getParameter2(parameterValue2));
          break;
        case "replaceAll":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          dispatch(getParameter2(parameterValue2));
          break;
        case "search":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "slice":
          dispatch(getInput(value));
          dispatch(getParameter1(randomNumber));
          break;
        case "split":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "startsWith":
          dispatch(getInput(value));
          dispatch(getParameter1(parameterValue));
          break;
        case "substring":
          dispatch(getInput(value));
          dispatch(getParameter1(randomNumber));
          break;
        case "toLowerCase":
          dispatch(getInput(value));
          break;
        case "toString":
          dispatch(getInput(value));
          break;
        case "toUpperCase":
          dispatch(getInput(value));
          break;
        case "trim":
          dispatch(getInput(value));
          break;
        case "trimEnd":
          dispatch(getInput(value));
          break;
        case "trimStart":
          dispatch(getInput(value));
          break;

        default:
          console.error("Invalid queryParam");
          break;
      }
    } else if (pathname === "array") {
      // prettier-ignore
      const validQueryParams = [ "at", "concat", "every", "fill", "filter", "find", "findIndex", "findLast", "findLastIndex", "forEach", "includes", "indexOf", "join", "lastIndexOf", "map", "pop", "push", "reduce", "reverse", "shift", "slice", "some", "sort", "splice", "unshift", ];
      if (validQueryParams.includes(queryParam)) {
        dispatch(getOutput(""));
        dispatch(getInputArray(value));
        dispatch(getParameter1(parameterValue));
      } else {
        console.error("Invalid queryParam");
      }
    } else if (pathname === "number") {
      const validQueryParams = [
        "isInteger",
        "parseFloat",
        "parseInt",
        "toFixed",
        "toPrecision",
        "toString",
      ];
      if (validQueryParams.includes(queryParam)) {
        dispatch(getOutput(""));
        dispatch(getInput(value));
        dispatch(getParameter1(parameterValue));
      } else {
        console.error("Invalid queryParam");
      }
    } else if (pathname === "date") {
      // prettier-ignore
      const validQueryParams = [ "getDate", "getDay", "getFullYear", "getHours", "getMinutes", "getMonth", "getSeconds", "setDate", "setFullYear", "setHours", "setMinutes", "setMonth", "setSeconds", "toDateString", "toISOString", "toString", "toTimeString", ];
      if (validQueryParams.includes(queryParam)) {
        dispatch(getInput(value));
        dispatch(getParameter1(parameterValue));
      } else {
        console.error("Invalid queryParam");
      }
    } else if (pathname === "math") {
      const validQueryParams = [
        "abs",
        "cbrt",
        "ceil",
        "floor",
        "max",
        "min",
        "pow",
        "random",
        "round",
      ];
      if (validQueryParams.includes(queryParam)) {
        dispatch(getInput(value));
        dispatch(getParameter2(parameterValue));
      } else {
        console.error("Invalid queryParam");
      }
    }
  };

  const setInputFunc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (pathname === "array") {
      dispatch(getInputArray(e.target.value));
    } else {
      dispatch(getInput(e.target.value));
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="js-card p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-2">
              <span className="text-[#f7df1e]">{queryParam}</span>
              <span className="text-gray-500 font-normal">()</span>
            </h1>
            <p className="mt-2 text-gray-400 leading-relaxed max-w-2xl">
              {methodDescription}
            </p>
          </div>
          <button
            type="button"
            className="js-button-outline self-start"
            onClick={randomizerFunc}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Randomize Example
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                Input Value
              </label>
              <textarea
                rows={2}
                className="js-input w-full font-mono text-sm resize-none"
                placeholder={placeholderText}
                value={pathname === "array" ? inputArray : input}
                onChange={(e) => setInputFunc(e)}
              />
            </div>

            <div className="space-y-4">
              {!hideInputs.hideParameter1 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                    Parameter 1{" "}
                    {optionalParameters.optionalParameter1
                      ? "(Optional)"
                      : "(Required)"}
                  </label>
                  <input
                    type="text"
                    className="js-input w-full font-mono text-sm"
                    placeholder={parameterDescriptions.parameterDescriptions1}
                    value={parameter1}
                    onChange={(e) => dispatch(getParameter1(e.target.value))}
                  />
                </div>
              )}

              {!hideInputs.hideParameter2 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                    Parameter 2{" "}
                    {optionalParameters.optionalParameter2
                      ? "(Optional)"
                      : "(Required)"}
                  </label>
                  <input
                    type="text"
                    className="js-input w-full font-mono text-sm"
                    placeholder={parameterDescriptions.parameterDescriptions2}
                    value={parameter2}
                    onChange={(e) => dispatch(getParameter2(e.target.value))}
                  />
                </div>
              )}

              {!hideInputs.hideParameter3 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                    Parameter 3{" "}
                    {optionalParameters.optionalParameter3
                      ? "(Optional)"
                      : "(Required)"}
                  </label>
                  <input
                    type="text"
                    className="js-input w-full font-mono text-sm"
                    placeholder={parameterDescriptions.parameterDescriptions3}
                    value={parameter3}
                    onChange={(e) => dispatch(getParameter3(e.target.value))}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                Preview Code
              </label>
              <div className="rounded-lg overflow-hidden border border-[#262626]">
                <CodeEditor
                  value={useSelector(
                    (state: { value: { codeResult: string } }) =>
                      state.value.codeResult,
                  )}
                  language="js"
                  padding={20}
                  className="bg-[#0D1117] font-mono text-sm overflow-hidden"
                  disabled
                  style={{
                    backgroundColor: "#0D1117",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                Output result
              </label>
              <div className="relative">
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${
                      output === undefined || output === null
                        ? "bg-red-500/20 text-red-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {typeof output}
                  </span>
                </div>
                <pre className="js-input w-full min-h-[100px] font-mono text-sm flex items-center p-4">
                  <code className="text-[#f7df1e]">
                    {output === undefined
                      ? "undefined"
                      : JSON.stringify(output, null, 2)}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComp;
