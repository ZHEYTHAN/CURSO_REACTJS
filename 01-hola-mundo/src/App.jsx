import "./App.css";
import { XFollowCard } from "./XFollowCard";

const users = [
  {
    userName: "AndresPaez",
    name: "AndresPaezH",
    isFollowin: true,
  },
  {
    userName: "PepitoPerez",
    name: "UsuarioNuevo",
    isFollowin: false,
  },
  {
    userName: "perroLoko",
    name: "Elver_galarga",
    isFollowin: true,
  },
];

export function App() {
  const format = (name) => ` @${name}`;

  return (
    <section className="XFollow-space">
      {users.map(({ userName, name, isFollowin }) => (
        <XFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowin}
          name={format(name)}
        ></XFollowCard>
      ))}
    </section>
  );
}
