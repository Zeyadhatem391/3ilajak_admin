
export type updateAdminInput = {
    name: string;
    email: string;
    password: string;
    password_con: string;
};

export async function updateAdmin(data: updateAdminInput, { id }: { id: number }) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/Admin-update/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        },
    );

    if (!res.ok) {
        throw new Error("Login failed");
    }

    const result = await res.json();

    return result;
}