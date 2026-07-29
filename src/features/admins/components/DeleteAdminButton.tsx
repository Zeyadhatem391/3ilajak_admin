"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteAdmin } from "../api/deleteAdmin";

interface DeleteAdminButtonProps {
  adminId: number;
}

export default function DeleteAdminButton({ adminId }: DeleteAdminButtonProps) {
  const router = useRouter();

  async function handleDelete() {
    try {
      await deleteAdmin(adminId);

      console.log("Admin deleted successfully");

      router.refresh();
    } catch (error) {
      console.error("Delete admin error:", error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="rounded-md cursor-pointer text-red-900"
    >
      <Trash2 className="h-6 w-6" />
    </button>
  );
}
