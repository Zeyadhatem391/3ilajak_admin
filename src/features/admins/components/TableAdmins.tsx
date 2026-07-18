"use client";

import { useState } from "react";

import DataTable from "@/shared/components/data-table/DataTable";
import DataTablePagination from "@/shared/components/data-table/DataTablePagination";
import ToolbarTable from "./ToolbarTable";
import { admins, adminsColumns } from "../data/admins";

type Filter = "All" | "System" | "Clinic";

function TableAdmins() {
  const [filter, setFilter] = useState<Filter>("All");

  return (
    <div>
      <ToolbarTable value={filter} onChange={setFilter} />

      <DataTable columns={adminsColumns} data={admins} />

      <DataTablePagination page={1} totalPages={10} />
    </div>
  );
}

export default TableAdmins;
