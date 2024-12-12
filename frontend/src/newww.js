import React, { useState, useContext } from "react"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext"; 
import "./Login/styleee.css";



export default function Login(){

    const container = document.querySelector('.container');
    const LogingLink = document.querySelector('.SignInLink');
    const RegisterLink = document.querySelector('.SignUpLink');
    RegisterLink.addEventListener('click', () => {
        container.classList.add('active');
    });
    LogingLink.addEventListener('click', () => {
        container.classList.remove('active');
    });


    // const navigate = useNavigate();
    // const { setUser } = useContext(UserContext);

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
   

    
    function checkData(e) {
        e.preventDefault();
        const newUser = {
            username,
            password,
           
        };

        
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

    return(
      <header >
        {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <form style={{ width: '330px',height:"370px", margin: '20px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',background:"#F5F5F5" }} onSubmit={checkData}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter Username"
                    onChange={(e) => {
                    setUsername(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                    Password
                    </label>
                    <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    onChange={(e) => {
                    setPassword(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-3">
                    <Link style={{color:"black"}} to="/signup">Don't have an account? Sign up here.</Link>
                </div>
                <button type="submit" className="btn btn-primary" style={{ borderColor: 'white',background: 'black' ,justifySelf:"center"}}>
                    Login
                </button>
            </form>
        </div> */}
<div class="bodybody">
        <div class="container">
            <div class="curved-shape"></div>
            <div class="curved-shape2"></div>

            <div class="form-box Login">
                <h2 class="animation" style={{ "--D": 0, "--S": 21 }}>Loging</h2>
                <form action="#">



                    <div class="input-box animation" style={{ "--D": 1, "--S": 22 }}>
                        {/* <input type="text" name="username" required/> */}
                        <input
                    type="text"
                    className="form-control"
                    id="username"
                    onChange={(e) => {
                    setUsername(e.target.value);
                    }}
                    />
                        <label>Username</label>
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="input-box animation" style={{ "--D": 2, "--S": 23 }}>
                        <input type="password" name="password" required/>
                        <label>Password</label>
                        <i class="fas fa-lock"></i>
                    </div>
                    <div class="input-box animation" style={{ "--D": 3, "--S": 24 }}>
                        <button class="btn" type="submit">
                            Loging
                        </button>
                    </div>
                    <div class="regi-link animation" style={{ "--D": 4, "--S": 25 }}>
                        <p>Don't have an account? <a href="#" class="SignUpLink">Sign up</a></p>
                    </div>
                </form>
                    
            </div>
            <div class="info-content Loging">
                <h2 class="animation" style={{ "--D": 0, "--S": 20 }}>WELCOME BACK !</h2>
                <p class="animation" style={{ "--D": 1, "--S": 21 }}> 
                    To keep connected with us please login with your personal info</p>
            </div>
            <div class="form-box Register">
                <h2 class="animation" style={{ "--li": 17, "--S": 0 }}>SignUp</h2>
                <form action="#" method="POST">
                    <div class="input-box animation"  style={{ "--li": 18, "--S": 1 }}>
                        <input type="text" name="username" required/>
                        <label>Username</label>
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="input-box animation"  style={{ "--li": 18, "--S": 2 }}>
                        <input type="email" name="username" required/> 
                        <label>Email</label>

                        <i class="fas fa-email"></i>
                    </div>
                    <div class="input-box animation" style={{ "--li": 19, "--S": 3 }}>
                        <input type="password" name="password" required/> 
                        <label>Password</label>
                        <i class="fas fa-lock"></i>
                    </div>
                    <div class="input-box animation" style={{ "--li": 20, "--S": 4 }}>
                        <button class="btn" type="submit">
                            Sign Up
                        </button>
                    </div>
                    <div class="regi-link animation" style={{ "--li": 21, "--S": 5 }}>
                        <p>Don't have an account? <a href="#" id="signup" class="SignInLink">Sign In</a></p>
                    </div>
                </form>
                    
            </div>
            <div class="info-content Register">
                <h2 class="animation" style={{ "--li": 17, "--S": 0 }}>WELCOME BACK !</h2>
                <p class="animation" style={{ "--li": 18, "--S": 1 }}> 
                    To keep connected with us please login with your personal info</p>
            </div> 

        </div>
    </div>
</header>



    )
}