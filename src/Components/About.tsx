import { HiArrowNarrowRight } from "react-icons/hi";
import { BiDiamond } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { type RootState, type AppDispatch } from "../Redux/Store";
import { modalReducer } from "../Redux/Slice";

import { SkillModal } from "./SkillModal";
export const About = () => {
  const dispatch = useDispatch<AppDispatch>();
  const skillFlag=useSelector((state:RootState)=>state.flipModal.skillModal);
  const skills=useSelector((state:RootState)=>state.skillState.skills)

  return (
    <>
      <div className="flex flex-col bg-white w-full max-w-3xl mt-5 rounded-xl border border-gray-300 shadow ">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 tracking-tight mt-8 mb-4 mx-4 ">
            About
          </h2>
        </div>
        <p className="text-base font-normal text-gray-800 leading-relaxed mt-2 mx-4">
          I'm a full-stack developer who doesnt just write code - I try to
          engineer workflows. My obsession is with understanding how things work
          under the hood: from database design to client-side rendering and
          everything in between. I recently built a secure, scalable job portal
          using the MERN stack and TypeScript, integrating role-based
          authentication, custom data schemas, and reusable APIs. Every detail
          was deliberate - from JWT security to custom job ID validations. When
          I m not coding, I m writing blogs on medium regarding full stack
          system workflow, as well as posting my debugging experiences on X
        </p>

        <div className="w-5/6 border-2 border-gray-300 rounded-lg self-center my-2 p-4 flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <BiDiamond aria-hidden="true" />
              <span className="font-semibold">Top Skills</span>
            </div>
            <div className="flex gap-2 text-sm text-gray-700 ml-6">
            {skills.slice(0,3).map((skill,index)=>(
              <span key={index}>
                •
                {skill}
              </span>
            ))}
            </div>
          </div>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full  cursor-pointer hover:bg-gray-200"
            aria-label="View all skills"
            onClick={() => dispatch(modalReducer({field:"skillModal",value:true}))}
          >
            <HiArrowNarrowRight />
          </button>
        </div>
        {skillFlag && <SkillModal  />}
      </div>
    </>
  );
};
