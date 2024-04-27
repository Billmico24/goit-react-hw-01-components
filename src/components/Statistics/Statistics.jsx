import PropTypes from 'prop-types';
import { ContainerStats, StatTitle, StatList, StatItem, StatLabel, StatPercentage } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    
  return (
    <ContainerStats >
        {title && <StatTitle >{title}</StatTitle>}
        <StatList >
          {stats.map(stat => (
              <StatItem key={stat.id} style={{backgroundColor:getRandomHexColor()}}>
                  <StatLabel >{stat.label}</StatLabel><br></br>
                  <StatPercentage > {stat.percentage }%</StatPercentage>
              </StatItem>
          ))}
        </StatList>
    </ContainerStats>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
};

