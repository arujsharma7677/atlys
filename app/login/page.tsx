'use client'
import { useStorage } from "@/utils/storage.utils";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [info, setInfo] = useState("");
  const router = useRouter();
  const storage = useStorage();
  const users:any[] = storage.getItem("signup-list")

  function verifyUser() {
    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
      setInfo(`Welcome, ${user.username}!`);
      handleRedirect();
    } else {
      setInfo("Invalid email or password!");
    }
  }
  
  const handleRedirect = () => {
    if (email && password) {
      router.push('/home')
    }
  }
  return (
    <div className="flex bg-gray-900 justify-center items-center h-screen w-screen">
      <div className="flex flex-col font-medium rounded-none w-1/3 shadow-xl">
        <div className="flex flex-col items-center py-10 w-full rounded-lg bg-zinc-800">
          <div className="text-sm tracking-wide text-neutral-500">
            WELCOME BACK
          </div>
          <div className="mt-2 text-lg font-semibold text-white">
            Log into your account
          </div>
          <div className="flex flex-col self-stretch px-6 mt-11 w-full text-zinc-500">
            <div className="self-start text-sm text-stone-300">
              Email or Username
            </div>
            <div className="px-3.5 py-3.5 mt-2.5 text-base rounded border-2 border-solid border-neutral-700">
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
            <div className="flex gap-5 justify-between mt-3.5 text-stone-300">
              <div className="text-sm">Password</div>
              <div className="text-xs text-right">Forgot password?</div>
            </div>
            <div className="flex gap-5 justify-between p-3.5 mt-2.5 text-base rounded border-2 border-solid border-neutral-700">
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/966dba9191bbd67fa339fcea7947321b34034598a0f58fabdca965d4255d2246?placeholderIfAbsent=true&apiKey=3f2d5fd4f40d4b659e6ac75c77432d4d"
                className="object-contain shrink-0 w-5 aspect-square"
              />
            </div>
            <span className="text-yellow-200 mt-2">{info}</span>
            <div
              onClick={verifyUser}
              className="px-16 py-3 mt-5 text-base text-white bg-blue-500 rounded flex justify-center items-center"
            >
              Login now
            </div>
            <div className="self-start mt-3 text-sm">
              <span className="font-medium">Not registered yet? </span>
              <span
                onClick={() => {
                  router.push("/signup");
                }}
                className="font-medium text-stone-300"
              >
                Register →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
