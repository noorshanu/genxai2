import { FaEnvelope, FaXTwitter, FaPaperPlane } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4  flex flex-col md:flex-row items-center justify-between border-t border-gray-700">
      <div className="flex space-x-6 text-sm md:text-base px-6">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Terms and Uses
        </a>
      </div>

      <div className="flex space-x-4 mt-4 md:mt-0">
        <a
          href="#"
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
        >
          <FaEnvelope className="text-white text-lg" />
        </a>
        <a
          href="#"
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
        >
          <FaXTwitter className="text-white text-lg" />
        </a>
        <a
          href="#"
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
        >
          <FaPaperPlane className="text-white text-lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;