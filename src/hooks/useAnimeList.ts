import { useState, useEffect } from "react";
import { Anime } from "../types/anime.type";
import { API_URL } from "../consts";

const useAnimeList = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);

  useEffect(() => {
    fetchAnimeList();
  }, []);

  const fetchAnimeList = async () => {
    try {
      const response = await fetch(API_URL);
      console.log(API_URL)
      const data = await response.json();
      setAnimeList(
        data.data.map((anime: Anime) => ({
          mal_id: anime.mal_id,
          title: anime.title,
          image_url: anime.images.jpg.image_url,
          synopsis: anime.synopsis,
        }))
      );
    } catch (error) {
      console.error("Error fetching anime list:", error);
    }
  };

  return { animeList };
};

export default useAnimeList;
