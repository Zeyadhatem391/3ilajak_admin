import { Button } from "@/components/ui/button";
import StatisticsDoctors from "@/features/doctors/components/StatisticsDoctors";
import TableDoctors from "@/features/doctors/components/TableDoctors";
import TitlePage from "@/shared/components/atoms/TitlePage";
import { CirclePlus } from "lucide-react";

function page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <TitlePage
          title="Doctor Management"
          decs="Manage medical professionals across the 3ilajak enterprise network."
        />
        <Button className="flex gap-1 bg-blue-800 text-white px-6 py-5 items-center ">
          <CirclePlus className="w-5 h-5" />
          <span className="text-lg font-semibold"> Create Doctors</span>
        </Button>
      </div>

      <StatisticsDoctors />

      <TableDoctors />
    </div>
  );
}

export default page;
