import CardDoctor from "@/features/doctors/components/details/CardDoctor";
import InfoDector from "@/features/doctors/components/details/InfoDector";

function page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
        <div className="flex flex-col gap-6 xl:col-span-5">
          <CardDoctor />
        </div>
        <div className="flex flex-col gap-6 xl:col-span-2"></div>

        <div className="flex flex-col gap-6 xl:col-span-5">
            <InfoDector />
        </div>
      </div>
    </div>
  );
}

export default page;
