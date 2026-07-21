import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IdCard, IdCardIcon, IdCardLanyard, Mail, Rainbow, User } from "lucide-react";

function IdentityDoctor() {
  return (
    <div className="flex flex-col bg-white shadow rounded-2xl p-6">
      <div className="flex gap-1.5 items-center">
        <IdCard className="w-7 h-7 text-blue-700" />
        <span className="font-bold text-lg">Identity & Profile</span>
      </div>
      <div className="py-6">
        <form className="space-y-8">
          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <Label htmlFor="name" className="mb-2">
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
                  placeholder="Dr. Jonathan Smith"
                  className="h-11 pl-10 border-2 border-gray-200 "
                />
              </div>
            </div>

            <div className="w-full">
              <Label htmlFor="spec" className="mb-2">
                SPECIALIZATION
              </Label>

              <div className="relative bg-gray-100 ">
                <Rainbow
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="spec"
                  type="text"
                  placeholder="Select SPECIALIZATION"
                  className="h-11 pl-10 border-2 border-gray-200 "
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <Label htmlFor="n_id" className="mb-2">
                NATIONAL ID / PASSPORT
              </Label>

              <div className="relative bg-gray-100 ">
                <IdCardIcon
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="n_id"
                  type="text"
                  placeholder="ID-99283-X"
                  className="h-11 pl-10 border-2 border-gray-200 "
                />
              </div>
            </div>

            <div className="w-full">
              <Label htmlFor="m_l" className="mb-2">
                MEDICAL LICENSE NUMBER
              </Label>

              <div className="relative bg-gray-100 ">
                <IdCardLanyard
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="m_l"
                  type="email"
                  placeholder="MLN-88776655"
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

export default IdentityDoctor;
