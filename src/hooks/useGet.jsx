import { useState, useEffect } from "react";

export const useGet = (endpoint, token) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);

    const options = {
      headers: token
        ? {
            Authorization: `Bearer: ${token}`,
          }
        : {},
    };

    fetch(endpoint, options)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [endpoint, token]);

  return { data, error, isLoading };
};
