import "./../css/Home.css"
import { NavLink } from "react-router-dom"

export default function Home() {
  return (
    <main id="home-wrapper" className="f-jc-ac">
      <div className="home-title-wrapper">
        <h2>Jordan Schulte</h2>
        <p>19, Web Developer out of Buffalo!</p>
        <div className="home-buttons-wrapper">
          <NavLink to="/projects"><button className="home-button">PROJECTS</button></NavLink>
          <NavLink to="/about"><button className="home-button">ABOUT</button></NavLink>
        </div>
      </div>
    </main>
  )
}
