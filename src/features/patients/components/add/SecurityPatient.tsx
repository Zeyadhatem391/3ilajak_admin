import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, LockKeyhole, LockOpen } from "lucide-react";

function SecurityPatient() {
  return (
    <div className="flex flex-col border-2 border-gray-400 shadow rounded-xl">
      <div className="px-7 py-4 bg-blue-50 rounded-t-xl border-gray-500 border-b-2">
        <div className="flex gap-2 items-center">
          <LockKeyhole className="text-blue-700 w-6 h-6" />
          <span className="font-bold text-xl ">Account Security</span>
        </div>
      </div>

      <div className="p-6">
        <div className="py-6">
          <form className="space-y-8">
            <div className="flex gap-4 justify-between">
              <div className="w-full">
                <Label htmlFor="password" className="mb-2">
                  Account Password
                </Label>

                <div className="relative bg-gray-100 ">
                  <Lock
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    className="h-11 pl-10 border-2 border-gray-200 "
                  />
                </div>
              </div>

              <div className="w-full">
                <Label htmlFor="password_con" className="mb-2">
                  CONFIRM PASSWORD
                </Label>

                <div className="relative bg-gray-100 ">
                  <LockOpen
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <Input
                    id="password_con"
                    type="password"
                    placeholder="********"
                    className="h-11 pl-10 border-2 border-gray-200 "
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SecurityPatient;
