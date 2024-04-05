import './App.css'
import avatarjessica from "../public/avatar-jessica.jpeg"

function App() {
  return (
    <>
      {/* <h1>HOLA 5TO SEMESTRE</h1> */}
      <div className="container">
        <div className="profile-card">
          <img className="profile-img" src={avatarjessica} alt="Foto de perfil"></img>
          <h2 className="profile-title">Jessica Randall</h2>
          <h5 className="profile-subtitle">Front-end developer and avid reader</h5>
          <div className="social-buttons">
            <button className="social-button">GitHub</button>
            <button className="social-button">Frontend</button>
            <button className="social-button">LinkedIn</button>
            <button className="social-button">Twitter</button>
            <button className="social-button">Instagram</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
