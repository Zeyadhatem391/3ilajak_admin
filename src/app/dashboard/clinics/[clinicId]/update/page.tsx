import { Button } from "@/components/ui/button";
import FormClinics from "@/features/clinics/components/add/FormClinics";
import StaffingClinic from "@/features/clinics/components/add/StaffingClinic";
import { CirclePlus, CircleX } from "lucide-react";

function page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-12 items-start gap-6">
        <div className="col-span-8 flex flex-col gap-6">
          <FormClinics />
        </div>
        <div className="col-span-4 flex flex-col gap-6">
          <StaffingClinic />

          <div className="flex flex-col gap-4 p-6 bg-white shadow rounded-xl">
            <Button className="bg-blue-800 h-11 w-full flex gap-2 font-semibold text-lg rounded-lg text-white cursor-pointer">
              <CirclePlus className="w-7 h-7" />
              <span> Add Clinic</span>
            </Button>
            <Button className="h-11 w-full text-xg text-gray-600 font-semibold cursor-pointer rounded-lg border border-gray-400">
              <CircleX className="w-7 h-7" />
              Cancel and Exit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
