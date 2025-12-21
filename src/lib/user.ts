import type { IUser } from "../types/IUser";

const BASE_URL = "https://jsonplaceholder.typicode.com"

export async function fetchUsers () {
    try {
        const targetUrl = `${BASE_URL}/users`
        const result = await fetch(targetUrl, {
            method: "GET"
        });

        const data = await result.json() as IUser[];

        return {data, error: null}
    } catch (error) {
        console.log(error);

        return {error, data: null};
    }
}