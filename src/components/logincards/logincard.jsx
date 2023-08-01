"use client";
import React from "react";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
const LoginCard = (props) => {
  return (
    <div className="w-full">
      <form>
        <div className="mb-4 mx-8">
          <div className="flex items-center border-2 border-black rounded-full py-2 px-4 mb-4">
            <AiOutlineUser className="text-black mr-2" size={26} />
            <input
              className="bg-transparent outline-none font-bold placeholder-black"
              type={props.emailType}
              name={props.emailName}
              placeholder="Enter Email Address"
              value={props.emailValue}
              onChange={props.onChange}
            />
          </div>
        </div>
        <div className="mb-4 mx-8">
          <div className="flex items-center border-2 border-black rounded-full py-2 px-4 mb-4">
            <AiOutlineLock className="text-black mr-2" size={26} />
            <input
              className="bg-transparent outline-none font-bold placeholder-black"
              type={props.passwordType}
              name={props.passwordName}
              placeholder="Enter Password"
              value={props.passwordValue}
              onChange={props.onChange}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type=""
            className="bg-pale-turquoise text-black text-md font-bold py-2 px-8 rounded"
            onClick={props.onLoginClick}
          >
            Login
          </button>
        </div>
        <div className="flex justify-end mt-2">
          <a href="#" className="text-xs font-bold mt-2 mb-4 mr-2">
            FORGOT PASSWORD?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
