import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

function TopBar() {
  return (
    <div className="bg-white p-6 w-full rounded-lg shadow flex justify-between">
      <div className="relative w-full max-w-100">
        <Search className="absolute top-2/5 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />

        <Input
          placeholder="Search Patients by name, phone..."
          className="pl-10 bg-gray-50 border-gray-200 focus-visible:ring-1"
        />
      </div>

      <Button className="px-4 py-5 bg-blue-900 text-lg text-white flex gap-2">
        <Plus />
        <span>Add New Patient</span>
      </Button>
    </div>
  );
}

export default TopBar;
