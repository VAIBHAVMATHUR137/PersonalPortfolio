import Redux from "../Images/Redux.jpg";
import Asyncthunk from "../Images/Asyncthunk.jpg";
import ArrayImg from "../Images/Array.png"; 
import fiber from "../Images/fiber.jpg";
import { useSelector } from "react-redux";
import { type RootState } from "../Redux/Store";
import { ContactModal } from "./ContactModal";

export const Blogs = () => {
  const contactFlag = useSelector(
    (state: RootState) => state.flipModal.contactModal,
  );
  const blogState = useSelector((state: RootState) => state.BlogData);

  // Map local images to the corresponding blog data keys
  const blogItems = [
    { data: blogState.BlogOne, img: Redux },
    { data: blogState.BlogTwo, img: Asyncthunk },
    { data: blogState.BlogThree, img: ArrayImg },
    { data: blogState.BlogFour, img: fiber },
  ];

  return (
    <div className="flex flex-col bg-white w-full max-w-3xl mt-5 rounded-xl border border-gray-300 shadow">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight mt-8 mb-4 mx-4">
          Blogs
        </h2>
      </div>

      {blogItems.map((blog, index) => (
        <a 
          key={index} 
          href={blog.data.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group"
        >
          <div className={`flex flex-row w-full border-t border-gray-200 p-4 hover:shadow-md transition ${index === blogItems.length - 1 ? 'rounded-b-xl' : ''}`}>
            {/* Left Side: Image */}
            <div className="w-1/2">
              <img
                src={blog.img}
                alt={blog.data.title}
                className="w-full aspect-video object-contain rounded-lg bg-gray-100"
              />
            </div>

            {/* Right Side: Content */}
            <div className="w-1/2 pl-4 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {blog.data.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {blog.data.description}
              </p>
            </div>
          </div>
        </a>
      ))}

      {contactFlag && <ContactModal />}
    </div>
  );
};