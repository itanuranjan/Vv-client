import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { sentOtpFunction } from "../../service/Apis";
import "./Login.css";
import Spiner from "../Spiner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [spiner, setSpiner] = useState(false);
  const navigate = useNavigate();

  // sendotp
  const sendOtp = async (e) => {
    e.preventDefault();

    if (email === "") {
      toast.error("Enter Your Email !");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !");
    } else {
      setSpiner(true);
      const data = {
        email: email,
      };

      const response = await sentOtpFunction(data);

      if (response.status === 200) {
        setSpiner(false);
        navigate("/user/otp", { state: { email: email } }); // Passing email in state
      } else {
        toast.error(response.response.data.error);
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome back!</h1>
            <p>
              Please log in to continue. We're thrilled to see you again.
            </p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
              />
            </div>
            <button className="btn" onClick={sendOtp}>
              Login {spiner && <Spiner />}
            </button>
            <p>
              Don't have an account? <NavLink to="/register">Sign up</NavLink>{" "}
            </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Login;
