import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import type { Votes } from "../../types/votes";

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateVote = (type: keyof Votes) => {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const total = votes.good + votes.neutral + votes.bad;

  const positive = total ? Math.round((votes.good / total) * 100) : 0;

  return (
    <div className={css.app}>
      <CafeInfo />

      <VoteOptions
        onGood={() => updateVote("good")}
        onNeutral={() => updateVote("neutral")}
        onBad={() => updateVote("bad")}
        onReset={resetVotes}
        hasVotes={total > 0}
      />

      {total > 0 ? (
        <VoteStats votes={votes} total={total} positive={positive} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
