import {Entity} from 'aframe-react';
import React from 'react';

export default props => {
  const extraProps = {...props};
  delete extraProps.color;
  delete extraProps.text;

  return <Entity
    text={{text: props.text}} material={{color: props.color}}
    {...extraProps}/>
};
