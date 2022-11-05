import PropTypes from 'prop-types';
import { StatisticList, StatisticListButton } from './FeedbackOptions.styled';

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <StatisticList>
      {options.map(option => (
        <StatisticListButton
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
          key={option}
        >
          {option}
        </StatisticListButton>
      ))}
    </StatisticList>
  );
}