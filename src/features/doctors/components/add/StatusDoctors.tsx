import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

function StatusDoctors() {
  return (
    <div className="flex flex-col gap-6 bg-white rounded-xl shadow p-4">
      <p className="text-xl font-bold">Work Status</p>

      <div className="flex flex-col gap-4">
        <Label
          htmlFor="active"
          className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-300 p-4"
        >
          <Checkbox id="active" />

          <div className="flex flex-col gap-1.5">
            <p className="font-semibold">Active</p>
            <span className="text-gray-700">
              Available for immediate scheduling and patient care.
            </span>
          </div>
        </Label>

        <Label
          htmlFor="active_1"
          className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-300 p-4"
        >
          <Checkbox id="active_1" />

          <div className="flex flex-col gap-1.5">
            <p className="font-semibold">On Leave</p>
            <span className="text-gray-700">
              Temporarily unavailable for bookings.
            </span>
          </div>
        </Label>

        <Label
          htmlFor="active_2"
          className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-300 p-4"
        >
          <Checkbox id="active_2" />

          <div className="flex flex-col gap-1.5">
            <p className="font-semibold">Inactive</p>
            <span className="text-gray-700">
              No longer practicing within this facility.
            </span>
          </div>
        </Label>
      </div>
    </div>
  );
}

export default StatusDoctors;
