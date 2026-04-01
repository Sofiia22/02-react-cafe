import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  onGood: () => void;
  onNeutral: () => void;
  onBad: () => void;
  onReset: () => void;
  hasVotes: boolean;
}

function VoteOptions({
  onGood,
  onNeutral,
  onBad,
  onReset,
  hasVotes,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={onGood}>
        Good
      </button>
      <button className={css.button} onClick={onNeutral}>
        Neutral
      </button>
      <button className={css.button} onClick={onBad}>
        Bad
      </button>
      {hasVotes && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default VoteOptions;
