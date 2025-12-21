import { useState } from "react";
import type { IUser } from "../types/IUser";
import { fetchUsers } from "../lib/user";

export function useFetchUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IUser[] | null>(null);
  const [error, setError] = useState<string>("");

  const fetchData = async () => {
    setIsLoading(true)
    const { data: dataUsers, error: errorUsers } = await fetchUsers();

    if (dataUsers && dataUsers.length > 0) {
      setData(dataUsers);
    } else if (data === null && errorUsers !== null) {
      setError("Cannot fetch data");
    }
    setIsLoading(false);
  };

  return {
    setData,
    data,
    isLoading,
    error,
    fetchData,
  };
}
