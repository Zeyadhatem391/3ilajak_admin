export default function Statistics() {
  return (
    <div className="flex justify-around ">
      <div className="bg-white shadow p-4 flex flex-col gap-2 text-center">
        <div className="text-5xl font-bold text-blue-700">94</div>
        <span className="text-md">Clinics Managed</span>
      </div>

      <div className="bg-white shadow p-4 flex flex-col gap-2 text-center">
        <div className="text-5xl font-bold text-green-700">1.2K</div>
        <span className="text-md">Active Doctors</span>
      </div>
    </div>
  );
}
