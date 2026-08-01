import { Clinic } from "@/features/clinics/api/getAllClinics";
import CommunicationDoctor from "./CommunicationDoctor";
import CredentialsDoctor from "./CredentialsDoctor";
import IdentityDoctor from "./IdentityDoctor";

interface Props {
  clinics: Clinic[];
}

function FormDoctors({ clinics }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <IdentityDoctor clinics={clinics}/>

      <CommunicationDoctor />

      <CredentialsDoctor />
    </div>
  );
}

export default FormDoctors;
