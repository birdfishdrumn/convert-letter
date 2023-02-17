import { SEARCH_RESULT } from "@/types/SearchResult";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const useFetchImage = () => {
  const [searchRes, setSearchRes] = useState<SEARCH_RESULT[]>();
  const [loading, setLoading] = useState(false);

  const fetchSearchResult = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/searchBingImage");
      setSearchRes(res.data);
    } catch (error) {
      throw new Error("no data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResult();
  }, []);

  console.log({ searchRes });

  return { searchRes, loading };
};
