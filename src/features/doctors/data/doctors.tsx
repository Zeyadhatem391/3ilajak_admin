import { unknown } from "@/assets/images/image";
import HoverPrefetchLink from "@/shared/components/hover-prefetch/hover-prefetch-link";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Doctors {
  id: number;
  name: string;
  email: string;
  image: string | StaticImageData;
  medicalLicense: string;
  nationalID: string;
  phone: string;
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
    accessorKey: "medicalLicense",
    header: "Med. Lic.",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">#M.L-{patient.medicalLicense}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "nationalID",
    header: "National ID",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">{patient.nationalID}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "phone",
    header: "phone",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">{patient.phone}</p>
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
      const doctor = row.original;
      return (
        <div className="flex items-center gap-2.5">
          <HoverPrefetchLink href={`/dashboard/doctors/${doctor.id}`}>
            <button className="rounded-md cursor-pointer  text-blue-800">
              <Eye className="h-6 w-6" />
            </button>
          </HoverPrefetchLink>
          <HoverPrefetchLink href={`/dashboard/doctors/${doctor.id}/update`}>
            <button className="rounded-md cursor-pointer">
              <Pencil className="h-6 w-6" />
            </button>
          </HoverPrefetchLink>
          <button className="rounded-md cursor-pointer  text-red-900">
            <Trash2 className="h-6 w-6" />
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
    image: unknown,
    medicalLicense: "882913",
    nationalID: "3051115123557",
    phone: "2345678",
    status: "active",
  },
  {
    id: 2,
    name: "Sara Mohamed",
    email: "sara.m@example.com",
    image: unknown,
    medicalLicense: "1002",
    nationalID: "3051115123557",
    phone: "2345678",
    status: "inactive",
  },
  {
    id: 3,
    name: "Omar Hassan",
    email: "omar.h@example.com",
    image: unknown,
    medicalLicense: "1003",
    nationalID: "3051115123557",
    phone: "2345678",
    status: "active",
  },
  {
    id: 4,
    name: "Mona Ibrahim",
    email: "mona.i@example.com",
    image: unknown,
    medicalLicense: "1004",
    nationalID: "3051115123557",
    phone: "2345678",
    status: "active",
  },
  {
    id: 5,
    name: "Youssef Adel",
    email: "youssef.a@example.com",
    image: unknown,
    medicalLicense: "1005",
    nationalID: "3051115123557",
    phone: "2345678",
    status: "inactive",
  },
];
