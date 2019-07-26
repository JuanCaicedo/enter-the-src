import aframe, { utils, primitives } from 'aframe';
import 'aframe-layout-component';
import treeFixture from './tree-fixture';

const meshMixin = primitives.getMeshMixin();

aframe.registerPrimitive(
  'a-file',
  utils.extendDeep({}, meshMixin, {
    defaultComponents: {
      geometry: { primitive: 'sphere' }
    },
    mappings: {
      radius: 'geometry.radius'
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

const fileElement = ({ file, offset }) => {
  const fileEl = document.createElement('a-file');
  fileEl.setAttribute('position', { x: offset, y: 1, z: -1 });
  fileEl.setAttribute('color', 'red');
  fileEl.setAttribute('rotation', { x: 0, y: 0, z: 0 });
  fileEl.setAttribute('radius', 0.2);
  return fileEl;
};

const createLayout = () => {
  const layout = document.createElement('a-entity');
  layout.setAttribute('layout', { type: 'circle', radius: 1 });
  layout.setAttribute('rotation', { x: 90, y: 0, z: 0 });
  layout.setAttribute('position', { x: 0, y: 1, z: -2 });
  return layout;
};

aframe.registerComponent('load-tree', {
  schema: { type: 'string' },
  init() {
    const sceneEl = document.querySelector('a-scene');
    displayBox({ sceneEl });

    const fileEls = treeFixture.tree.children
      .filter(({ type }) => type === 'file')
      .map((file, offset) => fileElement({ file, sceneEl, offset }));

    const layout = createLayout();
    fileEls.forEach(fileEl => layout.appendChild(fileEl));

    sceneEl.appendChild(layout);
  }
});
