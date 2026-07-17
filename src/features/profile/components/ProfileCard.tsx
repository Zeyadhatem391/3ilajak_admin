import { profile } from "@/assets/images/image";
import Image from "next/image";

function ProfileCard() {
  return (
    <div className="flex flex-col gap-4 bg-white p-6 shadow rounded-lg">
      <Image
        src={profile}
        alt="Profile"
        width={120}
        height={120}
        className="mx-auto h-30 w-30 rounded-full object-cover border-4 border-gray-200"
      />

      <div className="text-center">
        <p className="text-xl font-bold text-gray-900">Dr. Elias Vance</p>
        <p className="text-blue-800">System Administrator</p>
      </div>

      <div className="flex justify-center gap-2">
        <span className="rounded-xl bg-green-500 px-3 py-1 text-xs font-semibold text-white">
          ACTIVE
        </span>

        <span className="rounded-xl bg-gray-500 px-3 py-1 text-xs font-semibold text-white">
          LEVEL 4 ADMIN
        </span>
      </div>
    </div>
  );
}

export default ProfileCard;
