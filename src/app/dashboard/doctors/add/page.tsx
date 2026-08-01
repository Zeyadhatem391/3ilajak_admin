import { getAllClinics } from "@/features/clinics/api/getAllClinics";
import AddDoctorPage from "@/features/doctors/components/add/AddDoctorPage";

export default async function Page() {
  const response = await getAllClinics({
    name: "",
  });

  return <AddDoctorPage clinics={response.data} />;
}
