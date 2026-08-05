import Breadcrumb from "@/shared/components/atoms/Breadcrumb";
import InfoClinicAdmins from "@/features/clinic-admins/components/add/InfoClinicAdmins";
import FormClinicAdmins from "@/features/clinic-admins/components/add/FormClinicAdmins";
import { getAllClinics } from "@/features/clinics/api/getAllClinics";
import { getAllAdmins } from "@/features/admins/api/getAllAdmins";

async function page() {
  const response = await getAllClinics();

  const res = await getAllAdmins();

  

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumb />

      <div className="grid grid-cols-12 items-start gap-6">
        <div className="col-span-8 flex flex-col gap-6">
          <FormClinicAdmins clinics={response.data} admins={res.data.data}/>
        </div>
        <div className="col-span-4 flex flex-col gap-6">
          <InfoClinicAdmins />
        </div>
      </div>
    </div>
  );
}

export default page;
