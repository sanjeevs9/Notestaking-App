import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sticky({ content, id,date }) {
    const [color, setColor] = useState("");

    useEffect(() => {
      const colors = ["bg-red-300", "bg-blue-300", "bg-green-300", "bg-yellow-300", "bg-indigo-300", "bg-pink-300"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }, []);

    async function handle(id){
        console.log(id)
        await axios.delete("http://localhost:3000/notes/delete",{
            headers:{   
                Authorization:`Bearer ${localStorage.getItem("token")}`
            },
            params:{
                id:id
            }
        }).then((res)=>{
            console.log(res.data)
          
            window.location.reload()
        }
        ).catch((err)=>{
            console.log(err)
        })
    }

    const format = (createdAt) => {
      const createdAtDate = new Date(createdAt);
      const formattedDate = createdAtDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "UTC",
      });
  
      return formattedDate;
    };
    
  return (
    <div className="flex justify-center">
       <div className={`w-2/3 h-96 ${color} rounded-lg p-4 flex flex-col relative  `}>
        <div className="font-bold text-xl overflow-auto flex-grow" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {content.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
          {/* <div style={{ width: '20px', height: '100%', position: 'absolute', right: 0, overflow: 'auto' }}>
        <div style={{ height: '2000px' }}></div>
      </div> */}
        </div>
        <div>{format(date)}</div>
        <div
          className="absolute bottom-0 right-0 mb-4 mr-4 cursor-pointer mt-auto self-end"
          
          onClick={() => {handle(id)}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0,0,256,256"
          >
            <g
              fill="#fa5252"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            ></g>
            <g
              fill="#fa5252"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <g transform="scale(2,2)">
                <path d="M49,1c-1.66,0 -3,1.34 -3,3c0,1.66 1.34,3 3,3h30c1.66,0 3,-1.34 3,-3c0,-1.66 -1.34,-3 -3,-3zM24,15c-7.17,0 -13,5.83 -13,13c0,7.17 5.83,13 13,13h77v63c0,9.37 -7.63,17 -17,17h-40c-9.37,0 -17,-7.63 -17,-17v-52c0,-1.66 -1.34,-3 -3,-3c-1.66,0 -3,1.34 -3,3v52c0,12.68 10.32,23 23,23h40c12.68,0 23,-10.32 23,-23v-63.35937c5.72,-1.36 10,-6.50062 10,-12.64062c0,-7.17 -5.83,-13 -13,-13zM24,21h80c3.86,0 7,3.14 7,7c0,3.86 -3.14,7 -7,7h-80c-3.86,0 -7,-3.14 -7,-7c0,-3.86 3.14,-7 7,-7zM50,55c-1.66,0 -3,1.34 -3,3v46c0,1.66 1.34,3 3,3c1.66,0 3,-1.34 3,-3v-46c0,-1.66 -1.34,-3 -3,-3zM78,55c-1.66,0 -3,1.34 -3,3v46c0,1.66 1.34,3 3,3c1.66,0 3,-1.34 3,-3v-46c0,-1.66 -1.34,-3 -3,-3z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
