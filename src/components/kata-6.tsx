import { useEffect } from "react";
import { useFetchUsers } from "../hooks/use-fetch-users";

export function Kata6() {
  const { data, error, fetchData, isLoading, setData } = useFetchUsers();

  useEffect(() => {
    (async () => {
      await fetchData();
    })();

    return () => {
      setData(null);
    };
  }, []);

  return (
    <div>
      data:
      {isLoading ? (
        <h3>Loading...</h3>
      ) : data && data.length > 0 ? (
        <div>
          {data.map((el) => (
            <div key={el.id}>{el.name}</div>
          ))}
        </div>
      ) : (
        <h2>{error}</h2>
      )}
    </div>
  );
}
