import React, { PropTypes } from 'react';

const format = number => (`0${number.toFixed(0)}`).slice(-2);

const Timer = ({ begin, end }) => {
  const now = end || new Date().getTime();
  const diff = (now - begin) / 1000;
  const diffMin = format(diff / 60);
  const diffSec = format(diff % 60);
  if (end) {
    return (
      <p style={{ fontSize: 48, color: 'red' }}>
        Congrats, your time is {diffMin}:{diffSec}
      </p>
    );
  }
  return (<p>{diffMin}:{diffSec}</p>);
};

Timer.propTypes = {
  begin: PropTypes.number,
  end: PropTypes.number,
};

export default Timer;
