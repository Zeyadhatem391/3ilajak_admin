"use client";

import DataTable from "@/shared/components/data-table/DataTable";
import DataTablePagination from "@/shared/components/data-table/DataTablePagination";
import { admins, adminsColumns } from "../data/admins";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

function TableAdmins() {
  return (
    <div>
      <div className="bg-white p-6 shadow flex justify-between items-center border border-gray-300 rounded-t-xl">
        <h1 className="text-lg font-bold">Admin Directory</h1>

        <div className="relative w-full max-w-100">
          <Search className="absolute top-1/2 left-3 h-5 w-4 -translate-y-1/2 text-gray-900" />

          <Input
            placeholder="Search Admins by name"
            className="pl-10 bg-gray-50 border-gray-200 focus-visible:ring-1"
          />
        </div>
      </div>

      <DataTable columns={adminsColumns} data={admins} />

      <DataTablePagination page={1} totalPages={10} />
    </div>
  );
}

export default TableAdmins;
