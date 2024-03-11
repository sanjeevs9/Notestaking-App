import axios from "axios";
import React, { useState } from "react";

export default function CreateSticky() {
  const[content,setContent]=useState("")

 async function handle(){

    await axios.post("http://localhost:3000/notes/create",{
      content:content
    },{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    }).then((res)=>{
      console.log(res.data)
      alert("published")
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <>
      <div className="flex justify-center">
  <div className="w-2/3 h-96 bg-yellow-300 rounded-lg p-4 flex flex-col relative">
    <div className="font-bold text-xl">Create Your Sticky Note</div>
    <div className="flex-1 pt-2">
      <textarea className="w-full h-full resize-none border-none focus:outline-none bg-yellow-300"
      onChange={(e)=>{setContent(e.target.value)}}></textarea>
    </div>
    <div className="absolute bottom-0 right-0 mb-4 mr-9 bg-red-500 text-white p-1 rounded-lg"
    onClick={handle}>
      <button>
        Save
      </button>
    </div>
  </div>
</div>
    </>
  );
}
