// import Image from "next/image";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import LoginCard from "../logincards/logincard.jsx";
export default function Home() {
  const [activeDiv, setActiveDiv] = useState("employee");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (div) => {
    setActiveDiv((prevActiveDiv) => (prevActiveDiv === div ? null : div));
  };
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col bg-white shadow-2xl  justify-center w-96">
        <div className="flex w-full justify-center">
          <div
            className={`flex-col w-1/2 border font-semibold py-2 px-8 hover:bg-Sky-blue hover:font-bold hover:cursor-pointer ${
              activeDiv === "employee" ? "bg-light-sky-blue" : ""
            }`}
            onClick={() => handleClick("employee")}
          >
            Employee Login
          </div>
          <div
            className={`flex-col w-1/2 border font-semibold py-2 px-8 hover:bg-Sky-blue hover:font-bold hover:cursor-pointer ${
              activeDiv === "admin" ? "bg-light-sky-blue" : ""
            }`}
            onClick={() => handleClick("admin")}
          >
            Admin Login
          </div>
        </div>
        <div className="mb-4 flex justify-center">
          {/* <img
            src="/assests/images/logo.png"
            priority={true}
            alt="logo"
            height={200}
            width={200}
          ></Image> */}
        </div>
        {activeDiv === "employee" && (
          <LoginCard
            emailType="email"
            emailName="email"
            emailValue={email}
            passwordType="password"
            passwordName="password"
            passwordValue={password}
            onChange={(e) => {
              if (e.target.name === "email") setEmail(e.target.value);
              else if (e.target.name === "password")
                setPassword(e.target.value);
            }}
            // onLoginClick={(e) => {
            //   e.preventDefault();
            //   console.log("email", email);
            //   console.log("password", password);
            // }}
          />
        )}
        {activeDiv === "admin" && (
          <LoginCard
            emailType="email"
            emailName="email"
            emailValue={email}
            passwordType="password"
            passwordName="password"
            passwordValue={password}
            onChange={(e) => {
              if (e.target.name === "email") setEmail(e.target.value);
              else if (e.target.name === "password")
                setPassword(e.target.value);
            }}
            // onLoginClick={(e) => {
            //   e.preventDefault();
            //   console.log("email", email);
            //   console.log("password", password);
            // }}
          />
        )}
      </div>
    </div>
  );
}
