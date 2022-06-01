import React from "react";

import { useState, useEffect } from "react";
//import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register, reset } from "../../features/auth/authSlice";

import Spinner from "../../components/Spinner";

import './Register.scss'

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        position: "top-center",
      });
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Password don't match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="form">
        <h2>Create a new account</h2>

        <div class="row clearfix">
          <form onSubmit={onSubmit}>

            <div class="input_field" ><span><i aria-hidden="true" class="fa fa-user"></i></span>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                placeholder="Enter your name"
                required
                onChange={onChange}
              />
            </div>

            <div class="input_field" >
              <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                required
                onChange={onChange}
              />
            </div>

            <div class="input_field" >
              <span><i aria-hidden="true" class="fa fa-lock"></i></span>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                required
                onChange={onChange}
              />
            </div>

            <div class="input_field">
              <span><i aria-hidden="true" class="fa fa-lock"></i></span>
              <input
                type="password"
                className="form-control"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirm your password"
                required
                onChange={onChange}
              />
            </div>

            <button class="button" type="submit">Register</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;