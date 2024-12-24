export function XFollowCard({ formatUserName, userName, name, isFollowing }) {
  const imageSrc = `https://unavatar.io/${userName}`;

  return (
    <article className="x-follow-card">
      <header className="x-follow-card-header">
        <img className="x-follow-card-avatar" src={imageSrc} alt="El avatar" />
        <div className=".x-follow-card-info">
          <strong>{name}</strong>
          <span className=".x-follow-card-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className="x-follow-card-button">Seguir +</button>
      </aside>
    </article>
  );
}
