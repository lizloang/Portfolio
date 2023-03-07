import Image from "next/image";

export default function SocialIcon({ img, name, link }) {
  return (
    <a href={link}>
      <Image src={img} alt={name} width={128} height={128} />
    </a>
  );
}
