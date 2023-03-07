import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-6 py-36">
      <div className="bg-pink-500 w-fit p-2.5 rounded text-2xl translate-y-14">
        Hello World!⚡ I'm Lizbeth Alicia
      </div>
      <div className="flex">
        <div className="text-5xl self-center">
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
