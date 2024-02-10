import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const App = () => {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("WIN_DOWS_DOWNLOAD_2024.pdf");

  const handleChange = (file) => {
    setFile(file);
    setFileName(file.name);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-secondary py-12 px-36">
      <div className="flex flex-col w-full h-full overflow-y-scroll rounded-2xl shadow-2xl bg-white text-primary">
        <div className="relative flex flex-col justify-center items-center w-full">
          <div className="absolute cursor-pointer hover:bg-blue-950 top-0 left-0 rounded-md m-4 p-2 bg-primary">
            <div className=" logo cross-logo w-4 h-4"></div>
          </div>
          <h1 className="text-2xl font-bold mt-10">Document Upload</h1>
          <hr className="w-1/6 border-t border-t-zinc-200 mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-16 p-10">
          <div className="flex flex-col">
            <select className="border border-zinc-200 p-2 rounded-lg outline-primary mb-4 font-medium">
              <option>Select Import Name:</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <hr className="w-1/2 border-t border-t-zinc-200" />
            <p className="my-2 font-medium">
              Select a manifest file you&apos;d like to import
            </p>
            <div className="border rounded-2xl flex flex-col p-4 items-center justify-center h-60">
              <div className="rounded-2xl flex flex-col items-center justify-center h-full w-full border-2 border-dotted">
                <div className="logo new-file-logo w-6 h-6 m-2"></div>
                <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                >
                  <p className="cursor-pointer">Drag & Drop Here Or <strong>Browse</strong></p>
                </FileUploader>
              </div>
              <button className="py-2 px-12 bg-button text-white w-fit rounded-md mt-4 hover:bg-primary transition-colors">
                Upload Manifest
              </button>
            </div>
            <div className="flex items-center justify-start">
              <div className="logo new-file-logo w-6 h-6"></div>
              <div className="flex flex-col w-full m-4">
                <div className="flex justify-between w-full">
                  <p className="text-sm text-zinc-400">
                    {fileName}
                  </p>
                  <p className="text-sm">6.7GB</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-[5px] mt-1">
                  <div
                    className="bg-yellow-400 h-[5px] rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
            </div>
            <hr className="w-full border-t border-t-zinc-200" />
            <hr className="w-1/2 border-t-2 border-t-zinc-200 mt-4" />
            <p className="mt-2 font-medium">Elapse Data Checking:</p>
            <p className="text-green-400 mb-2">No Elapsed Dates!</p>
            <hr className="w-1/2 border-t-2 border-t-zinc-200 my-1" />
            <p className="mt-2 font-medium">Tolerance Window: </p>
            <label className="relative inline-flex items-center cursor-pointer my-1">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-button"></div>
              <span className="ms-3 text-sm font-light">
                Toggle ON | Select Tolerance Level
              </span>
            </label>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="font-medium">
              Split schedule using social distancing?
            </p>

            <div className="flex w-1/4 justify-between my-2">
              <span>
                <input
                  type="radio"
                  id="yes"
                  name="yes_or_no"
                  value="YES"
                  checked
                />
                <label htmlFor="yes" className="mx-1">
                  Yes
                </label>
              </span>
              <span>
                <input type="radio" id="no" name="yes_or_no" value="NO" />
                <label htmlFor="no" className="mx-1">
                  No
                </label>
              </span>
            </div>
            <hr className="w-4/5 border-t-2 border-t-zinc-200 my-1" />
            <p className="mt-2 font-medium">Location Checking:</p>
            <p className="text-green-400 mb-2">All Available!</p>
            <hr className="w-4/5 border-t border-t-zinc-200 my-1" />
            <p className="mt-2 font-medium">Client:</p>

            <div className="flex w-2/5 justify-between my-2">
              <span>
                <input
                  type="radio"
                  id="single"
                  name="single_or_multiple"
                  value="SINGLE"
                />
                <label htmlFor="single" className="mx-1">
                  Single
                </label>
              </span>
              <span>
                <input
                  type="radio"
                  id="multiple"
                  name="single_or_multiple"
                  value="MULTIPLE"
                  checked
                />
                <label htmlFor="multiple" className="mx-1">
                  Multiple
                </label>
              </span>
            </div>

            <div className="flex flex-col items-start w-4/5 my-1">
              <div className="flex w-full justify-between items-center h-fit my-2">
                <p>Testing Center 1</p>
                <select className="border border-zinc-200 p-2 rounded-lg outline-primary m-0">
                  <option>Select Client</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="flex w-full justify-between items-center h-fit my-2">
                <p>Testing Center 2</p>
                <select className="border border-zinc-200 p-2 rounded-lg outline-primary m-0">
                  <option>Select Client</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="flex w-full justify-between items-center h-fit my-2">
                <p>Testing Center 3</p>
                <select className="border border-zinc-200 p-2 rounded-lg outline-primary m-0">
                  <option>Select Client</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="flex w-full justify-between items-center h-fit my-2">
                <p>Testing Center 4</p>
                <select className="border border-zinc-200 p-2 rounded-lg outline-primary m-0">
                  <option>Select Client</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full mb-6">
          <p className="font-semibold">
            Data in the import file is correct. Please press Continue to import.
          </p>
          <div className="flex flex-row justify-center items-center mt-4">
            <button className="py-2 px-12 bg-button text-white w-fit rounded-md hover:bg-primary transition-colors mx-2">
              Continue Import
            </button>
            <button className="py-2 px-12 bg-white border border-yellow-500 text-yellow-500 w-fit rounded-md mx-2 hover:bg-zinc-200 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
