import aframe, { utils, primitives } from 'aframe';
import 'aframe-layout-component';
import treeFixture from './tree-fixture';

const meshMixin = primitives.getMeshMixin();

const createElement = (type, props) => {
  const el = document.createElement(type);
  for (let [key, value] of Object.entries(props)) {
    el.setAttribute(key, value);
  }
  return el;
};

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
  const newBox = createElement('a-box', {
    position: { x: -1, y: 1, z: -3 },
    color: '#4CC3D9',
    rotation: { x: 0, y: 10, z: 0 },
    height: 2,
    width: 3,
    material: 'side: double;'
  });

  sceneEl.appendChild(newBox);
};

const fileElement = ({ file, offset }) => {
  const fileEl = createElement('a-file', {
    color: 'red',
    radius: 0.2,
    rotation: { x: 0, y: 0, z: 0 },
    position: { x: offset, y: 1, z: -1 }
  });
  return fileEl;
};

const createLayout = () => {
  const layout = createElement('a-entity', {
    layout: { type: 'circle', radius: 1 },
    rotation: { x: 90, y: 0, z: 0 },
    position: { x: 0, y: 1, z: -2 }
  });
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
