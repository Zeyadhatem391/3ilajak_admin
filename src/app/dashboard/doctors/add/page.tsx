import { Button } from "@/components/ui/button";
import DemoDoctors from "@/features/doctors/components/add/DemoDoctors";
import PhoteDoctors from "@/features/doctors/components/add/PhoteDoctors";
import StatusDoctors from "@/features/doctors/components/add/StatusDoctors";
import FormDoctors from "@/features/doctors/components/FormDoctors";
import Breadcrumb from "@/shared/components/atoms/Breadcrumb";
import { UserRoundCheck } from "lucide-react";


function page() {
  return (
    <div className="flex flex-col gap-6">
      <Breadcrumb />

      <div className="grid grid-cols-12 items-start gap-6">
        <div className="col-span-8 flex flex-col gap-6">
          <FormDoctors />
        </div>
        <div className="col-span-4 flex flex-col gap-8">
        <DemoDoctors />

        <StatusDoctors />

        <PhoteDoctors />
        </div>
      </div>

        <div className="flex gap-2 justify-end border-t-2 border-gray-400 pt-6">
          <Button className="h-11 w-30 text-xg text-gray-600 font-semibold cursor-pointer rounded-lg border border-gray-400">
            Discard Changes
          </Button>
          <Button className="bg-blue-800 h-11 w-58 flex gap-2 font-semibold text-lg rounded-lg text-white cursor-pointer">
           <UserRoundCheck className="w-7 h-7" />
           <span> Complete Registration</span>
          </Button>
        </div>
    </div>
  );
}

export default page;
