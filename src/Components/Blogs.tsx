import Redux from "../Images/Redux.jpg";
import Asyncthunk from "../Images/Asyncthunk.jpg";
import {  useSelector } from "react-redux";
import {  type RootState } from "../Redux/Store";
import { ContactModal } from "./ContactModal";

export const Blogs = () => {

  const contactFlag=useSelector((state:RootState)=>state.flipModal.contactModal)
  return (
    <div className="flex flex-col bg-white w-full max-w-3xl mt-5 rounded-xl border border-gray-300 shadow">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight mt-8 mb-4 mx-4">
          Blogs
        </h2>
      </div>

      {/* Blog Card */}
      <a
        href="https://medium.com/@vaibhavmathur128/using-async-thunk-in-redux-to-handle-api-with-demo-mini-project-baea1da0952d"
        target="_blank"
      >
        <div className="flex flex-row w-full border-t border-gray-200 p-4 hover:shadow-md transition rounded-b-xl">
          {/* Left Side: Image */}
          <div className="w-1/2">
            <img
              src={Asyncthunk}
              alt="Blog"
              className="w-full aspect-video object-contain rounded-lg bg-gray-100"
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-1/2 pl-4 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Async Thunk in Redux
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Learn how to handle async logic cleanly in Redux using async
              thunks for API calls and side effects.
            </p>
          </div>
        </div>
      </a>
      <a
        href="https://medium.com/@vaibhavmathur128/redux-tool-kit-beginner-friendly-approach-with-live-project-80f644178b2e"
        target="_blank"
      >
        {/* Blog Card */}
        <div className="flex flex-row w-full border-t border-gray-200 p-4 hover:shadow-md transition rounded-b-xl">
          {/* Left Side: Image */}
          <div className="w-1/2">
            <img
              src={Redux}
              alt="Blog"
              className="w-full aspect-video object-contain rounded-lg bg-gray-100"
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-1/2 pl-4 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Mastering Redux
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              A deep dive into state management with Redux — from basics to
              advanced patterns.
            </p>
          </div>
        </div>
      </a>
      {contactFlag && <ContactModal/>}
    </div>
  );
};
