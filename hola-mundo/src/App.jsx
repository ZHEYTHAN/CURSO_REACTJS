import "./App.css";
import { XFollowCard } from "./XFollowCard";

export function App() {
  const format = (userName) => ` @${userName}`;

  return (
    <section className="XFollow-space">
      <XFollowCard
        formatUserName={format}
        isFollowing
        userName={"ZHEYTHAN"}
        name={"Andres Paez"}
      />
      <XFollowCard
        formatUserName={format}
        isFollowing
        userName={"kraken"}
        name={"rosa"}
      />
      <XFollowCard
        formatUserName={format}
        isFollowing
        userName={"magenta "}
        name={"fight Night"}
      />
      ;
    </section>
  );
}
