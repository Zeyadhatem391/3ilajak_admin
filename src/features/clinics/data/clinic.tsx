import { Checkbox } from "@/components/ui/checkbox";
import HoverPrefetchLink from "@/shared/components/hover-prefetch/hover-prefetch-link";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Clinic } from "../api/getAllClinics";
import Image from "next/image";
import { unknown } from "@/assets/images/image";

export const clinicsColumns: ColumnDef<Clinic>[] = [
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
    id: "clinic",
    header: "clinic",
    cell: ({ row }) => {
      const clinic = row.original;

      return (
        <div className="flex items-center gap-3">
          <Image
            src={clinic.images?.[0]?.image_url || unknown}
            alt={clinic.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />

          <div>
            <p className="font-medium">{clinic.name}</p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "phone",
    header: "phone",
    cell: ({ row }) => {
      const clinic = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">{clinic.phone}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "max_doctors",
    header: "Max Doctors",
    cell: ({ row }) => {
      const clinic = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">{clinic.max_doctors}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => {
      const clinic = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">{clinic.address}</p>
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
          <HoverPrefetchLink href={`/dashboard/clinics/${clinic.id}`}>
            <button className="rounded-md cursor-pointer text-blue-800">
              <Eye className="h-6 w-6" />
            </button>
          </HoverPrefetchLink>
          <HoverPrefetchLink href={`/dashboard/clinics/${clinic.id}/update`}>
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

// const image = clinic.images?.[0]?.image_url;

// console.log("image",)
