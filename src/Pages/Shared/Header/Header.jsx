import logo from "../../../assets/logo.png"
import moment from 'moment';

const Header = () => {
      return (
            <div className="text-center">
                  <img className="mx-auto my-4" src={logo} alt="" />
                  <p>Journalism Without Fear or Favour</p>
                  <p className="text-xl my-4">{ moment().format("dddd, MMMM Do YYYY") }</p>
            </div>
      );
};

export default Header;