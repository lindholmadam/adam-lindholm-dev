import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full overflow-hidden border-4 border-white">
      {/* Bilden */}
      <Image
        src="/profile-bAw2.png"
        alt="Adam Lindholm"
        width={200}
        height={200}
        className="w-full h-full object-cover scale-110"
        priority
        unoptimized
      />

      {/* Transparent blå overlay */}
      <div className="absolute inset-0 bg-blue-500 opacity-[.1]"></div>
    </div>
  );
}
