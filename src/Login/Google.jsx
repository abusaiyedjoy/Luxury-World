import useAuth from "../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';


const Google = () => {
    const {GoogleLogin, GithubLogin}=useAuth();
    const navigate =useNavigate()
    const location =useLocation();
    const form = location?.state || "/";
    const handleSocialProvider = socialProvider => {
      socialProvider()
          .then(result => {
              if (result.user) {
                  navigate(form);
              }
          })
    }
  return (
      <div>
        <h1 className="font-semibold my-3 text-center  ">----------Login with social media---------</h1>
    <div className="mt-6 flex justify-center items-center gap-8">
      <button onClick={()=>handleSocialProvider(GoogleLogin)} className="btn"><FcGoogle className="text-2xl" /></button>
      <button onClick={()=>handleSocialProvider(GithubLogin)} className="btn"><FaGithub className="text-2xl" /></button>
    </div>
      </div>
  );
};

export default Google;
