import type { RootState } from "@/Redux/Store";
import { BiLogoGithub } from "react-icons/bi";
import { BiLink } from "react-icons/bi";
import { useSelector } from "react-redux";
export const Projects = () => {
  const projectState = useSelector((state: RootState) => state.ProjectData);
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
              {projectState.ProjectOne.name}
            </h4>
          </div>
          <div className="flex self-center ">
            <div className="mx-2 cursor-pointer">
              <a href={projectState.ProjectOne.link} target="_blank">
                <BiLink size={24} />
              </a>
            </div>
            <div className="mx-2 cursor-pointer">
              <a href={projectState.ProjectOne.github} target="_blank">
                <BiLogoGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-base font-sans text-gray-800 leading-relaxed mt-2 mx-1">
          {projectState.ProjectOne.date_of_commencement}-
          {projectState.ProjectOne.date_of_conclusion}
        </div>
        <div className="text-base font-normal text-gray-800 leading-relaxed mt-2 mx-1 pb-2">
          {projectState.ProjectOne.details}
        </div>
      </div>
      <div className="  border-gray-300 mx-4 mt-0 mb-2 ">
        <div className="flex justify-between">
          <div>
            {" "}
            <h4 className="text-xl font-semibold text-gray-800 tracking-tight my-4 mb-4 mx-1 ">
              {projectState.ProjectTwo.name}
            </h4>
          </div>
          <div className="flex self-center ">
            <div className="mx-2 cursor-pointer">
              <a href={projectState.ProjectTwo.link} target="_blank">
                {" "}
                <BiLink size={24} />
              </a>
            </div>
            <div className="mx-2 cursor-pointer">
              <a href={projectState.ProjectTwo.github} target="_blank">
                <BiLogoGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-base font-sans text-gray-800 leading-relaxed mt-2 mx-1 ">
          {projectState.ProjectTwo.date_of_commencement}-
          {projectState.ProjectTwo.date_of_conclusion}
        </div>
        <div className="text-base font-normal text-gray-800 leading-relaxed mt-2 mx-1">
          {projectState.ProjectTwo.details}
        </div>
      </div>
    </div>
  );
};
