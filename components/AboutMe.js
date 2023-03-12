import Image from "next/image";

export default function AboutMe() {
  return (
    <div className=" mt-36  flex  justify-center gap-10 px-7 md:my-28 md:px-20">
      <div>
        <div className="mb-6 w-fit rounded bg-pink-500 py-1 px-1.5 text-dynamic-md md:p-2.5 ">
          Hello World!⚡ I am Lizbeth Alicia
        </div>
        <div className="max-w-2xl  text-dynamic-lg">
          Highly motivated{" "}
          <span className="text-pink-500">front-end developer</span>. Seeking to
          leverage my experience and knowledge to make the web and your apps a
          little better ✨
        </div>
      </div>
      <Image
        src="/Lizbeth_Lopez.jpg"
        alt="my image"
        width={400}
        height={400}
        className="hidden self-center rounded-full md:block"
      />
    </div>
  );
}
