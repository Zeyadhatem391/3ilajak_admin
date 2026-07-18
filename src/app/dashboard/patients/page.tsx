import StatisticsPratients from "@/features/patients/components/StatisticsPratients";
import TablePatients from "@/features/patients/components/TablePatients";
import TopBar from "@/features/patients/components/TopBar";

function page() {
  return (
    <div className="flex flex-col gap-4">
      <TopBar />

      <TablePatients />

      <StatisticsPratients />
    </div>
  );
}

export default page;
