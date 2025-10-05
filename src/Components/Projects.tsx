import { BiLogoGithub } from "react-icons/bi";
import { BiLink } from "react-icons/bi";
export const Projects = () => {
  return (
    <div className="flex flex-col bg-white w-full max-w-3xl mt-5 rounded-xl border border-gray-300 shadow ">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight mt-8  mx-4 ">
          Projects
        </h2>
      </div>
      <div className=" border-b-2 border-gray-300 m-4">
        <div className="flex justify-between">
          <div>
            {" "}
            <h4 className="text-xl font-semibold text-gray-800 tracking-tight my-4 mb-4 mx-1 ">
              JobHunter
            </h4>
          </div>
          <div className="flex self-center ">
            <div className="mx-2 cursor-pointer">
              <a
                href="https://job-hunter-git-main-vaibhav-mathurs-projects.vercel.app/"
                target="_blank"
              >
                <BiLink size={24} />
              </a>
            </div>
            <div className="mx-2 cursor-pointer">
              <a
                href="https://github.com/VAIBHAVMATHUR137/JobHunter"
                target="_blank"
              >
                <BiLogoGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-base font-sans text-gray-800 leading-relaxed mt-2 mx-1">
          October 2024 - May 2025
        </div>
        <div className="text-base font-normal text-gray-800 leading-relaxed mt-2 mx-1 pb-2">
          The project is basically for job seekers as well as employers looking
          for skilled staff. User can register as either recruiter or job
          seeker. Recruiter can post a job, view applications for each job they
          posted. Similarly, job seeker can also apply to multiple jobs posted
          on the platform.
        </div>
      </div>
      <div className="  border-gray-300 mx-4 mt-0 mb-2 ">
        <div className="flex justify-between">
          <div>
            {" "}
            <h4 className="text-xl font-semibold text-gray-800 tracking-tight my-4 mb-4 mx-1 ">
              ShopEase
            </h4>
          </div>
          <div className="flex self-center ">
            <div className="mx-2 cursor-pointer">
              <a href="https://shopease-lime.vercel.app/" target="_blank">
                {" "}
                <BiLink size={24} />
              </a>
            </div>
            <div className="mx-2 cursor-pointer">
              <a
                href="https://github.com/VAIBHAVMATHUR137/ShopEase_FInal"
                target="_blank"
              >
                <BiLogoGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-base font-sans text-gray-800 leading-relaxed mt-2 mx-1 ">
          July 2024- September 2024
        </div>
        <div className="text-base font-normal text-gray-800 leading-relaxed mt-2 mx-1">
          An e-commerce platform built with React, Redux Toolkit for state
          management, and Firebase for backend services including user
          authentication, user/product databases. Implemented Material UI for
          responsive design and used vanilla JavaScript for custom sorting and
          filtering functionalities.
        </div>
      </div>
    </div>
  );
};
