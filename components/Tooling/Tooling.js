import Tool from "./Tool";

export default function Tooling() {
  return (
    <div className="my-36 flex flex-col items-center gap-16">
      <h1 className="text-7xl">Tooling</h1>
      <div className="flex w-7/12 flex-wrap justify-center gap-4">
        <Tool img={"/react.png"} name={"ReactJS"} />
        <Tool img={"/js.png"} name={"JavaScript"} />
        <Tool img={"/nodejs.png"} name={"Node.js"} />
        <Tool img={"/jest.png"} name={"Jest"} />
        <Tool img={"/figma.png"} name={"Figma"} />
        <Tool img={"/html-5.png"} name={"HTML"} />
        <Tool img={"/css-3.png"} name={"CSS"} />
        <Tool img={"/tailwind.png"} name={"Tailwind"} />
      </div>
    </div>
  );
}
