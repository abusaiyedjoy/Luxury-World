
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Google from "./Google";
import useAuth from './../Hooks/useAuth';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import swal from "sweetalert";

const Login = () => {

  const {signInUser}=useAuth();
  const [registerError, setRegisterError]=useState('');
  const [success, setSuccess]=useState('');
  const [showPassword, setShowPassword]= useState(false)



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    swal("Your query has been Submitted!", "You are now loged in", "success");


    setRegisterError('')
    setSuccess('')

    signInUser(email, password)
      .then(result => {
        console.log(result);
        setSuccess('User Created successfully')
      })
      .catch(error => {
        console.error(error);
        setRegisterError(error.message)
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
            "url( http://limme.like-themes.com/wp-content/uploads/2019/06/rent_11-1024x680.jpg)",
              
        }}>
          
          <h1 className="text-4xl text-center mt-6 font-bold">Please Login!</h1>
          <form onSubmit={handleSubmit(onSubmit)} className=" card-body ">
          <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                name=" email"
                type="email"
                placeholder="email"
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
                type={showPassword?'text': "password"}
                placeholder="password"
                className="input text-white bg-transparent input-bordered"
                {...register("password", { required: true })}
                required
              />
              <span className="absolute top-12 right-2" onClick={()=> setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash className="text-white"></FaEyeSlash> : <FaEye className="text-white"></FaEye>}</span>
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
            {
              registerError && <p className="text-red-500 font-semibold">{registerError}</p>
            }
            {
              success && <p className="text-green-500 font-semibold">{success}</p>
            }
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
