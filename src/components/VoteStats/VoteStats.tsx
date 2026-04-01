import css from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

interface VoteStatsProps {
  votes: Votes;
  total: number;
  positive: number;
}

function VoteStats({ votes, total, positive }: VoteStatsProps) {
  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{total}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positive}%</strong>
      </p>
    </div>
  );
}

export default VoteStats;
