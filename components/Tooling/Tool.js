import Image from "next/image";
export default function Tool({ img, name }) {
  return (
    <div
      className={
        " flex items-center gap-2 rounded-md bg-white  p-3 text-lg text-pink-500 md:w-44 md:gap-4"
      }
    >
      <Image src={img} alt={name} width={48} height={48} />
      {name}
    </div>
  );
}
