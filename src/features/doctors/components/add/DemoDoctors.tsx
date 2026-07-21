import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UsersRound } from "lucide-react";

function DemoDoctors() {
  return (
    <div className="rounded-xl bg-white p-5 shadow">
      <div className="flex items-center gap-2">
        <UsersRound className="h-6 w-6 text-blue-700" />
        <span className="text-xl font-bold">Demographics</span>
      </div>

      <div className="w-full my-8">
        <Label htmlFor="date" className="mb-2">
          DATE OF BIRTH
        </Label>

        <div className="relative">
          <Input
            id="date"
            type="date"
            className="h-11 border-2 border-gray-200 "
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-2">
        <Label htmlFor="gender">Gender</Label>

        <Select>
          <SelectTrigger id="gender" className="w-1/2 border-gray-200 border ">
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>

          <SelectContent position="popper" className="bg-white">
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default DemoDoctors;
