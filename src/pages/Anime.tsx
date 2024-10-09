import { useState } from 'react'
import useAnimeList from '../hooks/useAnimeList'
import useRandomAnime from '../hooks/useAnimeRandom'
import './Anime.css'

const AnimeAPI: React.FC = () => {
  const { animeList } = useAnimeList()
  const { randomAnime, getRandomAnime } = useRandomAnime(animeList)
  const [hoveredAnime, setHoveredAnime] = useState<number | null>(null)

  return (
    <div className="anime-api-container">
      <h1>API de Anime</h1>
      
      <div className="anime-sections">
        <div className="anime-list">
          <h2>Top 10 Anime</h2>
          <ul>
            {animeList.map((anime) => (
              <li 
                key={anime.mal_id}
                onMouseEnter={() => setHoveredAnime(anime.mal_id)}
                onMouseLeave={() => setHoveredAnime(null)}
              >
                <img src={anime.image_url} alt={anime.title} />
                {hoveredAnime === anime.mal_id ? (
                  <div className="anime-synopsis">{anime.synopsis}</div>
                ) : (
                  <div className="anime-title">{anime.title}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="random-anime">
          <h2>Anime Aleatorio</h2>
          <button onClick={getRandomAnime}>Obtener Anime Aleatorio</button>
          {randomAnime && (
            <div className="random-anime-info">
              <h3>{randomAnime.title}</h3>
              <img src={randomAnime.image_url} alt={randomAnime.title} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AnimeAPI