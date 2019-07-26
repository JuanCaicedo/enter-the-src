import aframe from 'aframe';
import 'aframe-layout-component';
import './primitives/a-file';
import treeFixture from './tree-fixture';
import createElement from './create-element';

const Box = () => {
  const newBox = createElement('a-box', {
    position: { x: -1, y: 1, z: -3 },
    color: '#4CC3D9',
    rotation: { x: 0, y: 10, z: 0 },
    height: 2,
    width: 3,
    material: 'side: double;'
  });
  return newBox;
};

const File = ({ file, offset }) => {
  const fileEl = createElement('a-file', {
    color: 'red',
    radius: 0.2,
    rotation: { x: 0, y: 0, z: 0 },
    position: { x: offset, y: 1, z: -1 }
  });
  return fileEl;
};

const Layout = () => {
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
    const box = Box({ sceneEl });
    sceneEl.appendChild(box);

    const fileEls = treeFixture.tree.children
      .filter(({ type }) => type === 'file')
      .map((file, offset) => File({ file, sceneEl, offset }));

    const layout = Layout();
    fileEls.forEach(fileEl => layout.appendChild(fileEl));

    sceneEl.appendChild(layout);
  }
});
