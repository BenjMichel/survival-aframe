import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import { Entity, Scene } from 'aframe-react';
import React, { PropTypes } from 'react';

import Camera from './components/Camera';
import Sky from './components/Sky';

const VRScene = ({ camera, ennemies }) => (
  <Scene>
    <Camera position={`${camera.x} ${camera.y} ${camera.z}`} />

    <Sky src="url(images/skydome.jpg)" position={`${camera.x} ${camera.y} ${camera.z}`} />

    <Entity light={{ type: 'ambient', color: '#888' }} />

    {ennemies.map((ennemy, index) => // TODO: do not use index as key
      <a-sphere
        key={index}
        position={`${ennemy.x} ${ennemy.y} ${ennemy.z}`}
        color={`${ennemy.color}`}
      />
    )}
  </Scene>
);

VRScene.propTypes = {
  camera: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number.isRequired,
  }).isRequired,
  ennemies: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  })),
};

export default VRScene;
