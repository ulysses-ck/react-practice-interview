import { useEffect } from "react";
import { useFetchUsers } from "../hooks/use-fetch-users";

export function Kata6() {
  const { data, error, fetchData, isLoading } = useFetchUsers();

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      data:
      {isLoading && <h3>Loading...</h3>}
      {data?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      {error && <h2>{error}</h2>}
    </div>
  );
}
