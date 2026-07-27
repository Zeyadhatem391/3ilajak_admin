import InfoClinicAdmins from "@/features/clinic-admins/components/add/InfoClinicAdmins";
import FormClinicAdmins from "@/features/clinic-admins/components/add/FormClinicAdmins";

function page() {
  return (
    <div className="grid grid-cols-12 items-start gap-6">
      <div className="col-span-8 flex flex-col gap-6">
        <FormClinicAdmins mode="update" />
      </div>
      <div className="col-span-4 flex flex-col gap-6">
        <InfoClinicAdmins />
      </div>
    </div>
  );
}

export default page;
