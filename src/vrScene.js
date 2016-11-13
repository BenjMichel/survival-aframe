import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import { Entity, Scene } from 'aframe-react';
import React, { PropTypes } from 'react';

import Camera from './components/Camera';
import Text from './components/Text';
import Sky from './components/Sky';

const VRScene = ({ camera, ennemies }) => (
  <Scene>
    <Camera position={`${camera.x} ${camera.y} ${camera.z}`} />

    <Sky src="url(images/skydome.jpg)" />

    <Text
      text="Hedroner Than Light!"
      color="#DADADA"
      position="-1.75 1 -3"
    />

    <Entity light={{ type: 'ambient', color: '#888' }} />
    <Entity light={{ type: 'directional', intensity: 0.5 }} position="-1 1 0" />
    <Entity light={{ type: 'directional', intensity: 1 }} position="1 1 0" />

    <a-assets>
      <a-asset-item id="tree-obj" src="assets/spaceship.obj" />
    </a-assets>
    <a-entity
      obj-model="obj: #tree-obj; mtl: #tree-mtl"
      position="0 0 -3"
    />

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
