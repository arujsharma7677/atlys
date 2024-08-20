'use client'
import { useStorage } from "@/utils/storage.utils";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useState } from "react";

function Signupcomponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("")
  const [info,setInfo]=useState("")
  const storage = useStorage();
  const getSignupList:any = storage.getItem("signup-list") || []
  
  const router = useRouter();

  const handleRedirect = () => {
     router.push("/login");
  }

  function handleSubmit() {
    // Check if the email already exists
    const users = getSignupList as any[];
  
    const userExists = users?.some((user: any) => user.email === email);

    if (userExists) {
      setInfo("User with this email already exists!");
    } else {
      // Add the new user to the users array
      users?.push({ username, email, password });
      storage.setItem("signup-list", users);
      setInfo(`User ${email} added successfully!`);
     handleRedirect()
    }
  }

  return (
    <div className="flex flex-col rounded-none max-w-1/3] h-1.2">
      <div className="flex flex-col items-start px-6 pt-4 pb-10 w-full rounded-lg bg-zinc-800">
        <div className="flex gap-10 items-start self-end w-full text-center max-w-[347px]">
          <div className="flex flex-col grow shrink-0 self-end mt-6 basis-0 w-fit">
            <div className="self-center text-sm font-medium tracking-wide text-neutral-500">
              SIGN UP
            </div>
            <div className="mt-2 text-lg font-semibold text-white">
              Create an account to continue
            </div>
          </div>
          <img
            loading="lazy"
            // src="https://cdn.builder.io/api/v1/image/assets/TEMP/c05134ded43b5da7e74873a371358324cb163476e5808166fac485e7002ccf1e?placeholderIfAbsent=true&apiKey=3f2d5fd4f40d4b659e6ac75c77432d4d"
            className="object-contain shrink-0 self-start w-8 "
          />
        </div>
        <div className="mt-2 text-sm font-medium text-stone-300">Email</div>
        <div className="px-3.5 py-3.5 mt-2.5 max-w-full text-base rounded border-2 border-solid border-neutral-700 text-zinc-500 w-[418px]">
          <input
            type="text"
            placeholder="Enter your mail  "
            className="bg-transparent w-full"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="mt-3.5 text-sm font-medium text-stone-300">
          Username
        </div>
        <div className="px-3.5 py-3.5 mt-2.5 max-w-full text-base rounded border-2 border-solid border-neutral-700 text-zinc-500 w-[418px]">
          <input
            type="text"
            placeholder="Enter your username ... "
            className="bg-transparent w-full"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
        </div>
        <div className="mt-3.5 text-sm font-medium text-stone-300">
          Password
        </div>
        <div className="px-3.5 py-3.5 mt-2.5 flex justify-between max-w-full text-base rounded border-2 border-solid border-neutral-700 text-zinc-500 w-[418px]">
          <input
            type="password"
            placeholder="Enter your password ... "
            className="bg-transparent w-full"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f102200e34e176e6648955a98eadd9bb2212aa6dc2482780d15ce3bbf17ec958?placeholderIfAbsent=true&apiKey=3f2d5fd4f40d4b659e6ac75c77432d4d"
            className="object-contain shrink-0 w-5 aspect-square"
          />
        </div>
        <span className="text-yellow-200 mt-2">{info }</span>
        <div
          onClick={() => {
            handleSubmit();
          }}
          className="px-16 py-3 mt-5 text-base font-medium text-white whitespace-nowrap bg-blue-500 rounded w-full flex justify-center items-center"
        >
          Continue
        </div>
        <div className="mt-3 text-sm text-zinc-500">
          <span className="font-medium">Already have an account? </span>
          <span
            onClick={() => {
              handleRedirect()
            }}
            className="font-medium text-stone-300"
          >
            Login →
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signupcomponent;