"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPen, FaTimes, FaUpload, FaRegFileImage } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccountModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isEditingPfp, setIsEditingPfp] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-[#101114] text-white w-[400px] border-gray-500 border md:w-[500px] rounded-lg shadow-lg px-4 py-2 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-4 text-gray-400 hover:text-white"
              onClick={onClose}
            >
              <IoIosCloseCircleOutline size={23} />
            </button>

            {/* Swap Between Account & Profile Picture Update */}
            {!isEditingPfp ? (
              /* Account Details */
              <div>
                <h2 className="text-lg font-semibold mb-4 border-b border-gray-500 pb-5">Account Details</h2>
         <div className=" flex gap-2 items-center">
         <div className="relative w-16 h-16 bg-green-500 rounded-full mx-auto mb-4">
                  <FaPen
                    className="absolute bottom-0 right-0 bg-black p-1 rounded-full cursor-pointer"
                    size={16}
                    onClick={() => setIsEditingPfp(true)}
                  />
                </div>
        <div>
        <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-gray-800 text-white px-3 py-2 rounded-md mb-3"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full bg-gray-800 text-white px-3 py-2 rounded-md mb-3"
                />
        </div>

         </div>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full bg-gray-800 text-white px-3 py-2 rounded-md mb-3"
                />
                <input
                  type="text"
                  value="N34GJSH9ZXC2VPKFRWJ6T"
                  readOnly
                  className="w-full bg-gray-800 text-white px-3 py-2 rounded-md mb-3"
                />
                <p className="text-sm text-blue-400 text-center">
                  Auto save, just close it and you’re done!
                </p>
              </div>
            ) : (
              /* Profile Picture Update */
              <div>
                <h2 className="text-lg font-semibold mb-4">Upload Profile Picture</h2>
                <div className="border-2 border-dashed border-gray-600 rounded-md p-6 text-center">
                  <FaUpload size={30} className="text-gray-400 mx-auto mb-2" />
                  <p className="text-sm">Drop Your Files Here or <span className="text-blue-400 cursor-pointer">Browse</span></p>
                  <p className="text-xs text-gray-400">Max file size: 2 MB</p>
                </div>

                {/* Uploaded File Preview */}
                <div className="mt-4 flex items-center justify-between bg-gray-700 p-2 rounded-md">
                  <FaRegFileImage className="text-white" />
                  <span className="text-sm">example.jpg (0.1 MB)</span>
                  <FaTimes className="text-red-400 cursor-pointer" />
                </div>

                {/* Buttons */}
                <div className="mt-4 flex justify-between">
                  <button
                    className="text-gray-400 hover:text-white"
                    onClick={() => setIsEditingPfp(false)}
                  >
                    Cancel
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-white">
                    Save
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccountModal;