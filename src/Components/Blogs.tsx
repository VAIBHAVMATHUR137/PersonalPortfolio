import Redux from "../Images/Redux.jpg";
import Asyncthunk from "../Images/Asyncthunk.jpg";
import Array from "../Images/Array.png"
import {  useSelector } from "react-redux";
import {  type RootState } from "../Redux/Store";
import { ContactModal } from "./ContactModal";

export const Blogs = () => {

  const contactFlag=useSelector((state:RootState)=>state.flipModal.contactModal)
  const blogState=useSelector((state:RootState)=>state.BlogData)
  return (
    <div className="flex flex-col bg-white w-full max-w-3xl mt-5 rounded-xl border border-gray-300 shadow">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight mt-8 mb-4 mx-4">
          Blogs
        </h2>
      </div>

      {/* Blog Card */}
      <a
        href={blogState.BlogTwo.link}
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
              {blogState.BlogTwo.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              {blogState.BlogTwo.description}
            </p>
          </div>
        </div>
      </a>
      <a
        href={blogState.BlogOne.link}
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
              {blogState.BlogOne.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              {blogState.BlogOne.description}
            </p>
          </div>
        </div>
        {/* Blog Card */}
              <a
        href={blogState.BlogTwo.link}
        target="_blank"
      >
        <div className="flex flex-row w-full border-t border-gray-200 p-4 hover:shadow-md transition rounded-b-xl">
          {/* Left Side: Image */}
          <div className="w-1/2">
            <img
              src={Array}
              alt="Blog"
              className="w-full aspect-video object-contain rounded-lg bg-gray-100"
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-1/2 pl-4 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-900">
              {blogState.BlogThree.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              {blogState.BlogThree.description}
            </p>
          </div>
        </div>
      </a>
      <a
        href={blogState.BlogOne.link}
        target="_blank"
      ></a>
      </a>
      {contactFlag && <ContactModal/>}
    </div>
  );
};
