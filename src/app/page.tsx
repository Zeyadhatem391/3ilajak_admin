import TitlePage from "@/shared/components/atoms/TitlePage";
import DashbordLayout from "@/shared/components/layout/DashbordLayout";

function page() {
  return (
    <DashbordLayout>
      <TitlePage
        title="Dashboard Overview"
        decs="Welcome back. Here's what's happening with the healthcare network today."
      />
    </DashbordLayout>
  );
}

export default page;
