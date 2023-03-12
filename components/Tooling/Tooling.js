import Tool from "./Tool";

export default function Tooling() {
  return (
    <div className="m-auto mt-10 px-10 text-center md:my-36">
      <h1 className="text-dynamic-xlg">Tooling</h1>
      <div className="m-auto grid grid-cols-2 justify-items-stretch gap-x-3 gap-y-5 md:flex md:w-7/12 md:flex-wrap md:justify-center md:gap-4">
        <Tool img={"/react.png"} name={"ReactJS"} />
        <Tool img={"/js.png"} name={"JavaScript"} />
        <Tool img={"/nodejs.png"} name={"Node.js"} />
        <Tool img={"/tailwind.png"} name={"Tailwind"} />
        <Tool img={"/jest.png"} name={"Jest"} />
        <Tool img={"/html-5.png"} name={"HTML"} />
        <Tool img={"/css-3.png"} name={"CSS"} />
        <Tool img={"/figma.png"} name={"Figma"} />
      </div>
    </div>
  );
}
