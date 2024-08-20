'use client'
import CreatePost from "@/components/createpost";
import Modal from "@/components/modal";
import Post from "@/components/post";
import Signup from "@/components/signup";
import Signupcomponent from "@/components/signupcomponent";

function Home() {
  const postData = [
    {
      name: "Theresa Webb",
      time: "5 min",
      id: "12345",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comments: 7,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/698f20b4f8fc48c2a3778e525ddb031a2f6f22f71ec78d22b8cfff364ddbb1a7?placeholderIfAbsent=true&apiKey=3f2d5fd4f40d4b659e6ac75c77432d4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/698f20b4f8fc48c2a3778e525ddb031a2f6f22f71ec78d22b8cfff364ddbb1a7?placeholderIfAbsent=true&apiKey=3f2d5fd4f40d4b659e6ac75c77432d4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/698f20b4f8fc48c2a3778e525ddb031a2f6f22f71ec78d22b8cfff364ddbb1a7?placeholderIfAbsent=true&apiKey=3f2d5fd4f40d4b659e6ac75c77432d4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/698f20b4f8fc48c2a3778e525ddb031a2f6f22f71ec78d22b8cfff364ddbb1a7?placeholderIfAbsent=true&apiKey=3f2d5fd4f40d4b659e6ac75c77432d4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/698f20b4f8fc48c2a3778e525ddb031a2f6f22f71ec78d22b8cfff364ddbb1a7?placeholderIfAbsent=true&apiKey=3f2d5fd4f40d4b659e6ac75c77432d4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/698f20b4f8fc48c2a3778e525ddb031a2f6f22f71ec78d22b8cfff364ddbb1a7?placeholderIfAbsent=true&apiKey=3f2d5fd4f40d4b659e6ac75c77432d4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/698f20b4f8fc48c2a3778e525ddb031a2f6f22f71ec78d22b8cfff364ddbb1a7?placeholderIfAbsent=true&apiKey=3f2d5fd4f40d4b659e6ac75c77432d4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/698f20b4f8fc48c2a3778e525ddb031a2f6f22f71ec78d22b8cfff364ddbb1a7?placeholderIfAbsent=true&apiKey=3f2d5fd4f40d4b659e6ac75c77432d4d",
    },
    {
      name: "aruj sharma",
      time: "15 min",
      id: "12345",
      description:
        "Amet est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comments: 12,
      firstName: "aruj",
      lastName: "sharma",
    },
    {
      name: "vyom singh",
      time: "10 min",
      id: "12345",
      firstName: "vyom",
      lastName: "singh",
      description:
        "Amet mco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comments: 14,
    },
  ];
  return (
    <>
      <div className="bg-black h-screen w-screen text-white flex-col flex px-80 py-10 overflow-y-scroll">
        <div className="text-2xl">Hello Jane</div>
        <div className="text-sm my-2">
          How are you doing today? Would you like to share something with the
          community 🤗
        </div>
        <CreatePost />
        {postData?.map((m: any) => (
          <Post key={m?.id} data={m} />
        ))}
      </div>
         
    </>
  );
}

export default Home;
