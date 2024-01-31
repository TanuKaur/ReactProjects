import React from "react";
import { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
function Tag() {
  const [tag,setTag] = useState("car");
  const {gif,loading,fetchData}=useGif(tag);
  function clickHandler(){
    fetchData(tag);
  }
  function changeHandler(event){
      setTag(event.target.value)
  }
  return (
    <div className="lg:w-1/2 w-[90%] bg-blue-500 rounded-lg border-2 border-gray-500 flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-xl md:text-2xl underline font-bold mt-[15px] uppercase">RANDOM {tag} GIF</h1>
      <div>
        {
          loading?(<Spinner/>):(<img src={gif} width="450"/>)
        }
      </div>
      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange = {changeHandler}
        value={tag}
      />
      <button onClick={clickHandler}className="w-10/12 bg-blue-100 py-2 rounded-lg text-lg mb-[20px]">Generate</button>
    </div>
  );
}
export default Tag;
