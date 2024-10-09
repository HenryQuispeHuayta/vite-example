import { Link } from 'react-router-dom'
import './Home.css'

export const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Bienvenido al ejemplo</h1>
      <div className="page-links">
        <Link to="/anime" className="page-link">
          <h2>API de Anime</h2>
          <p>Explora información sobre anime usando la API de Jikan</p>
        </Link>
        <Link to="/todo" className="page-link">
          <h2>Ejemplo de TODO</h2>
          <p>Una simple aplicación de lista de tareas</p>
        </Link>
      </div>
    </div>
  )
}
