import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Providers";



const RightSideNav = () => {
      const { googleSingIn } = useContext(AuthContext);

      const handleGoogleLogin = () => {
            googleSingIn()
                  .then(result => console.log(result))
                  .catch(error => console.error(error.message))
      }



      return (
            <div>
                  <div className="p-4 ">
                        <h2 className="text-3xl">Login with</h2>
                        <button onClick={handleGoogleLogin} className="btn btn-outline w-full my-4"><FaGoogle/> Login with Google</button>
                        <button className="btn btn-outline w-full my-4"><FaGithub/> Login with Github</button>
                  </div>      
                  <div className="p-4">
                        <h2 className="text-3xl">Find Us</h2>
                        <a className="flex gap-4 items-center border p-4 text-lg rounded-t-lg" href="">
                              <FaFacebook/> Facebook
                        </a>
                        <a className="flex gap-4 items-center border p-4 text-lg" href="">
                              <FaTwitter/> Twitter
                        </a>
                        <a className="flex gap-4 items-center border p-4 text-lg rounded-b-lg" href="">
                              <FaInstagram/> Instagram
                        </a>
                  </div>  
                  
                  <div className="p-4 ">
                        <h2 className="text-3xl">Q-Zone</h2>
                        <img src={qZone1} alt="" />
                        <img src={qZone2} alt="" />
                        <img src={qZone3} alt="" />
                        
                  </div>
            </div>
      );
};

export default RightSideNav;