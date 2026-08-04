"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteClinic } from "../api/deleteClinic";

interface DeleteClinicButtonProps {
  clinicId: number;
}

export default function DeleteClinicButton({ clinicId }: DeleteClinicButtonProps) {
  const router = useRouter();

  async function handleDelete() {
    try {
      await deleteClinic(clinicId);

      console.log("Clinic deleted successfully");

      router.refresh();
    } catch (error) {
      console.error("Delete clinic error:", error);
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
