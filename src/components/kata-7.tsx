import { useEffect, useMemo, useState } from "react";
import { useFetchUsers } from "../hooks/use-fetch-users";
import { useDebounce } from "../hooks/use-debounce";

export function Kata7() {
  const { data, error, fetchData, isLoading } = useFetchUsers();
  const [filter, setFilter] = useState<string>("");

  const debouncedFilter = useDebounce(filter, 500);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  const filteredUsers = useMemo(() => {
    if (!data) return [];
    if (!debouncedFilter) return data;

    return data.filter((user) =>
      user.name.toLowerCase().includes(debouncedFilter.toLowerCase())
    );
  }, [data, debouncedFilter]);

  return (
    <div>
      <h1>Users</h1>

      <div>
        <label htmlFor="input-filter">Search:</label>
        <input
          type="text"
          name="input-filter"
          id="input-filter"
          value={filter}
          placeholder="Search by name..."
          onChange={(e) => setFilter(e.currentTarget.value)}
        />
      </div>

      {isLoading && <h3>Loading...</h3>}
      {filteredUsers.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      {error && <h2>{error}</h2>}
    </div>
  );
}
