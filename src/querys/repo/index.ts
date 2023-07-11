import { useQuery } from "@tanstack/react-query";
import api from "../../services/api";

async function getRepos() {
  const { data } = await api.get('/users/werllentrindade/repos');

  return data;
}

export default function useFetchRepos(){
  return useQuery(['repos'], getRepos)
}