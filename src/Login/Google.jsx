import useAuth from "../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Google = () => {
    const { GoogleLogin, GithubLogin } = useAuth();
    const navigate = useNavigate();

    const form = "/"; 

    const handleSocialProvider = async (socialProvider) => {
        try {
            const result = await socialProvider();
            if (result.user) {
                navigate(form);
            }
        } catch (error) {
            console.error("Error occurred during social login:", error);
        }
    };

    return (
        <div>
            <h1 className="font-semibold my-3 text-center">----------Login with social media---------</h1>
            <div className="mt-6 flex justify-center items-center gap-8">
                <button onClick={() => handleSocialProvider(GoogleLogin)} className="btn">
                    <FcGoogle className="text-2xl" />
                </button>
                <button onClick={() => handleSocialProvider(GithubLogin)} className="btn">
                    <FaGithub className="text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default Google;
