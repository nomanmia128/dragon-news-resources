import logo from "../assets/logo (1).png"
import moment from "moment";

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-5">
           <div className="logo">
            <img className="w-[300px]" src={logo} alt="" />
           </div>
           <h2 className="text-gray-500">Journalism Without Fear or Favour</h2>
           <p className="font-bold">{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;