import StatisticsCard from "@/shared/components/atoms/StatisticsCard";
import { ChartColumnIncreasing, UserRoundCheck, Users } from "lucide-react";

function StatisticsPratients() {
  return (
    <div className="grid grid-cols-3 gap-4">
    
      <StatisticsCard
        title="TOTAL PATIENTS"
        desc="1,248"
        icon={Users}
        color="bg-blue-400"
      />

      <StatisticsCard
        title="NEW THIS MONTH"
        desc="+84"
        icon={UserRoundCheck}
        color="bg-green-400 text-green-900"
      />

      <StatisticsCard
        title="ACTIVE CASES"
        desc="912"
        icon={ChartColumnIncreasing}
        color="bg-blue-800 text-white"
      />
    </div>
  );
}

export default StatisticsPratients;
