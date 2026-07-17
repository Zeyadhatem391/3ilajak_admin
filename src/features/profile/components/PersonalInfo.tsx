import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function PersonalInfo() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-5 border-b border-gray-300 flex justify-between items-center">
        <p className="text-xl font-semibold">Personal Information</p>
        <Button className="px-4 py-5 bg-blue-900 text-lg text-white">
          Save Changes
        </Button>
      </div>
    
    <div className="p-5 ">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">FIRST NAME</Label>
            <Input
              id="firstName"
              className="border-2 border-gray-200 h-11 py-3"
              placeholder="Enter first name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">LAST NAME</Label>
            <Input
              id="lastName"
              className="border-2 border-gray-200 h-11 py-3"
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title">PROFESSIONAL TITLE</Label>
            <Input
              id="title"
              className="border-2 border-gray-200 h-11 py-3"
              placeholder="System Administrator"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="employeeId">EMPLOYEE ID</Label>
            <Input
              id="employeeId"
              className="border-2 border-gray-200 h-11 py-3"
              placeholder="EMP-001"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">BIOGRAPHY</Label>
          <Textarea
            id="bio"
            placeholder="Write a short biography..."
            className="min-h-[140px] border-2 border-gray-200 "
          />
        </div>
      </div>
    </div>


    </div>
  );
}
