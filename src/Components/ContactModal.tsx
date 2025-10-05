import { modalReducer } from "../Redux/Slice";
import { type AppDispatch, type RootState } from "../Redux/Store";
import { Mail, MapPin } from "lucide-react";
import { BiLogoLinkedin, BiSolidPhone, BiLogoGithub } from "react-icons/bi";
import { SiX, SiMedium } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export const ContactModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const ContactState = useSelector((state: RootState) => state.Contacts);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Outer modal box */}
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Contact Vaibhav
          </h2>
          <button
            onClick={() =>
              dispatch(modalReducer({ field: "contactModal", value: false }))
            }
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <IoClose size={26} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-gray-800">
          <h3 className="text-lg font-semibold mb-4">Vaibhav Mathur</h3>

          <p className="text-sm font-medium text-gray-600 mb-5">
            Contact Information
          </p>

          <div className="flex flex-col gap-4 text-sm">
            {/* LinkedIn */}
            <div className="flex items-start gap-3">
              <BiLogoLinkedin className="h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-700">LinkedIn</p>
                <a
                  href={ContactState.Linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  {ContactState.Linkedin}
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-start gap-3">
              <BiLogoGithub className="h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-700">GitHub</p>
                <a
                  href={ContactState.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  {ContactState.Github}
                </a>
              </div>
            </div>

            {/* Medium */}
            <div className="flex items-start gap-3">
              <SiMedium className="h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-700">Medium</p>
                <a
                  href={ContactState.Medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  {ContactState.Medium}
                </a>
              </div>
            </div>

            {/* X (Twitter) */}
            <div className="flex items-start gap-3">
              <SiX className="h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-700">X (Twitter)</p>
                <a
                  href={`https://x.com/${ContactState.X.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  {ContactState.X}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <BiSolidPhone className="h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <a
                  href={`tel:${ContactState.ContactNumber}`}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {ContactState.ContactNumber}
                </a>
                <p className="text-xs text-gray-500">(Mobile)</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
              <p className="text-gray-700">{ContactState.Location}</p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-gray-500 mt-0.5" />
              <a
                href={`mailto:${ContactState.Email}`}
                className="text-blue-600 hover:underline break-all"
              >
                {ContactState.Email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
