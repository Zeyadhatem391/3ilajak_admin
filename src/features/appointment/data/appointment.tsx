import { ColumnDef } from "@tanstack/react-table";

interface Appointment {
  id: number;
  patient: string;
  doctor: string;
  clinic: string;
  date: string;
  status: "active" | "inactive";
}

export const appointmentColumns: ColumnDef<Appointment>[] = [
  {
    id: "patient",
    header: "Patient",
    cell: ({ row }) => {
      const patient = row.original;

      return <p className="font-semibold">{patient.patient}</p>;
    },
  },

  {
    id: "doctor",
    header: "doctor",
    cell: ({ row }) => {
      const patient = row.original;

      return <p className="font-semibold">{patient.doctor}</p>;
    },
  },

  {
    id: "clinic",
    header: "clinic",
    cell: ({ row }) => {
      const patient = row.original;

      return <p className="font-medium">{patient.clinic}</p>;
    },
  },

  {
    accessorKey: "date",
    header: "date",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">{patient.date}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <span
          className={`rounded-full px-4 py-1 font-medium ${
            status === "active"
              ? "bg-green-400 text-green-900"
              : "bg-red-400 text-red-900"
          }`}
        >
          {status}
        </span>
      );
    },
  },
];
export const appointment: Appointment[] = [
  {
    id: 1,
    patient: "Ahmed Ali",
    doctor: "Zeyad Hatem",
    clinic: "Al-Khair Hospital",
    date: "Oct 21,2023",
    status: "active",
  },
  {
    id: 2,
    patient: "Ahmed Ali",
    doctor: "Zeyad Hatem",
    clinic: "Al-Khair Hospital",
    date: "Oct 21,2023",
    status: "inactive",
  },
  {
    id: 3,
    patient: "Ahmed Ali",
    doctor: "Zeyad Hatem",
    clinic: "Al-Khair Hospital",
    date: "Oct 21,2023",
    status: "active",
  },
  {
    id: 4,
    patient: "Ahmed Ali",
    doctor: "Zeyad Hatem",
    clinic: "Al-Khair Hospital",
    date: "Oct 21,2023",
    status: "active",
  },
  {
    id: 5,
    patient: "Ahmed Ali",
    doctor: "Zeyad Hatem",
    clinic: "Al-Khair Hospital",
    date: "Oct 21,2023",
    status: "inactive",
  },
];
