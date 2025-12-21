import type { IUser } from "../types/IUser";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchUsers(signal?: AbortSignal) {
  try {
    const targetUrl = `${BASE_URL}/users`;
    const result = await fetch(targetUrl, {
      method: "GET",
      signal,
    });

    if (!result.ok) throw new Error("Fetch failed");

    const data = (await result.json()) as IUser[];

    return { data, error: null };
  } catch (error: any) {
    if (error.name === "AbortError") return { data: null, error: null };

    return { error: error.message, data: null };
  }
}
