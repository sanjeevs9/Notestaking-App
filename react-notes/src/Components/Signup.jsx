import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Quote from "./Quote";
import axios from "axios";

export default function Signup() {
    const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


async function request(){
    console.log(value)
    if (isChecked) {
        await axios.post("https://notestaking-app.onrender.com/user/signup", value)
        .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
           alert("User created successfully");
           navigate("/dashboard");
            }
        ).catch((err) => {  
            console.log(err);
            alert(err.response.data.message);
        });
      } else {
        alert("Please agree to the terms and conditions");
      }
}
    return(
        <>
        <div className="grid md:grid-cols-2">
          <div>
            <div className="h-screen  flex flex-col justify-center gap-6 items-center">
              <div className="flex gap-2 flex-col  items-center ">
                <div className="font-extrabold text-4xl">Create an account</div>
                <div className=" text-center text-gray-500">
                  Already have an acount
                  <span className="pl-2">
                    <Link to={"/signin"} className="underline">
                      Login
                    </Link>
                  </span>
                </div>
              </div>
              <div className="justify-center  w-2/3 flex-col gap-3">
                <Inputs
                  placeholder="Enter your username"
                  onchange={(e) => {
                    setValue((c) => ({
                      ...c,
                      name: e.target.value,
                    }));
                  }}
                  label="Username"
                ></Inputs>
  
                <Inputs
                  placeholder="sanjeev@example.com"
                  onchange={(e) => {
                    setValue((c) => ({
                      ...c,
                      email: e.target.value,
                    }));
                  }}
                  label="Email"
                ></Inputs>
                <Inputs
                  placeholder="*******"
                  onchange={(e) => {
                    setValue((c) => ({
                      ...c,
                      password: e.target.value,
                    }));
                  }}
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  handleTogglePassword={handleTogglePassword}
                  showPassword={showPassword}
                ></Inputs>
              </div>
  
              <div className="flex items-center">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  onChange={handleCheckboxChange}
                />
                <label className="ms-2 text-sm font-medium text-gray-900 ">
                  I agree with the{" "}
                  <a href="#" className="text-blue-600  hover:underline">
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
              <div className="flex w-2/3 items-center">
                <button
                  onClick={request}
                  type="button"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
  
          <div className="hidden md:block">
            <Quote/>
          </div>
        </div>
      </>
    );
  }
  
  function Inputs({
    placeholder,
    onchange,
    type,
    label,
    handleTogglePassword,
    showPassword,
  }) {
    return (
      <div>
        <label className="block mb-2 text-sm  pt-4 font-bold">{label}</label>
        <div className="relative">
          <input
            onChange={onchange}
            type={type || "text"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder={placeholder}
            required
          />
  
          {label === "Password" && (
            <button
              type="button"
              onClick={handleTogglePassword}
              class="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                class="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {showPassword ? (
                  <>
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                    <line x1="2" x2="22" y1="2" y2="22" />
                  </>
                ) : (
                  <>
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </>
                )}
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }