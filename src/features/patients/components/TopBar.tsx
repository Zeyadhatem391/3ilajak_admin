import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, SlidersHorizontal } from "lucide-react";

function TopBar() {
  return (
    <div className="bg-white p-6 w-full rounded-lg shadow flex justify-between">
      <div className="flex flex-col gap-5">
        <div className="flex gap-2">
          <div className="relative w-full max-w-61">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <Input
              placeholder="Search Patients by name, ID or phone..."
              className="pl-10 bg-gray-50 border-gray-200 focus-visible:ring-1"
            />
          </div>

          <div className="w-full max-w-40">
            <Input
              placeholder="Filter by Clinic"
              className="bg-gray-50 border-gray-200 focus-visible:ring-1"
            />
          </div>
        </div>

        <div className="flex gap-2 items-center text-blue-700">
          <SlidersHorizontal className="w-5 h-5" />
          <span>Advanced Filters</span>
        </div>
      </div>

      <Button className="px-4 py-5 bg-blue-900 text-lg text-white flex gap-2">
        <Plus />
        <span>Add New Patient</span>
      </Button>
    </div>
  );
}

export default TopBar;
