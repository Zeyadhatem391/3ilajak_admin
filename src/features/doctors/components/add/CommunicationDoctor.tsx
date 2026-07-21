import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IdCardLanyard, Mail, User } from "lucide-react";

function CommunicationDoctor() {
  return (
    <div className="flex flex-col bg-white shadow rounded-2xl p-6">
      <div className="flex gap-1.5 items-center">
        <IdCardLanyard className="w-7 h-7 text-blue-700" />
        <span className="font-bold text-lg">Communication</span>
      </div>
      <div className="py-6">
        <form className="space-y-8">
          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <Label htmlFor="phone" className="mb-2">
                PHONE NUMBER
              </Label>

              <div className="relative bg-gray-100 ">
                <User
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="phone"
                  type="text"
                  placeholder="+20 2 555 0111"
                  className="h-11 pl-10 border-2 border-gray-200 "
                />
              </div>
            </div>

            <div className="w-full">
              <Label htmlFor="email" className="mb-2">
                EMAIL ADDRESS
              </Label>

              <div className="relative bg-gray-100 ">
                <Mail
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="email"
                  type="email"
                  placeholder="dr.smith@3ilajak.com"
                  className="h-11 pl-10 border-2 border-gray-200 "
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <Label htmlFor="area" className="mb-2">
              PHYSICAL ADDRESS
            </Label>

            <div className="relative bg-gray-100 ">
              <Textarea id="area" placeholder="Street name, City, State, ZIP" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommunicationDoctor;
