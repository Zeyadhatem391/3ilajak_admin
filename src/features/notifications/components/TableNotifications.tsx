"use client";
import DataTable from "@/shared/components/data-table/DataTable";
import DataTablePagination from "@/shared/components/data-table/DataTablePagination";
import { notifications, notificationsColumns } from "../data/notifications";

function TableNotifications() {
  return (
    <div>
      <DataTable columns={notificationsColumns} data={notifications} />

      <DataTablePagination page={1} totalPages={10} />
    </div>
  );
}

export default TableNotifications;
