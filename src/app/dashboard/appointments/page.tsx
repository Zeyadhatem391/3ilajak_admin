import AppointmentTable from "@/features/appointment/components/AppointmentTable";
import AppointmentToolbar from "@/features/appointment/components/AppointmentToolbar";
import TitlePage from "@/shared/components/atoms/TitlePage";

function page() {
  return (
     <div className="flex flex-col gap-6">
      <TitlePage
        title="Appointment Management"
        decs="Monitor and schedule patient consultations across all clinics."
      />

      <AppointmentToolbar />

      <AppointmentTable />
    </div>
  );
}

export default page;
