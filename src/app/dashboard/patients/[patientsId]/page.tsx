import CardPatient from "@/features/patients/components/details/CardPatient";
import EmergencyPatient from "@/features/patients/components/details/EmergencyPatient";

function Page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
        <div className="flex flex-col gap-6 xl:col-span-9">
          <CardPatient />
        </div>

        <div className="flex flex-col gap-6 xl:col-span-3">
          <EmergencyPatient />
        </div>
      </div>
    </div>
  );
}

export default Page;
