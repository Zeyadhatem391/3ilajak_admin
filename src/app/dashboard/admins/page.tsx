import AnalysisAdmins from "@/features/admins/components/AnalysisAdmins";
import TableAdmins from "@/features/admins/components/TableAdmins";
import TitlePage from "@/shared/components/atoms/TitlePage";

function page() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="Admins Management"
        decs="Oversee system-wide roles and clinic-specific administrative access."
      />

      <AnalysisAdmins />

      <TableAdmins />
    </div>
  );
}

export default page;
