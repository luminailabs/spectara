import Image from "next/image";
import logo from "@/public/logoo.png";

export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <a href="https://togetherai.link" target="_blank">
        <Image alt="" className="h-8 w-auto" src={logo} />
      </a>
      <p className="font-mono text-gray-600">Generate AI Images with Spectara</p>
    </div>
  );
}
