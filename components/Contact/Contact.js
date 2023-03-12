import SocialIcon from "./SocialIcon";

export default function Contact({ className }) {
  return (
    <div className={`my-10 px-10 ${className}`}>
      <h1 className="text-center text-dynamic-xlg">Don’t be a stranger! ✌🏼</h1>
      <div className=" m-auto my-5 w-fit rounded bg-pink-500 p-2.5 text-dynamic-md ">
        Connect with me
      </div>
      <div className="flex justify-center gap-4 pb-10">
        <SocialIcon
          img={"/github.png"}
          name={"Github"}
          link={"https://github.com/lizloang"}
        />
        <SocialIcon
          img={"/linkedin.png"}
          name={"LinkedIn"}
          link={"https://www.linkedin.com/in/lizloang/"}
        />
        <SocialIcon
          img={"/discord.png"}
          name={"Discord"}
          link={"https://discord.gg/f3CNjPsu"}
        />
      </div>
    </div>
  );
}
