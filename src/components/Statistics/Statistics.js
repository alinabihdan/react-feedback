import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import Notification from '../Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2 className={s.title}>Statistics</h2>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <ul className={s.list}>
          <li className={s.listElement}>Good: {good}</li>
          <li className={s.listElement}>Neutral: {neutral}</li>
          <li className={s.listElement}>Bad: {bad}</li>
          <li className={s.listElement}>Total: {total}</li>
          <li className={s.listElement}>
            Positive feedback: {positivePercentage}%
          </li>
        </ul>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
