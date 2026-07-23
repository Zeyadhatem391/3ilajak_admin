import { unknown } from "@/assets/images/image";
import Image from "next/image";

function CardDoctor() {
  return (
    <div className="bg-white rounded-xl shadow p-7 flex flex-col gap-4 ">
      <div className="flex flex-col items-center gap-4 text-center">
        <Image
          src={unknown}
          alt="Profile"
          width={150}
          height={150}
          className="h-30 w-30 rounded-xl object-cover shadow"
        />

        <div>
          <p className="text-3xl font-bold">Dr. Sarah Al-Fayed</p>

          <p className="text-2xl font-bold text-blue-500">
            Senior Cardiologist
          </p>
        </div>
        <div className="flex justify-center gap-2">
          <div className="py-1 px-2 bg-green-300 text-green-900 border border-green-900 rounded-full font-semibold">
            Active
          </div>

          <div className="py-1 px-2 bg-blue-300 text-blue-900 border border-blue-900 rounded-full font-semibold">
            Specialist
          </div>
        </div>
      </div>

      <div className="border border-gray-300 rounded-full my-3 w-full"></div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-gray-900 text-lg font-semibold">National ID</p>
          <span className=" font-bold text-xl ">29408122300456</span>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-900 text-lg font-semibold">Doctor ID</p>
          <span className="text-blue-600 font-bold text-xl ">#DR-7702</span>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-900 text-lg font-semibold">Gender</p>
          <span className=" font-bold text-xl ">Female</span>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-900 text-lg font-semibold">Blood Type</p>
          <span className="text-red-600 font-bold text-xl ">O Positive</span>
        </div>
      </div>
    </div>
  );
}

export default CardDoctor;
