"use client";
import DataTable from "@/shared/components/data-table/DataTable";
import DataTablePagination from "@/shared/components/data-table/DataTablePagination";
import { appointment, appointmentColumns } from "../data/appointment";

function AppointmentTable() {
  return (
    <div>
      <DataTable columns={appointmentColumns} data={appointment} />

      <DataTablePagination page={1} totalPages={10} />
    </div>
  );
}

export default AppointmentTable;
