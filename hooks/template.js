import { useCallback } from "react";
import useSWR, { mutate } from "swr";
import api from "../config/api";

// For Multiple Data Case
export const useTemplates = () => {
  const pathName = "/template/";
  const { data = [], error } = useSWR(pathName);

  const onAdd = useCallback(async (data) => {
    try {
      const { data: res } = await api.post(pathName, data);
      if (res) {
        mutate(pathName);
      } else {
        console.log(error);
      }
    } catch (err) {
      console.log(err);
    }
  });

  return {
    data,
    onAdd,
  };
};
