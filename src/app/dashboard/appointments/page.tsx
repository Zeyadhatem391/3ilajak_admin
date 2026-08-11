import { getAllAppointment } from "@/features/appointment/api/getAllAppointment";
import AppointmentTable from "@/features/appointment/components/AppointmentTable";
import AppointmentToolbar from "@/features/appointment/components/AppointmentToolbar";
import TitlePage from "@/shared/components/atoms/TitlePage";

interface PageProps {
  searchParams: Promise<{
    name?: string;
    type?: string;
  }>;
}

async function page({ searchParams }: PageProps) {
  const { name, type } = await searchParams;

  const response = await getAllAppointment({ name, type });

  const appointment = response.data;
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="Appointment Management"
        decs="Monitor and schedule patient consultations across all clinics."
      />

      <AppointmentToolbar />

      <AppointmentTable appointment={appointment} />
    </div>
  );
}

export default page;
