import { profile } from "@/assets/images/image";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface Clinics {
  id: number;
  name: string;
  admin: string;
  address: string;
}

export const clinicsColumns: ColumnDef<Clinics>[] = [
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
    id: "id",
    header: "ID",
    cell: ({ row }) => {
      const clinic = row.original;

      return (
        <div className="bg-blue-100 pl-3 py-1 rounded-lg">#CL-{clinic.id}</div>
      );
    },
  },
  {
    id: "name",
    header: "Clinic Name",
    cell: ({ row }) => {
      const patient = row.original;

      return <p className="font-semibold text-lg">{patient.name}</p>;
    },
  },

  {
    accessorKey: "admin",
    header: "Admin",
    cell: ({ row }) => {
      const patient = row.original;

      return <p className="text-gray-700 ">{patient.admin}</p>;
    },
  },

  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">{patient.address}</p>
        </div>
      );
    },
  },

  {
    id: "actions",
    header: "ACTIONS",
    cell: ({ row }) => {
      const clinic = row.original;
      return (
        <div className="flex items-center gap-2.5">
          <button className="rounded-md cursor-pointer  text-blue-800">
            <Eye className="h-6 w-6" />
          </button>
          <Link href={`/dashboard/clinics/${clinic.id}/update`}>
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
export const clinics: Clinics[] = [
  {
    id: 1,
    name: "Al-Khair Hospital",
    admin: "Ahmed Ali",
    address: "Street 5, Ahmed Ali",
  },
  {
    id: 2,
    name: "Al-Khair Hospital",
    admin: "Ahmed Ali",
    address: "Street 5, Ahmed Ali",
  },
  {
    id: 3,
    name: "Al-Khair Hospital",
    admin: "Ahmed Ali",
    address: "Street 5, Ahmed Ali",
  },
  {
    id: 4,
    name: "Al-Khair Hospital",
    admin: "Ahmed Ali",
    address: "Street 5, Ahmed Ali",
  },
  {
    id: 5,
    name: "Al-Khair Hospital",
    admin: "Ahmed Ali",
    address: "Street 5, Ahmed Ali",
  },
];
