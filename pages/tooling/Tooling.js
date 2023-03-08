import Tool from "./Tool";

export default function Tooling() {
  return (
    <div className="flex flex-col pb-36 gap-16 items-center">
      <h1 className="text-7xl">Tooling</h1>
      <div className="flex gap-4 justify-center flex-wrap w-7/12">
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
