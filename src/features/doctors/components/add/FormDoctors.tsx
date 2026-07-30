import CommunicationDoctor from "./CommunicationDoctor";
import CredentialsDoctor from "./CredentialsDoctor";
import IdentityDoctor from "./IdentityDoctor";

function FormDoctors() {
  return (
    <div className="flex flex-col gap-8">
      <IdentityDoctor />

      <CommunicationDoctor />

      <CredentialsDoctor />
    </div>
  );
}

export default FormDoctors;
