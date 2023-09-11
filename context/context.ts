import { apiURLs } from "@/constants";
import useSWR from "swr";

export const useUser = (gmail:string)=> {

  const fetcher = (url: string, gmail: string) =>
    fetch(url, { headers: { gmail: gmail } }).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    [apiURLs.getUser, gmail],
    ([url, gmail]) => fetcher(url, gmail),
    { keepPreviousData: true}
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
}


export const useCompetition = ()=>{
    const fetcher = (url:string)=> 
        fetch(url).then((res) => res.json());

    const {data, error, isLoading} = useSWR(apiURLs.getAllPlayers, fetcher);

    return {
        allPlayers: data,
        isAllPlayersLoading: isLoading,
        isErrorInAllPlayers: error
};}
