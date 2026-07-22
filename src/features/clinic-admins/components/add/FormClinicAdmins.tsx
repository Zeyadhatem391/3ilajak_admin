import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Contact, Eye, Lock, Mail, User, UserPlus } from "lucide-react";

function FormClinicAdmins() {
  return (
    <div className="flex flex-col bg-white shadow rounded-2xl">
      <div className="flex justify-between p-7 border-gray-500 border-b-2">
        <div className="flex gap-2 items-center">
          <Contact className="text-blue-700 w-6 h-6" />
          <span className="font-bold text-xl ">Assignment Details</span>
        </div>
        <div className="py-1 px-2 bg-blue-200 rounded-full text-sm text-blue-800">
          NEW ASSIGNMENT
        </div>
      </div>
      <div className="p-6">
        <div className="py-6">
          <form className="space-y-8">
            <div className="w-full flex flex-col gap-1">
              <Label htmlFor="administrator" className="text-md">
                Select System Administrator
              </Label>

              <p className="text-gray-600">
                Choose an existing system admin to delegate to a specific
                clinic.
              </p>

              <div className=" bg-gray-100 ">
                <Input
                  id="administrator"
                  type="text"
                  placeholder="Search or select an administrator..."
                  className="h-11 pl-5 border-2 border-gray-200 "
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-1">
              <Label htmlFor="clinic" className="text-md">
                Target Clinic Facility
              </Label>

              <p className="text-gray-600">
                Select the medical facility this administrator will be
                responsible for.
              </p>

              <div className=" bg-gray-100 ">
                <Input
                  id="clinic"
                  type="text"
                  placeholder="Select an active clinic..."
                  className="h-11 pl-5 border-2 border-gray-200 "
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="notes" className="text-gray-700">
                  Assignment Notes (Optional)
                </Label>
              </div>

              <Textarea
                id="notes"
                className="h-25 bg-gray-100"
                placeholder="Describe scope of responsibility or specific authorization levels..."
              />
            </div>
          </form>
        </div>
        <div className="flex gap-2 justify-end border-t-2 border-gray-400 pt-6">
          <Button className="h-11 w-24 text-xg text-gray-600 font-semibold cursor-pointer rounded-lg border border-gray-400">
            Cancel
          </Button>
          <Button className="bg-blue-800 h-11 w-44 font-semibold rounded-lg text-white cursor-pointer">
            Confirm Assignment
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FormClinicAdmins;
