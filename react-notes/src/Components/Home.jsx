import Header from "./Header"
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate =useNavigate();  
    return (
        <>
       <div className="flex flex-col h-screen">

      
        <Header />
        <div className="flex flex-row justify-between pl-24 pr-20   items-center  flex-1">
            <div className=" ">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold ">
                    Forget about your<br/>
                    messy Notes
                </div>
                <div className="text-lg pt-2">
                    NotePad is a modern note taking app<br/> 
                    that helps you stay organized and<br/>
                     manage your notes
                </div>
                <div>
                    <button className="bg-red-500 text-white p-2 rounded-md mt-4 pl-4 pr-4"
                    onClick={()=>{navigate("/signup")}}>Try Now</button>
                </div>
            </div>
            <div className=" h-96 w-96  md:h-2/3 md:w-1/2 hidden sm:flex">
            <img style={{ height: '100%', width: '100%' }}  src = "https://opendoodles.s3-us-west-1.amazonaws.com/clumsy.svg" alt="My Happy SVG"/>
            </div>
        </div>
        </div>
        </>
    )
}