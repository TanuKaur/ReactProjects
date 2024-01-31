import React, { useEffect } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
function Random() {
  const {gif,loading,fetchData}=useGif();
  function clickHandler(){
    fetchData();
  }
  return (
    <div className="lg:w-1/2 w-[90%] bg-green-500 rounded-lg border-2 border-gray-500 flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-xl md:text-2xl underline font-bold mt-[15px]">A RANDOM GIF</h1>
      <div>
        {
          loading?(<Spinner/>):(<img src={gif} width="450"/>)
        }
      </div>
      <button onClick={clickHandler} className="w-10/12 bg-blue-100 py-2 rounded-lg text-lg mb-[20px]">Generate</button>
    </div>
  );
}
export default Random;
