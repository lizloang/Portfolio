import SocialIcon from "./SocialIcon";

export default function Contact() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <h1 className="text-5xl">Don’t be a stranger! ✌🏼</h1>
      <div className="w-fit rounded bg-pink-500 p-2.5 text-2xl ">
        Connect with me
      </div>
      <div className="flex gap-4 pb-10">
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
