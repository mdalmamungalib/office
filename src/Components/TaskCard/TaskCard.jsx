import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

function TaskCard() {
  const [isCompleted, setIsCompleted] =
    useState(true);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-start">
          <span className="text-white text-2xl font-medium">
            All Tasks
          </span>
          <div className=" h-1 w-8 rounded-full bg-green-500"></div>
        </div>
        <button className="btn rounded-full text-xl border border-[#949aa8]">
          <IoMdAdd />
        </button>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 mt-5">
        {/* card 01 */}
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">
            Update Passwords
          </h2>
          <p className="text-gray-400">
            Review online accounts and update
            passwords for better security. Use a
            password manager to keep track.
          </p>
          <div className="mt-4 ">
            <p className="text-gray-400 text-start">
              13/10/2023
            </p>
            <div className="flex justify-between gap-2 mt-2">
              <button
                className={`px-4 py-2 rounded-full ${
                  isCompleted
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`}
                onClick={handleComplete}
              >
                {isCompleted
                  ? "Completed"
                  : "Incompleted"}
              </button>
              <div className="flex gap-2 items-center">
                <FaEdit className="cursor-pointer text-gray-400 hover:text-amber-600" />
                <FaTrash className="cursor-pointer text-gray-400 hover:text-red-600" />
              </div>
            </div>
          </div>
        </div>
        {/* card 01 */}
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">
            Update Passwords
          </h2>
          <p className="text-gray-400">
            Review online accounts and update
            passwords for better security. Use a
            password manager to keep track.
          </p>
          <div className="mt-4 ">
            <p className="text-gray-400 text-start">
              13/10/2023
            </p>
            <div className="flex justify-between gap-2 mt-2">
              <button
                className={`px-4 py-2 rounded-full ${
                  isCompleted
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`}
                onClick={handleComplete}
              >
                {isCompleted
                  ? "Completed"
                  : "Incompleted"}
              </button>
              <div className="flex gap-2 items-center">
                <FaEdit className="cursor-pointer text-gray-400" />
                <FaTrash className="cursor-pointer text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        {/* card 01 */}
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">
            Update Passwords
          </h2>
          <p className="text-gray-400">
            Review online accounts and update
            passwords for better security. Use a
            password manager to keep track.
          </p>
          <div className="mt-4 ">
            <p className="text-gray-400 text-start">
              13/10/2023
            </p>
            <div className="flex justify-between gap-2 mt-2">
              <button
                className={`px-4 py-2 rounded-full ${
                  isCompleted
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`}
                onClick={handleComplete}
              >
                {isCompleted
                  ? "Completed"
                  : "Incompleted"}
              </button>
              <div className="flex gap-2 items-center">
                <FaEdit className="cursor-pointer text-gray-400" />
                <FaTrash className="cursor-pointer text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        {/* card 01 */}
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">
            Update Passwords
          </h2>
          <p className="text-gray-400">
            Review online accounts and update
            passwords for better security. Use a
            password manager to keep track.
          </p>
          <div className="mt-4 ">
            <p className="text-gray-400 text-start">
              13/10/2023
            </p>
            <div className="flex justify-between gap-2 mt-2">
              <button
                className={`px-4 py-2 rounded-full ${
                  isCompleted
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`}
                onClick={handleComplete}
              >
                {isCompleted
                  ? "Completed"
                  : "Incompleted"}
              </button>
              <div className="flex gap-2 items-center">
                <FaEdit className="cursor-pointer text-gray-400" />
                <FaTrash className="cursor-pointer text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        {/* card 01 */}
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">
            Update Passwords
          </h2>
          <p className="text-gray-400">
            Review online accounts and update
            passwords for better security. Use a
            password manager to keep track.
          </p>
          <div className="mt-4 ">
            <p className="text-gray-400 text-start">
              13/10/2023
            </p>
            <div className="flex justify-between gap-2 mt-2">
              <button
                className={`px-4 py-2 rounded-full ${
                  isCompleted
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`}
                onClick={handleComplete}
              >
                {isCompleted
                  ? "Completed"
                  : "Incompleted"}
              </button>
              <div className="flex gap-2 items-center">
                <FaEdit className="cursor-pointer text-gray-400" />
                <FaTrash className="cursor-pointer text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        {/* card 01 */}
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">
            Update Passwords
          </h2>
          <p className="text-gray-400">
            Review online accounts and update
            passwords for better security. Use a
            password manager to keep track.
          </p>
          <div className="mt-4 ">
            <p className="text-gray-400 text-start">
              13/10/2023
            </p>
            <div className="flex justify-between gap-2 mt-2">
              <button
                className={`px-4 py-2 rounded-full ${
                  isCompleted
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`}
                onClick={handleComplete}
              >
                {isCompleted
                  ? "Completed"
                  : "Incompleted"}
              </button>
              <div className="flex gap-2 items-center">
                <FaEdit className="cursor-pointer text-gray-400" />
                <FaTrash className="cursor-pointer text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        {/* card 01 */}
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">
            Update Passwords
          </h2>
          <p className="text-gray-400">
            Review online accounts and update
            passwords for better security. Use a
            password manager to keep track.
          </p>
          <div className="mt-4 ">
            <p className="text-gray-400 text-start">
              13/10/2023
            </p>
            <div className="flex justify-between gap-2 mt-2">
              <button
                className={`px-4 py-2 rounded-full ${
                  isCompleted
                    ? "bg-green-500"
                    : "bg-gray-500"
                }`}
                onClick={handleComplete}
              >
                {isCompleted
                  ? "Completed"
                  : "Incompleted"}
              </button>
              <div className="flex gap-2 items-center">
                <FaEdit className="cursor-pointer text-gray-400" />
                <FaTrash className="cursor-pointer text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 border-2 border-gray-700 rounded-md border-dotted p-4 text-center cursor-pointer hover:bg-gray-700 flex justify-center items-center ">
          <IoMdAdd className="h-6 w-6 text-white" />
          <p className="ml-2 text-white font-medium">
            Add New Task
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
