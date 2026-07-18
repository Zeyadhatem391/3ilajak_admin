import { profile } from "@/assets/images/image";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";
interface Admins {
  id: number;
  name: string;
  email: string;
  image: string | StaticImageData;
  role: string;
  clinicAssignment: string;
  lastLogin: string;
  status: "active" | "inactive";
}

export const adminsColumns: ColumnDef<Admins>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    id: "name",
    header: "ADMIN NAME",
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
    accessorKey: "role",
    header: "ROLE",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">{patient.role}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "clinicAssignment",
    header: "CLINIC ASSIGNMENT",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">{patient.clinicAssignment}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "lastLogin",
    header: "LAST LOGIN",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">{patient.lastLogin}</p>
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
export const admins: Admins[] = [
  {
    id: 1,
    name: "Ahmed Ali",
    email: "ahmed.ali@example.com",
    image: profile,
    role: "clinc",
    clinicAssignment: "Downtown Wellness Center",
    lastLogin: "Oct 25,2023",
    status: "active",
  },
  {
    id: 2,
    name: "Sara Mohamed",
    email: "sara.m@example.com",
    image: profile,
    role: "clinc",
    clinicAssignment: "Downtown Wellness Center",
    lastLogin: "Oct 25,2023",
    status: "inactive",
  },
  {
    id: 3,
    name: "Omar Hassan",
    email: "omar.h@example.com",
    image: profile,
    role: "clinc",
    clinicAssignment: "Downtown Wellness Center",
    lastLogin: "Oct 25,2023",
    status: "active",
  },
  {
    id: 4,
    name: "Mona Ibrahim",
    email: "mona.i@example.com",
    image: profile,
    role: "clinc",
    clinicAssignment: "Downtown Wellness Center",
    lastLogin: "Oct 25,2023",
    status: "active",
  },
  {
    id: 5,
    name: "Youssef Adel",
    email: "youssef.a@example.com",
    image: profile,
    role: "clinc",
    clinicAssignment: "Downtown Wellness Center",
    lastLogin: "Oct 25,2023",
    status: "inactive",
  },
];
