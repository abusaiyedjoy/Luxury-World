import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Google from "./Google";
import useAuth from './../Hooks/useAuth';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import swal from "sweetalert";

const Login = () => {
  document.title="Luxury World - Login";
  const navigate = useNavigate(); 
  const {signInUser} = useAuth();
  const [showPassword, setShowPassword] = useState(false)
  const location = useLocation();
const from = location?.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then( () => {
        swal("Success!", "You are now logged in.", "success");
        navigate(from, {replace: true});
        
      })
      .catch(error => {
        swal("Error!", error.message, "error");
      });
  }

  return (
    <div>
      <div className="hero min-h-screen bg-cover text-white " style={{
          backgroundImage:
            "url( https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/Squadra%20Corse/Motorsport/10_05/slide_motorsport_01.jpg)",
        }}>
        <div className="relative card shrink-0 w-[40%] shadow-2xl bg-cover bg-center" style={{
          backgroundImage:
            "url( https://i.ibb.co/D4djs17/09-08-selezione-slide-03.webp)",
        }}>
          
          <h1 className="text-4xl text-center mt-6 font-bold">Please Login!</h1>
          <form onSubmit={handleSubmit(onSubmit)} className=" card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input text-white bg-transparent input-bordered"
                {...register("email", { required: true })}
                required
              />
              {errors.email && <span className="text-red-500 mt-1">This field is required</span>}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="input text-white bg-transparent input-bordered"
                {...register("password", { required: true })}
                required
              />
              <span className="absolute top-12 right-2" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash className="text-white" /> : <FaEye className="text-white" />}
              </span>
              {errors.password && <span className="text-red-500 mt-1">This field is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white text-lg">Login</button>
            </div>
            <div>
              <Google></Google>
            </div>
          </form>
          <p className=" text-center mt-0 mb-3">
            Not a member yet?{" "}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
