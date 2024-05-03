"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { insertAccount } from "@/Data/INSERT/insertAccount";
import { useRouter } from "next/navigation";
import DarkModeBtn from "@/Components/DarkModeBtn";

const SignUpPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState<File | null | string>(null);
  const [error, setError] = useState<string>("");
  const [selectedButton, setSelectedButton] = useState<
    "seller" | "user" | null
  >(null);

  const handleClick = (buttonType: "seller" | "user") => {
    setSelectedButton((prevSelectedButton) =>
      prevSelectedButton === buttonType ? null : buttonType
    );
  };

  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setAvatar(URL.createObjectURL(file));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  const handleSignUp = () => {
    setError("");
    if (password != confirmPassword) {
      setError("The passwords are not the same");
      return;
    }
    const apn = phoneNumber.split("");
    if (apn.length != 8) {
      setError("the phone number must be exactly 8 characters");
      return;
    }
    const ap = password.split("");
    if (ap.length < 4) {
      setError("the password must be at least 4 characters");
      return;
    }
    const aun = username.split("");
    if (aun.length < 3) {
      setError("the User name must be at least 3 characters");
      return;
    }

    const formData = {
      email,
      password,
      phone_number: phoneNumber,
      user_name: username,
      user_avatar_url: avatar,
      roll: selectedButton,
    };
    console.log(formData);
    insertAccount(formData);
    localStorage.setItem("email", formData.email);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPhoneNumber("");
    setUsername("");
    setAvatar("");
    router.push("/home");
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-green-500 dark:bg-gray-800">
      <div className="w-1/3 p-8 border-x-8 border-white dark:border-gray-700 bg-white dark:bg-gray-700 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-center mb-6 text-black dark:text-white">
          Sign Up
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
          className="max-w-md flex flex-col"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold dark:text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 px-4 py-2 block w-full rounded border border-gray-300 dark:border-gray-600 focus:ring-green-500 focus:border-green-500 dark:bg-gray-600 text-black dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold dark:text-gray-200"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 px-4 py-2 block w-full rounded border border-gray-300 dark:border-gray-600 focus:ring-green-500 focus:border-green-500 dark:bg-gray-600 text-black dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-semibold dark:text-gray-200"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 px-4 py-2 block w-full rounded border border-gray-300 dark:border-gray-600 focus:ring-green-500 focus:border-green-500 dark:bg-gray-600 text-black dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 font-semibold dark:text-gray-200"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 px-4 py-2 block w-full rounded border border-gray-300 dark:border-gray-600 focus:ring-green-500 focus:border-green-500 dark:bg-gray-600 text-black dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold dark:text-gray-200"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 px-4 py-2 block w-full rounded border border-gray-300 dark:border-gray-600 focus:ring-green-500 focus:border-green-500 dark:bg-gray-600 text-black dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="avatar"
              className="block text-gray-700 font-semibold dark:text-gray-200"
            >
              Avatar
            </label>
            <div
              {...getRootProps()}
              className="mt-1 px-4 py-6 block w-full rounded border-gray-300 dark:border-gray-600 focus:ring-green-500 focus:border-green-500 cursor-pointer text-center bg-gray-100 dark:bg-gray-600"
            >
              <input {...getInputProps()} />
              {avatar ? (
                <Image
                  src={String(avatar)}
                  alt="Avatar Preview"
                  className="mx-auto rounded-full"
                  width={80}
                  height={80}
                />
              ) : (
                <p className="text-black dark:text-white">
                  Drag and drop your avatar here, or click to select files
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center divide-x-2 divide-gray-200">
            <button
              type="button"
              className={`py-2 px-4 font-bold rounded-l ${
                selectedButton === "seller"
                  ? "bg-green-700 text-white dark:bg-green-900 dark:text-gray-200"
                  : "bg-green-500 hover:bg-green-600 text-white dark:hover:bg-green-800 dark:bg-green-700 dark:text-gray-200"
              }`}
              onClick={() => handleClick("seller")}
            >
              Seller
            </button>
            <button
              type="button"
              className={`py-2 px-4 font-bold rounded-r ${
                selectedButton === "user"
                  ? "bg-green-700 text-white dark:bg-green-900 dark:text-gray-200"
                  : "bg-green-500 hover:bg-green-600 text-white dark:hover:bg-green-800 dark:bg-green-700 dark:text-gray-200"
              }`}
              onClick={() => handleClick("user")}
            >
              User
            </button>
          </div>
          <br />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded"
          >
            Sign Up
          </button>
          <p className={`text-red-500 ${error ? "mt-5" : ""} text-center`}>
            {error}
          </p>
        </form>
        <DarkModeBtn type="text" />
      </div>
    </div>
  );
};

export default SignUpPage;
