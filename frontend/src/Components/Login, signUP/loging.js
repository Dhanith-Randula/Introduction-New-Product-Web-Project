import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./loging.css";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const container = document.querySelector(".container");
    const LogingLink = document.querySelector(".SignInLink");
    const RegisterLink = document.querySelector(".SignUpLink");

    if (RegisterLink && LogingLink && container) {
      RegisterLink.addEventListener("click", () => {
        container.classList.add("active");
      });
      LogingLink.addEventListener("click", () => {
        container.classList.remove("active");
      });
    }

    
    return () => {
      if (RegisterLink && LogingLink) {
        RegisterLink.removeEventListener("click", () => {
          container.classList.add("active");
        });
        LogingLink.removeEventListener("click", () => {
          container.classList.remove("active");
        });
      }
    };
  }, []); 

  function checkData(e) {
    e.preventDefault();
    const newUser = { username, password };

    try {
        axios.post("http://localhost:8070/user/get/login", newUser).then((res) => {
            if (res.data === "exist") {
                setUser({ username}); 
                navigate("/addproduct");
                
            } else if (res.data === "notexist") {
                alert("You have not signed up");
            }
        });
    } catch (e) {
        console.log(e);
    }
  }

  // const navigate = useNavigate();
  //   const { setUser } = useContext(UserContext);

  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

    function sendData(e){
        e.preventDefault();
        const newUser = {
            username,
            password,
            
        }

        try{

            axios.post("http://localhost:8070/user/add", newUser)
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    setUser({ username }); 
                    navigate("/addproduct");
                    
                    
                }
            });
            

        }
        catch(e){
            console.log(e);

        }
        
    }

  return (
    <header>
      <div className="bodybody">
        <div className="container">
          <div className="curved-shape"></div>
          <div className="curved-shape2"></div>

          <div className="form-box Login">
            <h2 className="animation" style={{ "--D": 0, "--S": 21 }}>
              Loging
            </h2>
            <form onSubmit={checkData}>
              <div className="input-box animation" style={{ "--D": 1, "--S": 22 }}>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label>Username</label>
                <i className="fas fa-user"></i>
              </div>
              <div className="input-box animation" style={{ "--D": 2, "--S": 23 }}>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label>Password</label>
                <i className="fas fa-lock"></i>
              </div>
              <div className="input-box animation" style={{ "--D": 3, "--S": 24 }}>
                <button className="btn" type="submit">
                  Loging
                </button>
              </div>
              <div className="regi-link animation" style={{ "--D": 4, "--S": 25 }}>
                <p>
                  Don't have an account?{" "}
                  <a href="#" className="SignUpLink">
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className="info-content Loging">
            <h2 className="animation" style={{ "--D": 0, "--S": 20 }}>
              WELCOME BACK !
            </h2>
            <p className="animation" style={{ "--D": 1, "--S": 21 }}>
              To keep connected with us please login with your personal info
            </p>
          </div>

          <div className="form-box Register">
            <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>
              SignUp
            </h2>
            <form onSubmit={sendData}>
              <div className="input-box animation" style={{ "--li": 18, "--S": 1 }}>
                {/* <input type="text" name="username" required /> */}
                <input type="text"  name="usename" required
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }} />
                <label>Username</label>
                <i className="fas fa-user"></i>
              </div>
              <div className="input-box animation" style={{ "--li": 18, "--S": 2 }}>
                <input type="email" name="email" required />
                <label>Email</label>
                <i className="fas fa-email"></i>
              </div>
              <div className="input-box animation" style={{ "--li": 19, "--S": 3 }}>
                {/* <input type="password" name="password" required /> */}
                <input type="password"  name="password" required
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                <label>Password</label>
                <i className="fas fa-lock"></i>
              </div>
              <div className="input-box animation" style={{ "--li": 20, "--S": 4 }}>
                <button className="btn" type="submit">
                  Sign Up
                </button>
              </div>
              <div className="regi-link animation" style={{ "--li": 21, "--S": 5 }}>
                <p>
                  Already have an account?{" "}
                  <a href="#" className="SignInLink">
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className="info-content Register">
            <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>
              WELCOME BACK !
            </h2>
            <p className="animation" style={{ "--li": 18, "--S": 1 }}>
              To keep connected with us please login with your personal info
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
