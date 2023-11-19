import { useState, useEffect } from "react";
import apiClient, { CanceledError, AxiosError } from "../services/api-client";

interface FetchResponse<T> {
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;

        setError((error as AxiosError).message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [endpoint]);
  return { data, error, isLoading };
};

export default useData;
