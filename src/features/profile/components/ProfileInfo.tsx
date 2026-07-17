import { Mail, MapPin, Pencil, Phone } from "lucide-react";

function ProfileInfo() {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Contact Information
        </h2>

        <button className="rounded-md p-2 transition hover:bg-gray-100">
          <Pencil className="h-5 w-5 text-blue-500" />
        </button>
      </div>

      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-2">
            <Mail className="h-5 w-5 text-gray-600" />
          </div>

          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-sm font-medium text-gray-900">
              elias.vance@example.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-2">
            <Phone className="h-5 w-5 text-gray-600" />
          </div>

          <div>
            <p className="text-xs text-gray-500">Phone</p>
            <p className="text-sm font-medium text-gray-900">
              +1 (555) 123-4567
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-2">
            <MapPin className="h-5 w-5 text-gray-600" />
          </div>

          <div>
            <p className="text-xs text-gray-500">Location</p>
            <p className="text-sm font-medium text-gray-900">
              San Francisco, CA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
