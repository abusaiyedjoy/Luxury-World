import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="hero min-h-screen  bg-cover bg-center"  style={{
          backgroundImage:
            "url( https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/Squadra%20Corse/Motorsport/10_05/slide_motorsport_01.jpg)",
        }}>
        <div className="card shrink-0 w-[45%] shadow-2xl bg-base-100 mt-24 mb-12  bg-cover bg-center"  style={{
          backgroundImage:
            "url( http://limme.like-themes.com/wp-content/uploads/2019/06/rent_11-1024x680.jpg)",
              
        }}>
          <h1 className="text-4xl text-center text-white mt-6 font-bold">
            Please Register!
          </h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                name="name"
                type="name"
                placeholder="Name"
                className="input text-white bg-transparent input-bordered"
                required
              />
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
                required
              />
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
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input text-white bg-transparent input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white">Register</button>
            </div>
          </form>
          <p className=" text-center mt-0 mb-3">
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
