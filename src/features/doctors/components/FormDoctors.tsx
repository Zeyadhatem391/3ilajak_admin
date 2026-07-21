import CommunicationDoctor from "./add/CommunicationDoctor";
import CredentialsDoctor from "./add/CredentialsDoctor";
import IdentityDoctor from "./add/IdentityDoctor";

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
