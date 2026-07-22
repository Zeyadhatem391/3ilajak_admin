import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Contact } from "lucide-react";

function PersonalPatient() {
  return (
    <div className="flex flex-col border-2 border-gray-400 shadow rounded-xl">
      <div className="px-7 py-4 bg-blue-50 rounded-t-xl border-gray-500 border-b-2">
        <div className="flex gap-2 items-center">
          <Contact className="text-blue-700 w-6 h-6" />
          <span className="font-bold text-xl ">Personal Identity</span>
        </div>
      </div>

      <div className="p-6">
        <div className="py-6">
          <form className="space-y-8">
            <div className="flex gap-4 justify-between">
              <div className="w-full">
                <Label htmlFor="name" className="mb-2">
                  Full Name
                </Label>

                <div className="relative bg-gray-100 ">
                  <Input
                    id="name"
                    type="text"
                    placeholder="e.g., Abdullah Ahmed"
                    className="h-11 pl-5 border-2 border-gray-200 "
                  />
                </div>
              </div>

              <div className="w-full">
                <Label htmlFor="n_id" className="mb-2">
                  National ID / Passport
                </Label>

                <div className="bg-gray-100 ">
                  <Input
                    id="n_id"
                    type="email"
                    placeholder="10-digit number"
                    className="h-11 pl-5 border-2 border-gray-200 "
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-between items-center">
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
                  <SelectTrigger
                    id="gender"
                    className="w-full py-5 border-gray-200 border "
                  >
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>

                  <SelectContent position="popper" className="bg-white">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PersonalPatient;
