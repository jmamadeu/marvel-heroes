import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { ComicProps } from "~/models/comic";
import { api } from "~/services/api";

type FetchComicResponse = {
  attributionText: string;
  comicContent: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<ComicProps>;
  };
};

const fetchComics = async (): Promise<FetchComicResponse> => {
  const { data } = await api.get("/comics");

  return { ...data, comicContent: data.data };
};

export function useFetchComics() {
  return useQuery<FetchComicResponse, AxiosError>(["comics"], fetchComics);
}
