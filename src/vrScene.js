import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import { Entity, Scene } from 'aframe-react';
import React, { PropTypes } from 'react';

import Camera from './components/Camera';
import Text from './components/Text';
import Sky from './components/Sky';

class VRScene extends React.Component {
  render() {
    const { camera } = this.props;
    return (
      <Scene>
        <Camera position={`${camera.x} ${camera.y} ${camera.z}`}>
          {/* <a-cursor
            animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"
          /> */}
        </Camera>

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
          <a-asset-item id="tree-obj" src="assets/spaceship.obj"></a-asset-item>
        </a-assets>
        <a-entity
          obj-model="obj: #tree-obj; mtl: #tree-mtl"
          position="0 0 -3"
        />
      </Scene>
    );
  }
}

VRScene.propTypes = {
  camera: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number.isRequired,
  }).isRequired,
};

export default VRScene;
