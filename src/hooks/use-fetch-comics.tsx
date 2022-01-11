import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "~/services/api";

type FetchComicResponse = {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: [
      {
        id: number;
        digitalId: number;
        title: string;
      }
    ];
  };
};

const fetchComics = async (): Promise<FetchComicResponse> => {
  const { data } = await api.get<FetchComicResponse>("/comics");

  return data;
};

export function useFetchComics() {
  return useQuery<FetchComicResponse, AxiosError>(["comics"], fetchComics);
}
