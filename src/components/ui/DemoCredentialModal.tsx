import React from "react";
import { Copy } from "lucide-react";
import { toast } from "react-toastify";

interface DemoCredentialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    toast.success(`${text} Copied to clipboard`);
  });
};

const DemoCredentialModal: React.FC<DemoCredentialModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white pt-5 pb-5 lg:px-6 px-4 rounded-lg w-[95%] md:w-[500px] relative z-[100]">
        <button
          onClick={onClose}
          className="absolute top-7 right-6 hover:text-white px-4 py-2 border rounded-md  hover:bg-green-600 text-green-500 font-bold border-green-500"
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-5 text-green-500">
          Demo Credentials
        </h2>

        {/* Admin credential */}
        <div className="mb-4">
          <h3 className="mb-1 text-xl font-bold underline  text-green-500">
            Admin:
          </h3>
          <div className="flex justify-between items-center lg:gap-3 md:gap-2 gap-1 mb-2">
            <div className="w-[22%]">
              <p className="">Email: </p>
            </div>
            <div className="w-[75%] flex justify-between bg-gray-200 pl-4 text-primary-400 p-2 overflow-hidden rounded-lg gap-2 text-wrap">
              <p className="max-w-40">rashed@gmail.com</p>
              <button
                onClick={() => copyToClipboard("rashed@gmail.com")}
                className="focus:outline-none "
              >
                <Copy className="hover:text-green-500 cursor-pointer bg-gray-200" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center lg:gap-3 md:gap-2 gap-1 mb-2">
            <div className="w-[22%]">
              <p>Password: </p>
            </div>
            <div className="w-[75%] flex justify-between bg-gray-200 pl-4 text-primary-400 p-2 rounded-lg">
              <p>admin123</p>
              <button
                onClick={() => copyToClipboard("admin123")}
                className="focus:outline-none"
              >
                <Copy className="hover:text-green-500 cursor-pointer bg-gray-200" />
              </button>
            </div>
          </div>
        </div>

        {/* Buyer credential */}
        <div>
          <h3 className="mb-1 text-xl font-bold underline  text-green-500">
            Buyer:
          </h3>
          <div className="flex justify-between items-center lg:gap-3 md:gap-2 gap-1 mb-2">
            <div className="w-[22%]">
              <p>Email: </p>
            </div>
            <div className="w-[75%] flex justify-between bg-gray-200 pl-4 text-primary-400 p-2 rounded-lg">
              <p>rita@gmail.com</p>
              <button
                onClick={() => copyToClipboard("rita@gmail.com")}
                className="focus:outline-none"
              >
                <Copy className="hover:text-green-500 cursor-pointer bg-gray-200" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center lg:gap-3 md:gap-2 gap-1 mb-2">
            <div className="w-[22%]">
              <p>Password: </p>
            </div>
            <div className="w-[75%] flex justify-between bg-gray-200 pl-4 text-primary-400 p-2 rounded-lg">
              <p>buyer123</p>
              <button
                onClick={() => copyToClipboard("buyer123")}
                className="focus:outline-none"
              >
                <Copy className="hover:text-green-500 cursor-pointer bg-gray-200" />
              </button>
            </div>
          </div>
        </div>

        {/* seller credential */}
        <div>
          <h3 className="mb-1 text-xl font-bold underline text-green-500">
            Seller:
          </h3>
          <div className="flex justify-between items-center lg:gap-3 md:gap-2 gap-1 mb-2">
            <div className="w-[22%]">
              <p>Email: </p>
            </div>
            <div className="w-[75%] flex justify-between bg-gray-200 pl-4 text-primary-400 p-2 rounded-lg">
              <p>raiyan1@gmail.com</p>
              <button
                onClick={() => copyToClipboard("raiyan1@gmail.com")}
                className="focus:outline-none"
              >
                <Copy className="hover:text-green-500 cursor-pointer bg-gray-200" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center lg:gap-3 md:gap-2 gap-1 mb-2">
            <div className="w-[22%]">
              <p>Password: </p>
            </div>
            <div className="w-[75%] flex justify-between bg-gray-200 pl-4 text-primary-400 p-2 rounded-lg">
              <p>seller123</p>
              <button
                onClick={() => copyToClipboard("seller123")}
                className="focus:outline-none"
              >
                <Copy className="hover:text-green-500 cursor-pointer bg-gray-200" />
              </button>
            </div>
          </div>
        </div>

        {/* <div className="mt-5 flex justify-end">
          <Button
            className="bg-green-500 hover:bg-green-400 px-4 py-2"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default DemoCredentialModal;
