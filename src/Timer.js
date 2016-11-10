import React from 'react';

const format = number => (`0${number.toFixed(0)}`).slice(-2);

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      start: new Date().getTime(),
    };
  }

  render() {
    const now = new Date().getTime();
    const diff = (now - this.state.start) / 1000;
    const diffMin = format(diff / 60);
    const diffSec = format(diff % 60);
    return (<p>{diffMin}:{diffSec}</p>);
  }
}

export default Timer;
