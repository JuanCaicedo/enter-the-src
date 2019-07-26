import aframe, { utils, primitives } from 'aframe';
import treeFixture from './tree-fixture';

const meshMixin = primitives.getMeshMixin();

aframe.registerPrimitive(
  'a-file',
  utils.extendDeep({}, meshMixin, {
    defaultComponents: {
      geometry: { primitive: 'box' }
    },
    mappings: {
      depth: 'geometry.depth',
      height: 'geometry.height',
      width: 'geometry.width'
    }
  })
);

const displayBox = ({ sceneEl }) => {
  const newBox = document.createElement('a-box');
  newBox.setAttribute('position', { x: -1, y: 1, z: -3 });
  newBox.setAttribute('color', '#4CC3D9');
  newBox.setAttribute('rotation', { x: 0, y: 10, z: 0 });
  newBox.setAttribute('height', 2);
  newBox.setAttribute('width', 3);
  newBox.setAttribute('material', 'side: double;');

  sceneEl.appendChild(newBox);
};

const displayFile = ({ file, sceneEl, offset }) => {
  const fileEl = document.createElement('a-file');
  sceneEl.appendChild(fileEl);
  fileEl.setAttribute('position', { x: offset, y: 1, z: -1 });
  fileEl.setAttribute('color', 'red');
  fileEl.setAttribute('rotation', { x: 0, y: 10, z: 0 });
  fileEl.setAttribute('height', 0.2);
  fileEl.setAttribute('width', 0.2);
  fileEl.setAttribute('depth', 0.2);
};

aframe.registerComponent('load-tree', {
  schema: { type: 'string' },
  init() {
    const sceneEl = document.querySelector('a-scene');
    displayBox({ sceneEl });

    const files = treeFixture.tree.children.filter(
      ({ type }) => type === 'file'
    );
    files.forEach((file, offset) => displayFile({ file, sceneEl, offset }));
  }
});
