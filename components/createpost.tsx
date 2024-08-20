import * as React from "react";

function CreatePost() {
  return (
    <div className="flex flex-col rounded-none max-w-[800px]">
      <div className="flex flex-col py-4 w-full rounded-lg border-2 border-solid bg-zinc-800 border-neutral-700 max-md:max-w-full">
        <div className="flex flex-col px-5 w-full max-md:max-w-full">
          <div className="self-start text-lg font-medium text-stone-300">
            Create post
          </div>
          <div className="flex flex-wrap gap-4 px-4 py-2 mt-4 rounded-lg bg-zinc-900">
            <div className="px-4 w-12 h-12 text-lg font-medium justify-center items-center text-black whitespace-nowrap rounded-full bg-zinc-800 py-2">
              💬
            </div>
            <div className="flex-auto my-auto text-base leading-none text-zinc-500 w-[554px] max-md:max-w-full">
              <input placeholder=" How are you feeling today?" type="text" className="bg-transparent" />
            </div>
          </div>
        </div>
        <div className="self-end px-8 py-3 mt-4 mr-5 text-base font-medium text-white whitespace-nowrap bg-blue-500 rounded max-md:px-5 max-md:mr-2.5">
          Post
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
