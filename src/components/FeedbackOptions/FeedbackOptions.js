import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onClick }) => {
  return (
    <ul className={s.buttonList}>
      {options.map(option => (
        <li key={option} className={s.buttonItem}>
          <button onClick={onClick} className={s.button}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
