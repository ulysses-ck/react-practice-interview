import { useEffect, useState } from "react";
import { useFetchUsers } from "../hooks/use-fetch-users";
import type { IUser } from "../types/IUser";

export function Kata7() {
  const { data, error, fetchData, isLoading } = useFetchUsers();
  const [filter, setFilter] = useState<string>("");
  const [users, setUsers] = useState<Array<IUser> | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);
    setUsers(data);

    return () => {
      controller.abort();
      setUsers([]);
    };
  }, []);

  useEffect(() => {
    const filterData = () => {
      if (filter && users) {
        setUsers((prevUsers) =>
          prevUsers
            ? prevUsers.filter(
                (el) => el.name.toLowerCase().includes(filter.toLowerCase())
              )
            : []
        );
      } else {
        setUsers(data);
      }
    };

    const setData = setTimeout(() => {
      filterData();
    }, 500)

    return () => clearTimeout(setData);
  }, [filter]);

  return (
    <div>
      <h1>Data</h1>

      <div>
        <label htmlFor="input-filter">Filter:</label>
        <input
          type="text"
          name="input-filter"
          id="input-filter"
          value={filter}
          onChange={(e) => setFilter(e.currentTarget.value)}
        />
      </div>

      {isLoading && <h3>Loading...</h3>}
      {users?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      {error && <h2>{error}</h2>}
    </div>
  );
}
