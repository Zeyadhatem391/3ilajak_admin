import { profile } from "@/assets/images/image";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";
interface Doctors {
  id: number;
  name: string;
  email: string;
  image: string | StaticImageData;
  specializantion: string;
  assignedClinic: string;
  licenseNumber: string;
  status: "active" | "inactive";
}

export const doctorsColumns: ColumnDef<Doctors>[] = [
  {
    id: "name",
    header: "DOCTOR NAME",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div className="flex items-center gap-3">
          <Image
            src={patient.image}
            alt={patient.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />

          <div>
            <p className="font-medium">{patient.name}</p>
            <p className="text-sm text-gray-700">{patient.email}</p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "specializantion",
    header: "SPECIALIZATION",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">
            #PAT-{patient.specializantion}
          </p>
        </div>
      );
    },
  },

  {
    accessorKey: "assignedClinic",
    header: "ASSIGNED CLINIC",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">{patient.assignedClinic}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "licenseNumber",
    header: "LICENSE NUMBER",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">{patient.licenseNumber}</p>
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

  {
    id: "actions",
    header: "ACTIONS",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <button className="rounded-md p-2  ">
            <Eye className="h-6 w-6 text-blue-900" />
          </button>
          <button className="rounded-md p-2  ">
            <Pencil className="h-6 w-6" />
          </button>
        </div>
      );
    },
  },
];
export const doctors: Doctors[] = [
  {
    id: 1,
    name: "Ahmed Ali",
    email: "ahmed.ali@example.com",
    image: profile,
    specializantion: "882913",
    assignedClinic: "clinic",
    licenseNumber: "2345678",
    status: "active",
  },
  {
    id: 2,
    name: "Sara Mohamed",
    email: "sara.m@example.com",
    image: profile,
    specializantion: "1002",
    assignedClinic: "clinic",
    licenseNumber: "2345678",
    status: "inactive",
  },
  {
    id: 3,
    name: "Omar Hassan",
    email: "omar.h@example.com",
    image: profile,
    specializantion: "1003",
    assignedClinic: "clinic",
    licenseNumber: "2345678",
    status: "active",
  },
  {
    id: 4,
    name: "Mona Ibrahim",
    email: "mona.i@example.com",
    image: profile,
    specializantion: "1004",
    assignedClinic: "clinic",
    licenseNumber: "2345678",
    status: "active",
  },
  {
    id: 5,
    name: "Youssef Adel",
    email: "youssef.a@example.com",
    image: profile,
    specializantion: "1005",
    assignedClinic: "clinic",
    licenseNumber: "2345678",
    status: "inactive",
  },
];
