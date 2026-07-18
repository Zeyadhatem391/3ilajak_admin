import StatisticsDoctors from "@/features/doctors/components/StatisticsDoctors";
import TableDoctors from "@/features/doctors/components/TableDoctors";
import TitlePage from "@/shared/components/atoms/TitlePage";

function page() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="Doctor Management"
        decs="Manage medical professionals across the 3ilajak enterprise network."
      />

      <StatisticsDoctors />

      <TableDoctors />
    </div>
  );
}

export default page;
