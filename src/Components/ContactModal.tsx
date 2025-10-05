import { modalReducer } from "../Redux/Slice";
import { type AppDispatch } from "../Redux/Store";
import { Mail, MapPin, Calendar } from "lucide-react";
import { BiLogoLinkedin, BiSolidPhone } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";

export const ContactModal = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Outer modal box */}
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Contact Vaibhav</h2>
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

          <p className="text-sm font-medium text-gray-600 mb-5">Contact Information</p>

          <div className="flex flex-col gap-4 text-sm">
            {/* LinkedIn */}
            <div className="flex items-start gap-3">
              <BiLogoLinkedin className="h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-700">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/vaibhav-mathur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  linkedin.com/in/vaibhav-mathur
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <BiSolidPhone className="h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <p className="text-gray-700">+91 98765 43210</p>
                <span className="text-xs text-gray-500">(Mobile)</span>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
              <p className="text-gray-700">Jaipur, Rajasthan, India</p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-gray-500 mt-0.5" />
              <a
                href="mailto:vaibhav.mathur@example.com"
                className="text-blue-600 hover:underline break-all"
              >
                vaibhav.mathur@example.com
              </a>
            </div>

            {/* Connected */}
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
              <p className="text-gray-700 text-sm">Connected on Oct 5, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
