/* eslint-disable react/prop-types */
import { useState } from "react";

export function XFollowCard({ userName, name, initialIsFollowing }) {
  const [isFollowin, setIsFollowing] = useState(initialIsFollowing);

  const imageSrc = `https://unavatar.io/${userName}`;

  const text = isFollowin ? "Siguiendo" : "Seguir +";

  const buttonClassName = isFollowin
    ? "x-follow-card-button is-following"
    : "x-follow-card-button";

  const handleClick = () => {
    setIsFollowing(!isFollowin);
  };

  return (
    <article className="x-follow-card">
      <header className="x-follow-card-header">
        <img className="x-follow-card-avatar" src={imageSrc} alt="El avatar" />
        <div className=".x-follow-card-info">
          <span className=".x-follow-card-infoUserName">{userName}</span>
          <br />
          <span>{name}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="x-follow-card-text">{text}</span>

          <span className="x-follow-card-stopFollow">Dejar de Seguir -</span>
        </button>
      </aside>
    </article>
  );
}
