// "use client";

// import { Trash2 } from "lucide-react";
// import { deleteAdmin } from "../api/deleteAdmin";

// interface DeleteAdminButtonProps {
//   adminId: number;
// }

// export default function DeleteAdminButton({ adminId }: DeleteAdminButtonProps) {
//   async function handleDelete() {
//     try {
//       await deleteAdmin(adminId);

//       console.log("Admin deleted successfully");
//     } catch (error) {
//       console.error("Delete admin error:", error);
//     }
//   }

//   return (
//     <button
//       type="button"
//       onClick={handleDelete}
//       className="rounded-md cursor-pointer text-red-900"
//     >
//       <Trash2 className="h-6 w-6" />
//     </button>
//   );
// }
