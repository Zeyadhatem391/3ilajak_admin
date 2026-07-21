import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Info, Mail, User } from "lucide-react";

function FormClinics() {
  return (
    <div className="flex flex-col bg-white shadow rounded-2xl p-6 border-l-4 border-blue-800">
      <div className="flex gap-1.5 items-center">
        <Info className="w-7 h-7 text-blue-700" />
        <span className="font-bold text-lg">General Information</span>
      </div>
      <div className="py-6">
        <form className="space-y-8">
          <div className="w-full">
            <Label htmlFor="name" className="mb-2">
              CLINIC NAME
            </Label>

            <div className="relative bg-gray-100 ">
              <Input
                id="name"
                type="text"
                placeholder="e.g. Al-Noor Specialized Medical Center"
                className="h-11 pl-4 border-2 border-gray-200 "
              />
            </div>
          </div>

          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <Label htmlFor="max_num" className="mb-2">
                MAX NUMBER OF DOCTORS
              </Label>

              <div className="relative bg-gray-100 ">
                <Input
                  id="max_num"
                  type="text"
                  placeholder="10"
                  className="h-11 pl-4 border-2 border-gray-200 "
                />
              </div>
            </div>
            <div className="w-full">
              <Label htmlFor="facility" className="mb-2">
                FACILITY TYPE
              </Label>

              <div className="relative bg-gray-100 ">
                <Input
                  id="facility"
                  type="text"
                  placeholder="General Practice"
                  className="h-11 pl-4 border-2 border-gray-200 "
                />
              </div>
            </div>
          </div>
          <div>
            <Label htmlFor="address" className="mb-2">
              PHYSICAL ADDRESS
            </Label>
            <div className="relative bg-gray-100 ">
              <Textarea
                id="address"
                className="h-25"
                placeholder="Street name, Building No, Floor, City, Country"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormClinics;
