import { ChartColumnIncreasing, UserRoundCheck, Users } from "lucide-react";

function StatisticsPratients() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex gap-7 items-center rounded-lg bg-white p-6 shadow border border-gray-300">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 text-white">
          <Users className="h-6 w-6" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold text-gray-500">TOTAL PATIENTS</p>
          <span className="text-3xl font-bold">1,248</span>
        </div>
      </div>

      <div className="flex gap-7 items-center rounded-lg bg-white p-6 shadow border border-gray-300">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-400 text-white">
          <UserRoundCheck className="h-6 w-6" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold text-gray-500">NEW THIS MONTH</p>
          <span className="text-3xl font-bold">+84</span>
        </div>
      </div>

      <div className="flex gap-7 items-center rounded-lg bg-white p-6 shadow border border-gray-300">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-800 text-white">
          <ChartColumnIncreasing className="h-6 w-6" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold text-gray-500">ACTIVE CASES</p>
          <span className="text-3xl font-bold">912</span>
        </div>
      </div>
    </div>
  );
}

export default StatisticsPratients;
