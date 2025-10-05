import { IoClose } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { type RootState, type AppDispatch } from "../Redux/Store";
import { modalReducer } from "../Redux/Slice";

export const SkillModal = () => {
  const skills = useSelector((state: RootState) => state.skillState.skills);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-xl max-h-[90vh] flex flex-col shadow-xl">
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-6 border-b flex-shrink-0 mx-4">
          <h2 className="text-xl font-semibold">Top skills</h2>
          <button
           onClick={()=>dispatch(modalReducer({field:"skillModal",value:false}))}
            className="text-gray-500 hover:text-gray-700"
          >
            <IoClose size={28} />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto flex-1">
          {skills.map((individualSkill, index) => (
            <div key={index} className="p-6 border-b border-b-gray-300 hover:bg-gray-50 mx-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{individualSkill}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};