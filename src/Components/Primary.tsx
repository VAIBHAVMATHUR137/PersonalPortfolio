import { useDispatch, useSelector } from "react-redux";
import Photograph from "../Images/Photograph.jpg"
import banner from "../Images/banner.jpeg";
import { BiLocationPlus } from "react-icons/bi";
import { BiPaperPlane, BiMessageSquareDetail, BiLogoGithub } from "react-icons/bi";
import { type AppDispatch, type RootState } from "../Redux/Store"
import { modalReducer } from "../Redux/Slice";
export const Primary = () => {
  const dispatch=useDispatch<AppDispatch>()
  const userData=useSelector((state:RootState)=>state.PrimaryData);
  const ContactState = useSelector((state: RootState) => state.Contacts);
  return (
    <div className="bg-white w-full max-w-3xl mt-5 rounded-xl border border-gray-300 shadow">
      {/* Cover Image Section */}
      <div className="relative w-full">
        <div className="w-full overflow-hidden rounded-t-xl">
          <img src={banner} alt="Cover" className="w-full object-cover" />
        </div>

        {/* Profile Picture */}
        <div className="absolute left-4 sm:left-8 -bottom-10 sm:-bottom-12">
          <img
            src={Photograph}
            alt="Profile"
            className="h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </div>

{/* White Card Content */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 pt-14 sm:pt-16 pb-6">
  <div>
    {/* Name */}
    <h1 className="text-2xl sm:text-[1.75rem] font-semibold text-gray-900 leading-tight">
      {userData.name}
    </h1>

    {/* Designation */}
    <p className="text-gray-700 text-[0.9375rem] sm:text-base mt-1">
      {userData.designation}
    </p>

 
  </div>

  {/* Right-side Button or Link */}
  <div className="mt-4 sm:mt-0 flex items-center gap-2">
    <a
      href={ContactState.Github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-blue-600 font-medium border border-blue-600 rounded-full px-3 py-1 hover:bg-blue-50 transition"
    >
      <BiLogoGithub className="text-lg" />
      Github
    </a>
  </div>
</div>

      {/* div for skills */}
      <div className="mx-6 flex flex-wrap">
        TypeScript | React JS | Redux Toolkit | Tailwind CSS | ShadCN | NodeJS | ExpressJS | MongoDB | Custom Data Models | RESTful Model | MVC Architecture | JWT Auth | Redis | Caching | GitHub
      </div>
      {/* div for city */}
      <div className="text-black/60 ml-6 cursor-pointer hover:text-black">
        <BiLocationPlus />
        {ContactState.Location}
      </div>
      {/* div for buttons */}
      <div className="flex ml-6 mt-7 gap-x-2 flex-wrap  ">
        <div>
          <button className="bg-[#0a66c2] text-white rounded-full p-2 font-semibold text-base tracking-wide flex items-center gap-2 hover:bg-[#004182] transition-colors cursor-pointer "
          onClick={()=>dispatch(modalReducer({field:"contactModal",value:true}))}>
            <BiPaperPlane />
            <span>Contact Me</span>
          </button>
        </div>
         <a href={ContactState.Resume} target="_blank">
        <div>
          <button className="bg-white text-[#0a66c2] rounded-full p-2 border-2 border-[#0a66c2] font-semibold text-base tracking-wide flex items-center gap-2 hover:border-[#004182] 
          transition-colors hover:text-[#004182] cursor-pointer mb-2">
           
            <BiMessageSquareDetail />
            <span>Look Resume</span>
          </button>
        </div>
        </a>
      </div>
    </div>
  );
};
