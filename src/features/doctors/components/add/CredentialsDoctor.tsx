import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, User, UserLock } from "lucide-react";

function CredentialsDoctor() {
  return (
    <div className="flex flex-col bg-white shadow rounded-2xl p-6 border-l-4 border-red-800">
      <div className="flex gap-1.5 items-center">
        <UserLock className="w-7 h-7 text-red-700" />
        <span className="font-bold text-lg">Credentials & Access</span>
      </div>
      <div className="py-6">
        <form className="space-y-8">
          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <Label htmlFor="password" className="mb-2">
                PASSWORD
              </Label>

              <div className="relative bg-gray-100 ">
                <User
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
                <Mail
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
  );
}

export default CredentialsDoctor;
