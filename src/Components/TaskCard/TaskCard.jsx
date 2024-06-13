import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function TaskCard() {
  const [isCompleted, setIsCompleted] =
    useState(true);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
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
          <span className="text-gray-400">
            13/10/2023
          </span>
          <div className="flex justify-between gap-2">
            <button
              className={`px-4 py-2 rounded-md ${
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
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">
          Update Passwords
        </h2>
        <p className="text-gray-400">
          Review online accounts and update
          passwords for better security. Use a
          password manager to keep track.
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-400">
            13/10/2023
          </span>
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 rounded-md ${
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
            <FaEdit className="cursor-pointer text-gray-400" />
            <FaTrash className="cursor-pointer text-gray-400" />
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">
          Update Passwords
        </h2>
        <p className="text-gray-400">
          Review online accounts and update
          passwords for better security. Use a
          password manager to keep track.
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-400">
            13/10/2023
          </span>
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 rounded-md ${
                isCompleted
                  ? "bg-green-500"
                  : "bg-gray-500"
              }`}
              onClick={handleComplete}
            >
              {isCompleted
                ? "Completed"
                : "Mark Complete"}
            </button>
            <FaEdit className="cursor-pointer text-gray-400" />
            <FaTrash className="cursor-pointer text-gray-400" />
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">
          Update Passwords
        </h2>
        <p className="text-gray-400">
          Review online accounts and update
          passwords for better security. Use a
          password manager to keep track.
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-400">
            13/10/2023
          </span>
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 rounded-md ${
                isCompleted
                  ? "bg-green-500"
                  : "bg-gray-500"
              }`}
              onClick={handleComplete}
            >
              {isCompleted
                ? "Completed"
                : "Mark Complete"}
            </button>
            <FaEdit className="cursor-pointer text-gray-400" />
            <FaTrash className="cursor-pointer text-gray-400" />
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">
          Update Passwords
        </h2>
        <p className="text-gray-400">
          Review online accounts and update
          passwords for better security. Use a
          password manager to keep track.
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-400">
            13/10/2023
          </span>
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 rounded-md ${
                isCompleted
                  ? "bg-green-500"
                  : "bg-gray-500"
              }`}
              onClick={handleComplete}
            >
              {isCompleted
                ? "Completed"
                : "Mark Complete"}
            </button>
            <FaEdit className="cursor-pointer text-gray-400" />
            <FaTrash className="cursor-pointer text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
