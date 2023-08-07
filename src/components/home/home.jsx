import { useState } from "react";
import LoginCard from "../logincards/logincard.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const [activeDiv, setActiveDiv] = useState("employee");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = (div) => {
    setActiveDiv((prevActiveDiv) => (prevActiveDiv === div ? null : div));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);
  };

  const handleLoginAdmin = async (e) => {
    e.preventDefault();
    console.log("{ email, password }", email, password);
    try {
      const response = await fetch(
        "https://earbor-server.vercel.app/api/admin-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        alert("Admin login successful");
        navigate("/admin");
      } else {
        console.log("reess", response.status);
        console.error("Admin login failed", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
          <img
            src="/assests/images/logo.png"
            height={200}
            width={200}
            alt="earbor_logo"
          ></img>
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
            onLoginClick={handleLoginSubmit}
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
            onLoginClick={handleLoginAdmin}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
