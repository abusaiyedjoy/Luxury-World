import { useContext } from "react";
import { AuthContext } from "../FairbaseProveder/FairbaseProvider";

const useAuth = () => {
    const all =useContext(AuthContext)
    return all;
};

export default useAuth;