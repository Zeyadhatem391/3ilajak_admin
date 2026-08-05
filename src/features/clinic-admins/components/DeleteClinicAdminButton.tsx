"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteClinicAdmin } from "../api/deleteClinicAdmin";

interface DeleteAdminButtonProps {
  clinicAdminId: number;
}

export default function DeleteClinicAdminButton({
  clinicAdminId,
}: DeleteAdminButtonProps) {
  const router = useRouter();

  async function handleDelete() {
    try {
      await deleteClinicAdmin(clinicAdminId);

      console.log("Clinic Admin deleted successfully");

      router.refresh();
    } catch (error) {
      console.error("Delete clinic admin error:", error);
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
