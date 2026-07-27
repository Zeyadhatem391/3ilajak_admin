
export type LoginInput = {
    email: string;
    password: string;
};

export async function loginAdmin(data: LoginInput) {
    const res = await fetch(
        "https://tighten-lively-mud.ngrok-free.dev/api/login",
        {
            method: "POST",
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