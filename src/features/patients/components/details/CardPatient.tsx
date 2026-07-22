import { unknown } from "@/assets/images/image";
import Image from "next/image";

function CardPatient() {
  return (
    <div className="flex flex-col gap-8 rounded-xl bg-white p-6 shadow sm:p-8 lg:flex-row lg:gap-10">
      <div className="flex shrink-0 flex-col items-center gap-5 lg:w-36">
        <div className="relative">
          <Image
            src={unknown}
            alt="Profile"
            width={120}
            height={120}
            className="h-30 w-30 rounded-xl border-4 border-dashed border-gray-200 object-cover p-1"
          />

          <div className="absolute -bottom-2 -right-3 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white shadow">
            Active
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-sm font-semibold text-gray-500">
            BLOOD TYPE
          </p>

          <span className="font-bold text-red-700">
            O Positive
          </span>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 xl:grid-cols-3">
          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-sm font-semibold text-gray-500">
              FULL NAME
            </p>

            <span className="font-medium text-gray-800">
              Elena Sofia Rodriguez
            </span>
          </div>

          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-sm font-semibold text-gray-500">
              NATIONAL ID
            </p>

            <span className="font-medium text-gray-800">
              2940512-4421-9
            </span>
          </div>

          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-sm font-semibold text-gray-500">
              PATIENT ID
            </p>

            <span className="font-medium text-gray-800">
              #PX-88291
            </span>
          </div>

          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-sm font-semibold text-gray-500">
              PHONE
            </p>

            <span className="font-medium text-gray-800">
              +971 50 123 4567
            </span>
          </div>

          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-sm font-semibold text-gray-500">
              EMAIL
            </p>

            <span className="break-all font-medium text-gray-800">
              e.rodriguez@email.com
            </span>
          </div>

          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-sm font-semibold text-gray-500">
              GENDER / DOB
            </p>

            <span className="font-medium text-gray-800">
              Female • 12 May 1985
            </span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-5">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-500">
              HOME ADDRESS
            </p>

            <span className="font-medium text-gray-800">
              Villa 42, Al Reef Street, Downtown District, Dubai, UAE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPatient;