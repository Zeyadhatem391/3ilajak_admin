import { Button } from "@/components/ui/button";
import StatisticsClinics from "@/features/clinics/components/StatisticsClinics";
import TableClinics from "@/features/clinics/components/TableClinics";
import TitlePage from "@/shared/components/atoms/TitlePage";
import { CirclePlus } from "lucide-react";

function page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <TitlePage
          title="Clinic Management"
          decs="Oversee health centers, assign administrative staff, and monitor doctor allocation across the network."
        />
        <Button className="flex gap-1 bg-blue-800 text-white px-6 py-5 items-center ">
          <CirclePlus className="w-5 h-5" />
          <span className="text-lg font-semibold"> Create Clinic</span>
        </Button>
      </div>

      <StatisticsClinics />

      <TableClinics />
    </div>
  );
}

export default page;
