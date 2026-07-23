import { profile } from "@/assets/images/image";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
interface ClinicAdmins {
  id: number;
  name: string;
  email: string;
  image: string | StaticImageData;
  clinic: string;
}

export const clinicAdminsColumns: ColumnDef<ClinicAdmins>[] = [
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
            <p className="font-medium text-lg">{patient.name}</p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-lg">{patient.email}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "clinic",
    header: "clinic",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-lg">{patient.clinic}</p>
        </div>
      );
    },
  },

  {
    id: "actions",
    header: "ACTIONS",
    cell: ({ row }) => {
      const clinicAdmins = row.original;
      return (
        <div className="flex items-center gap-2.5">
          <Link href={`/dashboard/clinic-admins/${clinicAdmins.id}/update`}>
            <button className="rounded-md cursor-pointer">
              <Pencil className="h-6 w-6" />
            </button>
          </Link>
          <button className="rounded-md cursor-pointer  text-red-900">
            <Trash2 className="h-6 w-6" />
          </button>
        </div>
      );
    },
  },
];
export const clinicAdmins: ClinicAdmins[] = [
  {
    id: 1,
    name: "Ahmed Ali",
    email: "ahmed.ali@example.com",
    image: profile,
    clinic: "active",
  },
  {
    id: 2,
    name: "Sara Mohamed",
    email: "sara.m@example.com",
    image: profile,
    clinic: "inactive",
  },
  {
    id: 3,
    name: "Omar Hassan",
    email: "omar.h@example.com",
    image: profile,
    clinic: "active",
  },
  {
    id: 4,
    name: "Mona Ibrahim",
    email: "mona.i@example.com",
    image: profile,
    clinic: "active",
  },
  {
    id: 5,
    name: "Youssef Adel",
    email: "youssef.a@example.com",
    image: profile,
    clinic: "inactive",
  },
];
