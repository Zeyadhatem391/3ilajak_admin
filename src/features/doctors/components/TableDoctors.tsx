"use client";

import DataTable from "@/shared/components/data-table/DataTable";
import DataTablePagination from "@/shared/components/data-table/DataTablePagination";
import { ArrowDownToLine, EllipsisVertical } from "lucide-react";
import { doctors, doctorsColumns } from "../data/doctors";

function TableDoctors() {
  return (
    <div>
      <div className="bg-white p-6 shadow flex justify-between items-center border border-gray-300 rounded-t-xl">
        <h1 className="font-bold text-xl">Registered Professionals</h1>
        <div className="flex gap-3">
          <ArrowDownToLine className="w-5 h-5 text-gray-600" />
          <EllipsisVertical className="w-5 h-5 text-gray-600" />
        </div>
      </div>
      <DataTable columns={doctorsColumns} data={doctors} />

      <DataTablePagination page={1} totalPages={10} />
    </div>
  );
}

export default TableDoctors;
