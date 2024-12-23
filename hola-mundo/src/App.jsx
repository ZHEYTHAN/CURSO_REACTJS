import "./App.css";

export function App() {
  return (
    <article className="x-follow-card">
      <header className="x-follow-card-header">
        <img
          className="x-follow-card-avatar"
          src="https://unavatar.io/kikobeats"
          alt="El avatar"
        />
        <div className=".x-follow-card-info">
          <strong>Pepito Perez</strong>
          <span className=".x-follow-card-infoUserName">@AndresPaez</span>
        </div>
      </header>
      <aside>
        <button className="x-follow-card-button">Seguir</button>
      </aside>
    </article>
  );
}
