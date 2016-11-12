import React, { PropTypes } from 'react';

const format = number => (`0${number.toFixed(0)}`).slice(-2);

const Timer = ({ begin }) => {
  const now = new Date().getTime();
  const diff = (now - begin) / 1000;
  const diffMin = format(diff / 60);
  const diffSec = format(diff % 60);
  return (<p>{diffMin}:{diffSec}</p>);
};

Timer.propTypes = {
  begin: PropTypes.number,
};

export default Timer;
