import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, Lock, Mail, User, UserPlus } from "lucide-react";

function FormAdmins() {
  return (
    <div className="flex flex-col border-2 border-gray-400 shadow rounded-2xl">
      <div className="flex justify-between p-6 bg-blue-50 rounded-t-2xl border-b-2 border-gray-400">
        <div className="flex flex-col">
          <p className="font-bold text-xl">Admin Configuration</p>
          <span>
            Provide the credentials and details for the new system
            administrator.
          </span>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-300">
          <UserPlus className="h-7 w-7 text-white" />
        </div>
      </div>

      <div className="p-6">
        <div className="py-6">
          <form className="space-y-8">
            <div className="flex gap-4 justify-between">
              <div className="w-full">
                <Label htmlFor="email" className="mb-2">
                  Full Name
                </Label>

                <div className="relative bg-gray-100 ">
                  <User
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <Input
                    id="name"
                    type="text"
                    placeholder="e.g. Sarah Mitchell"
                    className="h-11 pl-10 border-2 border-gray-200 "
                  />
                </div>
              </div>

              <div className="w-full">
                <Label htmlFor="email" className="mb-2">
                  Email Address
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

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Security Password</Label>
              </div>

              <div className="relative bg-gray-100">
                <Lock
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="h-11 pl-10 pr-10 border-2 border-gray-200 "
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex gap-2 justify-end border-t-2 border-gray-400 pt-6">
          <Button className="h-11 w-24 text-xg text-gray-600 font-semibold cursor-pointer rounded-lg border border-gray-400">
            Cancel
          </Button>
          <Button className="bg-blue-800 h-11 w-44 font-semibold rounded-lg text-white cursor-pointer">
            Add Administrator
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FormAdmins;
