
import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative mb-8 h-36 w-36 overflow-hidden rounded-full border-2 border-[var(--border)] bg-[var(--card)] shadow-lg sm:h-44 sm:w-44">
      <Image
        src="/images/profile.jpg"
        alt="Portrait of Ricardo Ávila"
        fill
        priority
        sizes="(max-width: 640px) 144px, 176px"
        className="object-cover"
      />
    </div>
  );
}
