import Image from "next/image";
export default function Tool({ img, name }) {
  return (
    <div
      className={
        "bg-white text-pink-500 flex text-lg items-center gap-4 w-44 p-3 rounded-md"
      }
    >
      <Image src={img} alt={name} width={48} height={48} />
      {name}
    </div>
  );
}
