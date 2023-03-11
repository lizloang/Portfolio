import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="my-36 flex flex-col gap-6 px-20">
      <div className="w-fit translate-y-14 rounded bg-pink-500 p-2.5 text-2xl">
        Hello World!⚡ I am Lizbeth Alicia
      </div>
      <div className="flex gap-20">
        <div className="max-w-2xl self-center text-5xl ">
          Highly motivated{" "}
          <span className="text-pink-500">front-end developer</span>. Seeking to
          leverage my experience and knowledge to make the web and your apps a
          little better ✨
        </div>
        <Image
          src="/Lizbeth_Lopez.jpg"
          alt="my image"
          width={400}
          height={400}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
