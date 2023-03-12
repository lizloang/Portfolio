import Image from "next/image";
import Tool from "./Tool";

export default function Project({ img, title, description, tools, link }) {
  return (
    <div className=" flex w-4/5 flex-wrap gap-10 rounded-3xl border border-solid border-slate-50 bg-slate-600 bg-opacity-20 p-7 text-dynamic-lg drop-shadow-lg md:flex-nowrap md:p-10 	">
      <Image
        className="object-contain"
        src={img}
        alt={title}
        width={400}
        height={400}
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-dynamic-lg">{title}</h1>
        <a
          href={link}
          className="text-dynamic-md text-pink-500 underline hover:text-yellow-400"
        >
          Click here
        </a>
        <p className="text-dynamic-sm font-normal">{description}</p>
        <section className="flex flex-wrap gap-2">
          {tools.map((tool, id) => {
            return <Tool toolName={tool} key={id} />;
          })}
        </section>
      </div>
    </div>
  );
}
