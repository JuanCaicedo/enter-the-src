import aframe from 'aframe';

aframe.registerComponent('load-tree', {
  schema: { type: 'string' },
  init() {
    const newBox = document.createElement('a-box');
    newBox.setAttribute('position', { x: -1, y: 1, z: -3 });
    newBox.setAttribute('color', '#4CC3D9');
    newBox.setAttribute('rotation', { x: 0, y: 10, z: 0 });
    newBox.setAttribute('height', 2);
    newBox.setAttribute('width', 3);

    const sceneEl = document.querySelector('a-scene');
    sceneEl.appendChild(newBox);
  }
});
