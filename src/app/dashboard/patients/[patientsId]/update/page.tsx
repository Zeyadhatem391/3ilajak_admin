import { Button } from "@/components/ui/button";
import PhotePatient from "@/features/patients/components/add/PhotePatient";
import StatusPatient from "@/features/patients/components/add/StatusPatient";
import FormPatient from "@/features/patients/components/FormPatient";

function page() {
  return (
    <div className="flex flex-col gap-6">
      {/* <div className="grid grid-cols-12 items-start gap-6">
        <div className="col-span-4 flex flex-col gap-6">
          <PhotePatient />
          <StatusPatient />
        </div>
        <div className="col-span-8 flex flex-col gap-6">
          <FormPatient />
        </div>
      </div> */}

      <div className="flex gap-2 justify-end border-t-2 border-gray-400 pt-6">
        <Button className="h-11 w-24 text-xg text-gray-600 font-semibold cursor-pointer rounded-lg border border-gray-400">
          Cancel
        </Button>
        <Button className="bg-blue-800 h-11 w-44 font-semibold rounded-lg text-white cursor-pointer">
          Add Patient Record
        </Button>
      </div>
    </div>
  );
}

export default page;
