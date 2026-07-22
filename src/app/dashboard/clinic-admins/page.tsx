import { Button } from "@/components/ui/button";
import AnalysisClinicAdmins from "@/features/clinic-admins/components/AnalysisClinicAdmins";
import TableClinicAdmins from "@/features/clinic-admins/components/TableClinicAdmins";
import TitlePage from "@/shared/components/atoms/TitlePage";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <TitlePage
          title="Clinic Admin Management"
          decs="Oversee and manage administrators assigned to clinical facilities across the network."
        />
        <Link href="/dashboard/clinic-admins/add">
          <Button className="flex gap-1 bg-blue-800 text-white px-6 py-5 items-center cursor-pointer">
            <CirclePlus className="w-5 h-5" />
            <span className="text-lg font-semibold"> Add Clinic Admin</span>
          </Button>
        </Link>
      </div>

      <AnalysisClinicAdmins />

      <TableClinicAdmins />
    </div>
  );
}

export default page;
