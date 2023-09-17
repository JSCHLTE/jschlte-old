import "../css/Projects.css"
import ffdprApp from "../assets/ffdpr-app.webp"
import mapApp from "../assets/map-app.webp"
import nbaApp from "../assets/nba-app.webp"
import notesApp from "../assets/notes-app.webp"
import portfolio from "../assets/portfolio.webp"
import tenziesApp from "../assets/tenzies-app.webp"
import weatherApp from "../assets/weather-app.webp"

export default function Projects() {
  return (
    <div id="component-wrapper">
    <main id="projects-wrapper">
      <div className="title-wrapper">
        <h2>PROJECTS</h2>
        <hr />
      </div>
      <div className="projects-cards-wrapper">
        <div className="project-card">
          <img src={portfolio} draggable="false"/>
          <div className="project-card-info">
              <h3>Portfolio Website</h3>
              <div className="project-card-desc">
                <p>I wanted to re-do my portfolio website in React and test out different React libraries.</p>
              </div>  
                <div className="project-card-footer">
                  <hr />
                  <a href="https://github.com/JSCHLTE" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                </div>
          </div>
        </div>
        <a href="https://jschlte.github.io/tenzies" target="_blank" rel="noreferrer">
          <div className="project-card">
            <img src={tenziesApp} draggable="false"/>
            <div className="project-card-info">
                <h3>Tenzies Game</h3>
                <div className="project-card-desc">
                  <p>Tenzies game I built while learning React.</p>
                </div>  
                  <div className="project-card-footer">
                    <hr />
                    <a href="https://github.com/JSCHLTE/tenzies" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                  </div>
            </div>
          </div>
        </a>
        <a href="https://jschlte.github.io/ffdpr" target="_blank" rel="noreferrer">
          <div className="project-card">
            <img src={ffdprApp} draggable="false"/>
            <div className="project-card-info">
                <h3>F.F.D.P.R.</h3>
                <div className="project-card-desc">
                  <p>I needed to randomize a draft order for my fantasy football league, so I made this. Made with React.</p>
                </div>  
                  <div className="project-card-footer">
                    <hr />
                    <a href="https://github.com/JSCHLTE/ffdpr" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                  </div>
            </div>
          </div>
        </a>
        <a href="https://nbaplayerstattracker.netlify.app/" target="_blank" rel="noreferrer">
          <div className="project-card">
            <img src={nbaApp} draggable="false"/>
            <div className="project-card-info">
                <h3>NBA Player Stat Tracker</h3>
                <div className="project-card-desc">
                  <p>I made this project to pratice pulling data from API&apos;s. This is made in vanilla JavaScript with a free API called <a className="link-a" href="https://www.balldontlie.io/home.html#introduction" target="_blank" rel="noreferrer">balldontlie</a>.</p>
                </div>  
                  <div className="project-card-footer">
                    <hr />
                    <a href="https://github.com/JSCHLTE/nba-player-stat-tracker" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                  </div>
            </div>
          </div>
        </a>
        <a href="https://harmonious-cocada-f1db99.netlify.app/" target="_blank" rel="noreferrer">
          <div className="project-card">
            <img src={mapApp} draggable="false"/>
            <div className="project-card-info">
                <h3>Google Maps Clone</h3>
                <div className="project-card-desc">
                  <p>Made in vanilla JavaScript using <a className="link-a" href="https://www.mapbox.com/" target="_blank" rel="noreferrer">Mapbox</a>.</p>
                </div>  
                  <div className="project-card-footer">
                    <hr />
                    <a href="https://github.com/JSCHLTE/google-maps-clone" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                  </div>
            </div>
          </div>
        </a>
        <a href="https://wwwnotes.netlify.app/" target="_blank" rel="noreferrer">
          <div className="project-card">
            <img src={notesApp} draggable="false"/>
            <div className="project-card-info">
                <h3>Notes App</h3>
                <div className="project-card-desc">
                  <p>Needed an app to store some notes in so I just made my own. This is made in vanilla JavaScript.</p>
                </div>
                  <div className="project-card-footer">
                    <hr />
                    <a href="https://github.com/JSCHLTE/wwwNotes" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                  </div>
            </div>
          </div>
        </a>
        <a href="https://weather-app-jordan.netlify.app/" target="_blank" rel="noreferrer">
          <div className="project-card">
            <img src={weatherApp} draggable="false"/>
            <div className="project-card-info">
                <h3>Weather App</h3>
                <div className="project-card-desc">
                  <p>More API practice using <a className="link-a" href="https://openweathermap.org/" target="_blank" rel="noreferrer">OpenWeather API</a>.</p>
                </div>
                  <div className="project-card-footer">
                    <hr />
                    <a href="https://github.com/JSCHLTE/Weather-App" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                  </div>
            </div>
          </div>
        </a>
      </div>
    </main>
    </div>
  )
}
