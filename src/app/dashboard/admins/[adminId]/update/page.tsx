import PermissionAdmins from "@/features/admins/components/add/PermissionAdmins";
import FormAdmins from "@/features/admins/components/FormAdmins";
import SystemAdmins from "../../../../../features/admins/components/add/SystemAdmins";

interface PageProps {
  params: Promise<{
    adminId: string;
  }>;
}

async function Page({ params }: PageProps) {
  const { adminId } = await params;

  const id = adminId;

  return (
    <div className="flex flex-col gap-6">

      <div className="grid grid-cols-12 items-start gap-6">
        <div className="col-span-8 flex flex-col gap-6">
          <FormAdmins />
        </div>
        <div className="col-span-4 flex flex-col gap-6">
          <PermissionAdmins />

          <SystemAdmins />
        </div>
      </div>
    </div>
  );
}

export default Page;
