import Image from "next/image";
import Tool from "./Tool";

export default function Project({ img, title, description, tools, link }) {
  return (
    <div className=" bg-slate-600 flex p-10 gap-10 w-4/5 bg-opacity-20 backdrop-blur-lg rounded-3xl drop-shadow-lg border-solid border border-slate-50	">
      <Image src={img} alt={title} width={400} height={400} />
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">{title}</h1>
        <a
          href={link}
          className="text-pink-500 underline hover:text-yellow-400"
        >
          Click here
        </a>
        <p className="font-normal">{description}</p>
        <section className="flex gap-2 fflex-wrap">
          {tools.map((tool, id) => {
            return <Tool toolName={tool} key={id} />;
          })}
        </section>
      </div>
    </div>
  );
}
