"use client";
import DataTable from "@/shared/components/data-table/DataTable";
import { productColumns, products } from "../data/patients";
import DataTablePagination from "@/shared/components/data-table/DataTablePagination";

function TablePatients() {
  return (
    <div>
      <DataTable columns={productColumns} data={products} />

      <div className="flex items-center justify-between border border-gray-300 px-6 py-4 bg-blue-100/50 rounded-b-xl" />
    </div>
  );
}

export default TablePatients;
