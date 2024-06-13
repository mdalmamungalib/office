import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaGoogle,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./PasswordInput.css"; // Assuming you add custom animation here

const PasswordInput = () => {
  const [showPassword, setShowPassword] =
    useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { confirmPassword, email, username } =
      data;
    const newData = {
      confirmPassword,
      email,
      username,
    };
    console.log(newData);
    alert("Signup successful!");
  };

  const password = watch("password");

  return (
    <div
      className="flex items-center justify-center min-h-screen "
      
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" style={{background: "linear-gradient(rgb(87, 108, 188) 0%, rgb(19, 42, 83) 100%)"}}>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Signup
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div className="mt-6 flex justify-center space-x-4">
            <button
              type="button"
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <FaGoogle className="mr-2" /> Google
            </button>
            <button
              type="button"
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaFacebook className="mr-2" />{" "}
              Facebook
            </button>
            <button
              type="button"
              className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <FaGithub className="mr-2" /> GitHub
            </button>
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Username
            </label>
            <input
              {...register("username", {
                required: "Username is required",
              })}
              className="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.username && (
              <p className="text-red-500 text-left text-xs mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message:
                    "Enter a valid email address",
                },
              })}
              className="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-left text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Password
            </label>
            <input
              type={
                showPassword ? "text" : "password"
              }
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message:
                    "Password must be at least 6 characters long",
                },
              })}
              className="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password && (
              <p className="text-red-500 text-left text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type={
                showPassword ? "text" : "password"
              }
              {...register("confirmPassword", {
                required:
                  "Confirm Password is required",
                validate: (value) =>
                  value === password ||
                  "Passwords do not match",
              })}
              className="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-left text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
            <div
              className="form-control text-left"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              <label className="label justify-stretch cursor-pointer gap-2">
                <span className="label-text">
                  Show Password
                </span>
                <input
                  type="checkbox"
                  className="checkbox"
                />
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordInput;
