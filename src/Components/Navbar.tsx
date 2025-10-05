import { useDispatch } from "react-redux";

import { modalReducer } from "../Redux/Slice";
import { type AppDispatch } from "../Redux/Store";
import logo from "../Images/logo.png";
import {
  BiHome,
  BiUser,
  BiBookContent,
  BiCodeAlt,
  BiMessageSquareDetail,
} from "react-icons/bi";

export const Navbar = () => {

  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div className=" lg:flex justify-between items-center bg-white shadow px-12 flex-wrap">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Vaibhav Mathur Logo"
            className="h-12 w-auto"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Menu */}
        <div className="flex gap-8 flex-wrap ">
          {/* Home */}
          <div className="flex flex-col items-center text-black/60 hover:text-black cursor-pointer mx-3">
            <BiHome className="text-2xl" />
            <span className="text-sm">Home</span>
          </div>

          {/* About */}
          <div className="flex flex-col items-center text-black/60 hover:text-black cursor-pointer mx-3">
            <BiUser className="text-2xl" />
            <span className="text-sm">About</span>
          </div>

          {/* Blogs */}
          <div className="flex flex-col items-center text-black/60 hover:text-black cursor-pointer mx-3">
            <BiBookContent className="text-2xl" />
            <span className="text-sm">Blogs</span>
          </div>

          {/* Skills */}
          <div
            className="flex flex-col items-center text-black/60 hover:text-black cursor-pointer
           mx-3"
            onClick={() => dispatch(modalReducer({field:"skillModal",value:true}))}
          >
            <BiCodeAlt className="text-2xl" />
            <span className="text-sm">Skills</span>
          </div>

          {/* Contact Me */}
          <div className="flex flex-col items-center text-black/60 hover:text-black cursor-pointer mx-3
          
          "
          onClick={()=>dispatch(modalReducer({field:"contactModal",value:true}))}>
            <BiMessageSquareDetail className="text-2xl" />
            <span className="text-sm">Contact Me</span>
          
          </div>
        </div>
      </div>
     
    </>
  );
};
