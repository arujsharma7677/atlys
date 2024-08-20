import * as React from "react";

function Post(props: any) {
    const { data } = props;
  return (
    <div className="flex flex-col rounded-none max-w-[800px] mt-2">
      <div className="flex flex-col px-5 py-6 w-full rounded-lg border-2 border-solid bg-zinc-800 border-neutral-700 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full font-medium max-md:max-w-full">
          <div className="flex gap-4">
            <img
              loading="lazy"
              srcSet={data?.imageUrl}
              className="object-contain shrink-0 w-12 rounded-full aspect-square"
              src={`https://ui-avatars.com/api/?name=${data?.firstName}+${data?.lastName}`}
            />
            <div className="flex flex-col my-auto">
              <div className="text-base text-stone-300">{data?.name}</div>
              <div className="self-start mt-1 text-sm text-zinc-500">
                {data?.time}
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7db40b650639a74a98da97b44c5f387b4f7c9cd3426f1521677b4af6fcb5e14?placeholderIfAbsent=true&apiKey=3f2d5fd4f40d4b659e6ac75c77432d4d"
            className="object-contain shrink-0 my-auto w-5 aspect-square"
          />
        </div>
        <div className="flex flex-wrap gap-4 px-4 pt-4 pb-7 mt-5 rounded-lg bg-zinc-900">
          <div className="self-start px-4 py-2 w-12 h-12 text-lg font-medium text-black whitespace-nowrap rounded-full bg-zinc-800">
            👋
          </div>
          <div className="flex-auto text-base leading-6 text-zinc-500 w-[554px] max-md:max-w-full">
            {data?.description}
          </div>
        </div>
        <div className="flex gap-2 self-start mt-3 text-sm font-medium text-zinc-500">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/03b4fe1e9b6fffe196d04140aeb9c70ada5a3928f42b351a627aaed6cad5ac4d?placeholderIfAbsent=true&apiKey=3f2d5fd4f40d4b659e6ac75c77432d4d"
            className="object-contain shrink-0 w-5 aspect-square"
          />
          <div>{data?.comments} comments</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
