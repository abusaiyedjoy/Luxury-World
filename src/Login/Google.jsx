import useAuth from "../Hooks/useAuth";

const Google = () => {
    const {GoogleLogin, GithubLogin}=useAuth();
  return (
    <div className="form-control mt-6">
      <button onClick={()=>GoogleLogin()} className="btn text-white text-lg">Google</button>
      <button onClick={()=>GithubLogin()} className="btn text-white text-lg">Github</button>
    </div>
  );
};

export default Google;
