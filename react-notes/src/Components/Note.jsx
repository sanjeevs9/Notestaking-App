import { useEffect,useState } from "react";
import CreateSticky from "./CreateSticky";
import Sticky from "./Sticky";
import axios from "axios";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Note() {
    const[notes,setNotes]=useState([])
    const token=localStorage.getItem("token")
    const navigate=useNavigate()

   

    useEffect(()=>{
        axios.get("http://localhost:3000/notes/get",{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((res)=>{
            console.log(res.data)
            setNotes(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    function handle(){
        localStorage.removeItem("token")
        navigate("/")
    }
    return(
        <>
        <div className="flex justify-between w-screen p-7 pl-24 pr-24 ">
            <div className="text-lg font-bold">
                <span className="text-red-500">Note</span><span>Pad</span>
            </div>
            <div className=" justify-between w-1/2 hidden sm:flex font-semibold lg:w-1/3 cursor-pointer">
                <div className="flex" >
                    About
                </div>
                <div>
                    Contact
                </div>
                <div onClick={handle}>   
                    Sign Out
                </div>
            </div>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map((note, index) => {
        return (
          <Sticky id={note._id} content={note.content} date={note.date} />
        );
      })}
      <CreateSticky />
    </div>
        
        </>
    )
}