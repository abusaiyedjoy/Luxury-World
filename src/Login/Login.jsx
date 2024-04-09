import { Link } from "react-router-dom";

const Login = () => {
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
          <form className=" card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input text-white bg-transparent input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input bg-transparent text-white input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt text-white link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white text-lg">Login</button>
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
