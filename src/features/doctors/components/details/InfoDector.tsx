import { Cake, FileUser, Mail, Map, Phone } from "lucide-react";

function InfoDector() {
  return (
    <div className="bg-white rounded-xl shadow p-7 flex flex-col gap-7 ">
      <div className="flex gap-1.5 items-center">
        <FileUser className="w-6 h-6 text-blue-700" />
        <p className="text-xl font-bold">Contact Information</p>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex gap-3 items-center">
          <div className="bg-blue-300 p-2 rounded-xl ">
            <Phone className="text-7 h-7 text-blue-800" />
          </div>
          <div className="flex flex-col ">
            <p className="font-semibold text-gray-700 text-sm">Phone Number</p>
            <span className="font-semibold ">+966 50 123 4567</span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="bg-blue-300 p-2 rounded-xl ">
            <Mail className="text-7 h-7 text-blue-800" />
          </div>
          <div className="flex flex-col ">
            <p className="font-semibold text-gray-700 text-sm">Email Address</p>
            <span className="font-semibold ">s.alfayed@3ilajak.com</span>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <div className="bg-blue-300 p-2 rounded-xl ">
            <Map className="text-7 h-7 text-blue-800" />
          </div>
          <div className="flex flex-col ">
            <p className="font-semibold text-gray-700 text-sm">Address</p>
            <span className="font-semibold ">
              42nd Healthcare Ave, Medical District, Riyadh, KSA
            </span>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <div className="bg-blue-300 p-2 rounded-xl ">
            <Cake className="text-7 h-7 text-blue-800" />
          </div>
          <div className="flex flex-col ">
            <p className="font-semibold text-gray-700 text-sm">Date of Birth</p>
            <span className="font-semibold ">12 Oct 1985 (38 Years)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoDector;
