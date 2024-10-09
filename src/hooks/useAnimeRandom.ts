import { useState } from "react";
import { Anime } from "../types/anime.type";

const useRandomAnime = (animeList: Anime[]) => {
  const [randomAnime, setRandomAnime] = useState<Anime | null>(null);

  const getRandomAnime = () => {
    if (animeList.length > 0) {
      const randomIndex = Math.floor(Math.random() * animeList.length);
      setRandomAnime(animeList[randomIndex]);
    }
  };

  return { randomAnime, getRandomAnime };
};

export default useRandomAnime;
