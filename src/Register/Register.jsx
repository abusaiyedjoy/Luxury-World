import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import  swal  from 'sweetalert';

const Register = () => {
  document.title="Luxury World - Register";
  const {createUser, updateUserProfile}=useAuth()
  const [registerError, setRegisterError]=useState('');
  const [success, setSuccess]=useState('');
  const [showPassword, setShowPassword]= useState(false)
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const onSubmit = (data) => {
    
    const { email, password, name, image } = data;
    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/)){
      setRegisterError('Password must be at least 6 characters long and include both uppercase and lowercase letters.');
      return
    } else {
      setRegisterError("");
    }
    
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, image)
        swal("Success!", "User created successfully.", "success");
        setSuccess('User Created successfully')
      })
      .catch(error => {
        console.error(error);
        setRegisterError(error.message)
        swal("Error!", error.message, "error");
      });
  };

  return (
    <div>
      <div className="hero min-h-screen  bg-cover bg-center"  style={{
          backgroundImage:
            "url( https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/Squadra%20Corse/Motorsport/10_05/slide_motorsport_01.jpg)",
        }}>
        <div className="card shrink-0 w-[45%] shadow-2xl bg-base-100 mt-24 mb-12  bg-cover bg-center"  style={{
          backgroundImage:
            "url( https://i.ibb.co/D4djs17/09-08-selezione-slide-03.webp)",
        }}>
          <h1 className="text-4xl text-center text-white mt-6 font-bold">
            Please Register!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                name="name"
                type="name"
                placeholder="Name"
                className="input text-white bg-transparent input-bordered"
                {...register("name", { required: true })}
                required
              />
              {errors.name && <span className="text-red-500 mt-1">This field is required</span>}
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Image Url</span>
              </label>
              <input
                name=" image"
                type="text"
                placeholder="image url"
                className="input text-white bg-transparent input-bordered"
                {...register("image")}
                
              />
              {errors.image && <span className="text-red-500 mt-1">This field is required</span>}
            </div>
            <div className="form-control  relative">
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
              <button className="btn text-white">Register</button>
            </div>
            {
              registerError && <p className="text-red-500 font-semibold">{registerError}</p>
            }
            {
              success && <p className="text-green-500 font-semibold">{success}</p>
            }
          </form>
          <p className=" text-center mt-2 mb-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
